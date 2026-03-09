import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai"
import { QUESTION_PROMPT, FINAL_PLAN_PROMPT } 
from "@/lib/prompts/tripPrompts";

export const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY,
});


// Models (best → cheapest → most obedient)
const MODELS = [
  "meta-llama/llama-3.3-70b-instruct",
  "mistralai/mistral-7b-instruct",
  "nousresearch/hermes-3-llama-3.1-70b",
  "meta-llama/llama-3.2-3b-instruct:free",
];

// Generic LLM caller
async function callLLM(
  model: string,
  messages: any[],
  isfinal: boolean
) {
  return openai.chat.completions.create({
    model,
    temperature: 0.2,
    response_format: { type: "json_object" },
    messages: [
      { role: "system", content: isfinal ? FINAL_PLAN_PROMPT : QUESTION_PROMPT },
      ...messages,
    ],
  });
}

export async function POST(req: NextRequest) {
  const { messages, isfinal } = await req.json();

  let lastError: any = null;

  for (const model of MODELS) {
    try {
      console.log(`Trying model: ${model}`);

      const completion = await callLLM(model, messages, isfinal);
      const content = completion.choices[0].message.content;

      return NextResponse.json(JSON.parse(content ?? "{}"));
    } catch (err: any) {
      const code = err?.error?.code;
      lastError = err;

      if (code === 402 || code === 429) {
        console.log(`Model failed (${code}). Trying next fallback...`);
        await new Promise(r => setTimeout(r, 800));
        continue;
      } else {
        break;
      }
    }
  }

  return NextResponse.json(
    { error: "All AI models failed", details: lastError },
    { status: 500 }
  );
}
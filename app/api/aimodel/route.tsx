import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai"

export const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY,
});

const PROMT = `You are an AI Trip Planner Agent. Your goal is to help the user plan a trip by asking one relevant trip-related question at a time.
Only ask questions about the following details in order, and wait for the user’s answer before asking the next:
1.Starting location (source)
2.Destination city or country
3.Group size (Solo, Couple, Family, Friends)
4.Budget (Low, Medium, High)
5.Trip duration (number of days)
6.Travel interests (e.g. adventure, sightseeing, cultural, food, nightlife, relaxation)
Special requirements or preferences (if any)
Do not ask multiple questions at once, and never ask irrelevant questions.
If any answer is missing or unclear, politely ask the user to clarify before proceeding.
Always maintain a conversational, interactive style while asking questions.
Along with response also send which UI component to display for generating UI, for example
budget / groupSize / tripDuration / final,
where Final means AI generating the complete final output.
Once all required information is collected, generate and return a strict JSON response only (no explanations or extra text) with the following JSON schema:
{
  "resp": "Text Resp",
  "ui": "budget/groupSize/tripDuration/final"
}
`

const Prompt2 = `
Generate a Travel Plan in STRICT JSON format using the given details.

IMPORTANT:
- The output MUST include a "source" field (starting city).
- If the source city is NOT provided by the user, assume a reasonable default such as "User's City".
- Do NOT omit the source field under any circumstance.
- Do NOT add any explanation or extra text outside JSON.

Give hotel options and a detailed itinerary.

Output Schema:
{
  "trip_plan": {
    "source": "string",
    "destination": "string",
    "duration": "string",
    "region": "string",
    "budget": "string",
    "group_size": "string",
    "hotels": [
      {
        "hotel_name": "string",
        "hotel_address": "string",
        "price_per_night": "string",
        "hotel_image_url": "string",
        "geo_coordinates": {
          "latitude": "number",
          "longitude": "number"
        },
        "rating": "number",
        "description": "string"
      }
    ],
    "itinerary": [
      {
        "day": "number",
        "day_plan": "string",
        "best_time_to_visit_day": "string",
        "activities": [
          {
            "place_name": "string",
            "place_details": "string",
            "place_image_url": "string",
            "geo_coordinates": {
              "latitude": "number",
              "longitude": "number"
            },
            "place_address": "string",
            "ticket_pricing": "string",
            "time_travel_each_location": "string",
            "best_time_to_visit": "string"
          }
        ]
      }
    ]
  }
}
`;


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
      { role: "system", content: isfinal ? Prompt2 : PROMT },
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
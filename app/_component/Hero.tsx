"use client";

import { Globe2, Send, Plane, Building2, TreePalm } from "lucide-react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { theme } from "@/app/theme";
import FeatureCards from "./Feature";

export const suggestions = [
  {
    title: "Create new Trip",
    icon: <Globe2 className="text-blue-400 h-5 w-5" />,
  },
  {
    title: "Paris Gateway",
    icon: <Plane className="text-green-500 h-5 w-5" />,
  },
  {
    title: "Bali Escape",
    icon: <TreePalm className="text-orange-400 h-5 w-5" />,
  },
  {
    title: "Dubai Explorer",
    icon: <Building2 className="text-blue-400 h-5 w-5" />,
  },
];

const Hero = () => {
  const { user } = useUser();
  const router = useRouter();

  const onSend = () => {
    if (!user) {
      router.push("/sign-in");
      return;
    }
    router.push("/create-new-trip");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: theme.bgMain,
        color: theme.textPrimary,
        overflowX: "hidden",
      }}
    >
      {/* ================= HERO SECTION ================= */}
      <section
        className="flex flex-col items-center text-center gap-6"
        style={{
          padding: "120px 40px 80px",
          background: `radial-gradient(circle at top, rgba(59,130,246,0.15), transparent)`,
        }}
      >
        {/* Heading */}
        <h1 className="text-4xl font-bold">
          Hey, I'm your personal{" "}
          <span className="text-[#444ce7]">Trip Planner</span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-xl text-[#94a3b8]">
          Tell me what you want, and I'll handle the rest: Flights, Hotels, Trip
          Planning — all in seconds.
        </p>

        {/* Input Box */}
        <div className="w-full max-w-xl mt-4">
          <div
            style={{
              position: "relative",
              backgroundColor: "rgba(30, 41, 59, 0.4)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(59, 130, 246, 0.5)",
              borderRadius: "16px",
              padding: "16px",
              boxShadow: "0 0 20px rgba(59, 130, 246, 0.2)",
            }}
          >
            <textarea
              placeholder="Create a trip for Paris from New York"
              style={{
                width: "100%",
                height: "112px",
                resize: "none",
                backgroundColor: "transparent",
                fontSize: "0.875rem",
                color: "#ffffff",
                outline: "none",
                border: "none",
                paddingRight: "48px",
              }}
            />

            <button
              onClick={onSend}
              style={{
                position: "absolute",
                padding : "12px",
                bottom: "16px",
                right: "16px",
                height: "40px",
                width: "40px",
                borderRadius: "8px",
                backgroundColor: "#3b82f6",
                border: "none",
                cursor: "pointer",
              }}
            >
              <Send className="h-4 w-4 text-white" />
            </button>
          </div>
        </div>

        {/* Suggestions */}
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          {suggestions.map((suggestion, index) => (
            <div
              key={index}
              className="flex items-center gap-2 border rounded-full px-3 py-1 
              cursor-pointer hover:bg-[#444ce7] hover:text-white transition"
            >
              {suggestion.icon}
              <span className="text-sm">{suggestion.title}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FEATURE SECTION ================= */}
      <section
      id="features"
        className="px-6 pb-24"
        style={{
          background: `radial-gradient(circle at bottom, rgba(59,130,246,0.1), transparent)`,
        }}
      >
        <div className="max-w-6xl mx-auto">
          <FeatureCards />
        </div>
      </section>
    </div>
  );
};

export default Hero;

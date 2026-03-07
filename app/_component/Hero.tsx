"use client";

import { Globe2, Plane, Building2, TreePalm } from "lucide-react";
import { useUser } from "@clerk/nextjs";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { theme } from "@/app/theme";
import FeatureCards from "./Feature";
import HowItWorks from "./HowItWork";

export const suggestions = [
  { title: "Create new Trip", icon: <Globe2 className="text-blue-400 h-5 w-5" /> },
  { title: "Paris Gateway", icon: <Plane className="text-green-500 h-5 w-5" /> },
  { title: "Bali Escape", icon: <TreePalm className="text-orange-400 h-5 w-5" /> },
  { title: "Dubai Explorer", icon: <Building2 className="text-blue-400 h-5 w-5" /> },
];

const Hero = () => {
  const { user } = useUser();
  const router = useRouter();
  const [message, setMessage] = useState("");

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
        className="flex flex-col items-center text-center gap-6 w-full"
        style={{
          padding: "120px 40px 80px",
          background: `radial-gradient(circle at top, rgba(59,130,246,0.15), transparent)`,
        }}
      >
        <h1 className="text-3xl md:text-4xl font-bold w-full">
          Hey, I'm your personal{" "}
          <span className="text-[#444ce7]">Trip Planner</span>
        </h1>

        <p className="w-full max-w-xl text-[#94a3b8]">
          Tell me what you want, and I'll handle the rest: Flights, Hotels, Trip
          Planning — all in seconds.
        </p>

        <div className="flex flex-wrap justify-center gap-2 mt-4 w-full">
          {suggestions.map((suggestion, index) => (
            <div
              key={index}
              onClick={onSend}
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
        className="w-full pb-24 px-4 md:px-8 lg:px-40"
        style={{
          background: `radial-gradient(circle at bottom, rgba(59,130,246,0.1), transparent)`,
        }}
      >
        <FeatureCards />
      </section>

      {/* ================= HOW IT WORKS SECTION ================= */}
      <section
        id="how-it-works"
        className="w-full pb-24 px-4 md:px-8 lg:px-40"
        style={{
          background: `radial-gradient(circle at bottom, rgba(59,130,246,0.1), transparent)`,
        }}
      >
        <HowItWorks />
      </section>
    </div>
  );
};

export default Hero;

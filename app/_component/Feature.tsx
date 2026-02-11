"use client";

export default function FeatureCards() {
  return (
    <div className="mt-10 space-y-10">

      {/* Section Heading */}
      <div>
        <p className="text-sm uppercase tracking-widest text-white/60">
          What our AI Trip Planner does
        </p>
        <h2 className="mt-3 text-3xl font-bold text-white leading-snug">
          From questions to a complete travel plan
        </h2>
      </div>

      {/* Cards */}
      <div className="space-y-6">

        {/* Row 1 – Left */}
        <div className="flex items-center gap-6">
          <div
            className="flex-1 rounded-2xl bg-white/10 backdrop-blur-md 
            border border-white/10 p-7 text-white
            hover:bg-white/15 transition-colors"
          >
            <h3 className="text-xl font-bold">
              Guided Trip Discovery
            </h3>

            <p className="mt-4 text-base leading-relaxed text-white/75">
              The AI asks <strong className="text-white">one question at a time</strong>
              —covering starting location, destination, group size, budget,
              and trip duration—so the conversation stays simple, focused,
              and easy to follow.
            </p>
          </div>

          <div className="h-16 w-16 rounded-full bg-blue-500/20 
            flex items-center justify-center text-2xl">
            🧠
          </div>
        </div>

        {/* Row 2 – Right */}
        <div className="flex items-center gap-6 flex-row-reverse">
          <div
            className="flex-1 rounded-2xl bg-white/10 backdrop-blur-md 
            border border-white/10 p-7 text-white
            hover:bg-white/15 transition-colors"
          >
            <h3 className="text-xl font-bold">
              Preference-Aware Planning
            </h3>

            <p className="mt-4 text-base leading-relaxed text-white/75">
              Your responses help the system understand your
              <strong className="text-white"> travel style, interests, and constraints</strong>,
              ensuring the recommendations feel personal rather than generic.
            </p>
          </div>

          <div className="h-16 w-16 rounded-full bg-purple-500/20 
            flex items-center justify-center text-2xl">
            🗺️
          </div>
        </div>

        {/* Row 3 – Left */}
        <div className="flex items-center gap-6">
          <div
            className="flex-1 rounded-2xl bg-white/10 backdrop-blur-md 
            border border-white/10 p-7 text-white
            hover:bg-white/15 transition-colors"
          >
            <h3 className="text-xl font-bold">
              UI-Driven Interaction
            </h3>

            <p className="mt-4 text-base leading-relaxed text-white/75">
              As you respond, the interface adapts automatically—displaying
              the <strong className="text-white">right UI components</strong> for
              budget, group size, trip duration, and final review.
            </p>
          </div>

          <div className="h-16 w-16 rounded-full bg-green-500/20 
            flex items-center justify-center text-2xl">
            🎛️
          </div>
        </div>

        {/* Row 4 – Right */}
        <div className="flex items-center gap-6 flex-row-reverse">
          <div
            className="flex-1 rounded-2xl bg-white/10 backdrop-blur-md 
            border border-white/10 p-7 text-white
            hover:bg-white/15 transition-colors"
          >
            <h3 className="text-xl font-bold">
              Structured AI Trip Output
            </h3>

            <p className="mt-4 text-base leading-relaxed text-white/75">
              Once all details are collected, the AI generates a
              <strong className="text-white"> complete, structured travel plan</strong>—
              including hotels and a day-wise itinerary—ready for display or
              further use.
            </p>
          </div>

          <div className="h-16 w-16 rounded-full bg-yellow-500/20 
            flex items-center justify-center text-2xl">
            📄
          </div>
        </div>

      </div>
    </div>
  );
}

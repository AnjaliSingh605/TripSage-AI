"use client";
import { TripInfo } from "@/app/create-new-trip/_components/ChatBox";
import {
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import { Calendar, Users, Wallet2 } from "lucide-react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({
  data,
  trip_data,
}: {
  data: TimelineEntry[];
  trip_data: TripInfo;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full dark:bg-neutral-950 font-sans px-2 md:px-10"
      ref={containerRef}
    >
      {/* Header */}
      <div className="max-w-7xl mx-auto py-7 px-2 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 font-bold dark:text-white max-w-4xl leading-tight">
          Your Trip Itinerary from{" "}
          <strong className="text-[#444ce7]">{trip_data?.source}</strong> to{" "}
          <strong className="text-[#444ce7]">{trip_data?.destination}</strong>{" "}
          is Ready
        </h2>

        <div className="flex flex-wrap gap-4 items-center mt-2">
          <div className="flex gap-2 items-center">
            <Calendar className="h-4 w-4 flex-shrink-0" />
            <span className="text-sm">{trip_data.duration}</span>
          </div>
          <div className="flex gap-2 items-center">
            <Wallet2 className="h-4 w-4 flex-shrink-0" />
            <span className="text-sm">{trip_data.budget}</span>
          </div>
          <div className="flex gap-2 items-center">
            <Users className="h-4 w-4 flex-shrink-0" />
            <span className="text-sm">{trip_data.group_size}</span>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row justify-start pt-10 lg:gap-10"
          >
            {/* Left Title Section */}
            <div className="sticky flex items-center top-40 self-start max-w-xs lg:max-w-sm lg:w-[35%]">
              <div className="h-10 absolute left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>

              <h3 className="hidden lg:block text-xl pl-20 text-3xl font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
            </div>

            {/* Content */}
            <div className="relative pl-16 pr-2 lg:pl-4 w-full">
              <h3 className="lg:hidden block text-xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>

              <div className="w-full overflow-hidden">
                {item.content}
              </div>
            </div>
          </div>
        ))}

        {/* Timeline Line (animation unchanged) */}
        <div
          style={{ height: height + "px" }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px]
          bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))]
          from-transparent via-neutral-200 dark:via-neutral-700 to-transparent
          [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{ height: heightTransform, opacity: opacityTransform }}
            className="absolute inset-x-0 top-0 w-[2px]
            bg-gradient-to-t from-purple-500 via-blue-500 to-transparent
            rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
"use client";

import { Mail } from "lucide-react";
import { theme } from "@/app/theme";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: theme.bgPanel,
        borderTop: `1px solid ${theme.border}`,
      }}
      className="px-6 py-10 mt-20"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-8">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-6">

          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-white">
              AI Trip Planner
            </h3>
            <p className="mt-2 text-sm text-white/60 max-w-sm">
              Plan smarter trips with AI — from destination discovery
              to a complete travel itinerary in seconds.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-12">
            <div className="flex flex-col gap-2">
              <h4 className="text-sm font-semibold text-white">
                Product
              </h4>
              <span className="text-sm text-white/60 cursor-pointer hover:text-white">
                Create Trip
              </span>
              <span className="text-sm text-white/60 cursor-pointer hover:text-white">
                Features
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <h4 className="text-sm font-semibold text-white">
                Contact
              </h4>
              <div className="flex items-center gap-2 text-sm text-white/60">
                <Mail className="h-4 w-4" />
                support@aitripplanner.com
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between gap-4 
          border-t border-white/10 pt-6 text-sm text-white/50">
          <span>© {new Date().getFullYear()} AI Trip Planner. All rights reserved.</span>
          <span>Build Trip with ❤️ using AI</span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

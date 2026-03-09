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
      className="mt-20"
    >
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col gap-10">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:justify-between gap-10">

          {/* Brand */}
          <div className="max-w-sm">
            <h3 className="text-xl font-bold text-white">
              AI Trip Planner
            </h3>
            <p className="mt-2 text-sm text-white/60">
              Plan smarter trips with AI — from destination discovery
              to a complete travel itinerary in seconds.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-10">

            {/* Product */}
            <div className="flex flex-col gap-2">
              <h4 className="text-sm font-semibold text-white">Product</h4>
              <span className="text-sm text-white/60 cursor-pointer hover:text-white">
                Create Trip
              </span>
              <span className="text-sm text-white/60 cursor-pointer hover:text-white">
                Features
              </span>
            </div>

            {/* Contact */}
            <div className="flex flex-col gap-2">
              <h4 className="text-sm font-semibold text-white">Contact</h4>
              <div className="flex items-center gap-2 text-sm text-white/60">
                <Mail className="h-4 w-4" />
                support@aitripplanner.com
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center md:justify-between gap-4 
        border-t border-white/10 pt-6 text-sm text-white/50 text-center md:text-left">

          <span>
            © {new Date().getFullYear()} AI Trip Planner. All rights reserved.
          </span>

          <span>
            Build Trip with ❤️ using AI
          </span>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
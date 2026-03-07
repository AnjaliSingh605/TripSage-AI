import React from 'react';
import { Plane, Settings, ClipboardList, Zap, Brain, Check } from 'lucide-react';

const HowItWorks = () => {
    return (
        <div className="relative w-full py-20 px-4 md:px-8 lg:px-16 overflow-hidden bg-transparent font-sans">

            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

            {/* Removed max-w-6xl so it fills full width */}
            <div className="w-full relative z-10">

                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
                        How It Works
                    </h2>
                    <div className="h-1 w-40 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full shadow-[0_0_20px_rgba(96,165,250,0.5)]" />
                </div>

                {/* Step Cards — 1 col mobile/tablet, 3 col desktop */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
                    <StepCard
                        number="1"
                        title="Tell Us Your Destination"
                        description="Choose any destination, dates & vibe. We've got the rest."
                        icon={<Plane className="w-7 h-7 text-blue-400 group-hover:rotate-12 transition-transform" />}
                    />
                    <StepCard
                        number="2"
                        title="AI Optimizes Everything"
                        description="Smart engine finds the best stays and activities without the hassle."
                        icon={<Settings className="w-7 h-7 text-purple-400 group-hover:rotate-90 transition-transform duration-700" />}
                    />
                    <StepCard
                        number="3"
                        title="Get a Complete Travel Blueprint"
                        description="Receive a ready-to-go itinerary with the best options for your trip."
                        icon={<ClipboardList className="w-7 h-7 text-cyan-400" />}
                    />
                </div>

                {/* Bottom Feature Cards — 1 col mobile/tablet, 2 col desktop */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 md:p-10 backdrop-blur-md transition-all hover:bg-white/10 hover:border-blue-500/30">
                        <div className="relative z-10">
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-6">Smart Budget Engine</h3>
                            <ul className="space-y-4">
                                <FeatureItem text="Day-wise itinerary generated based on duration & interests" />
                                <FeatureItem text="Experience-focused recommendations for your group type" />
                                <FeatureItem text="Smart activity allocation to match your travel style" />
                            </ul>
                        </div>
                        <Zap className="absolute -right-4 -bottom-4 w-32 h-32 text-blue-500/10 group-hover:text-blue-500/20 transition-all duration-500 blur-xl" />
                    </div>

                    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 md:p-10 backdrop-blur-md transition-all hover:bg-white/10 hover:border-purple-500/30">
                        <div className="relative z-10">
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-6">Why TripSage AI?</h3>
                            <ul className="space-y-4">
                                <FeatureItem text="Focused trip discovery" />
                                <FeatureItem text="Preference-aware logic engine" />
                                <FeatureItem text="No overwhelming forms or long input sheets" />
                                <FeatureItem text="Structured final blueprint generation" />
                            </ul>
                        </div>
                        <Brain className="absolute -right-4 -bottom-4 w-32 h-32 text-purple-500/10 group-hover:text-purple-500/20 transition-all duration-500 blur-xl" />
                    </div>

                </div>
            </div>
        </div>
    );
};

const StepCard = ({ number, title, description, icon }: any) => (
    <div className="group relative p-6 md:p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:bg-white/10">
        <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3 md:gap-4">
                <span className="text-5xl md:text-6xl font-black text-white/20 group-hover:text-white/10 transition-colors">
                    {number}
                </span>
                <div className="flex flex-col">
                    <h3 className="text-lg md:text-xl font-bold text-white">{title}</h3>
                    <span className="mt-2 h-[1px] w-full bg-white/40 group-hover:bg-indigo-400 transition-all duration-300"></span>
                </div>
            </div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex-shrink-0">
                {icon}
            </div>
        </div>
        <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
    </div>
);

const FeatureItem = ({ text }: { text: string }) => (
    <li className="flex items-center gap-3">
        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center">
            <Check className="w-3 h-3 text-blue-400" strokeWidth={4} />
        </div>
        <span className="text-slate-300 text-sm font-medium">{text}</span>
    </li>
);

export default HowItWorks;

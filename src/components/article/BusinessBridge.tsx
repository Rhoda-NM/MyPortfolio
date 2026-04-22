import React from "react";
import { Target } from "lucide-react";

interface BusinessBridgeProps {
  children: React.ReactNode;
}

export default function BusinessBridge({ children }: BusinessBridgeProps) {
  return (
    <div className="my-10 bg-gradient-to-b from-[#7B2CBF]/10 to-transparent p-[1px] rounded-xl">
      <div className="bg-[#080809] border border-white/5 p-6 rounded-xl relative overflow-hidden">
        <div className="flex items-center gap-2 mb-4">
          <Target className="w-4 h-4 text-[#7B2CBF]" />
          <h3 className="font-mono text-xs uppercase tracking-widest text-[#7B2CBF] font-bold">
            Why This Matters
          </h3>
        </div>
        
        <div className="text-gray-300 font-sans text-base leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

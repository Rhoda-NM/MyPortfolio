import React from "react";
import { AlertCircle, ShieldAlert, CheckCircle2 } from "lucide-react";

interface TacticalCaseStudyProps {
  incidentContent: React.ReactNode;
  failureContent: React.ReactNode;
  resolutionContent: React.ReactNode;
}

export default function TacticalCaseStudy({
  incidentContent,
  failureContent,
  resolutionContent,
}: TacticalCaseStudyProps) {
  return (
    <div className="my-14 bg-[#040405] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
      <div className="bg-white/[0.03] border-b border-white/5 py-3 px-6 flex items-center justify-between">
        <span className="font-mono text-xs text-white/50 tracking-widest uppercase">
          [CASE_STUDY]
        </span>
        <div className="flex gap-2">
          <div className="w-2 h-2 rounded-full bg-red-500/50" />
          <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
          <div className="w-2 h-2 rounded-full bg-green-500/50" />
        </div>
      </div>
      
      <div className="p-8 md:p-10 flex flex-col gap-8">
        {/* Step 1: Incident */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-shrink-0 mt-1">
            <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center border border-red-500/20">
              <AlertCircle className="w-5 h-5 text-red-400" />
            </div>
          </div>
          <div>
            <h4 className="font-heading font-medium text-lg text-white mb-2">1. The Incident</h4>
            <div className="text-gray-400 font-sans text-base leading-relaxed">
              {incidentContent}
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Step 2: Architecture Failure */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-shrink-0 mt-1">
            <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center border border-orange-500/20">
              <ShieldAlert className="w-5 h-5 text-orange-400" />
            </div>
          </div>
          <div>
            <h4 className="font-heading font-medium text-lg text-white mb-2">2. The Architecture Failure</h4>
            <div className="text-gray-400 font-sans text-base leading-relaxed">
              {failureContent}
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Step 3: Resolution & Lesson */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-shrink-0 mt-1">
            <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center border border-green-500/20">
              <CheckCircle2 className="w-5 h-5 text-green-400" />
            </div>
          </div>
          <div>
            <h4 className="font-heading font-medium text-lg text-white mb-2">3. The Resolution & Lesson</h4>
            <div className="text-gray-400 font-sans text-base leading-relaxed">
              {resolutionContent}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

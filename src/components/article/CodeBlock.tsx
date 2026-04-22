import React from "react";
import { FileCode, Copy } from "lucide-react";

interface CodeBlockProps {
  filename: string;
  code: string;
}

export default function CodeBlock({ filename, code }: CodeBlockProps) {
  return (
    <div className="my-10 rounded-xl overflow-hidden border border-white/10 bg-[#0A0A0C]">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-white/[0.02] border-b border-white/5">
        <div className="flex items-center gap-2 text-white/50 text-sm font-mono">
          <FileCode className="w-4 h-4" />
          <span>{filename}</span>
        </div>
        <button className="text-white/30 hover:text-white/80 transition-colors p-1">
          <Copy className="w-4 h-4" />
        </button>
      </div>
      
      {/* Code Container */}
      <div className="p-4 md:p-6 overflow-x-auto">
        <pre className="font-mono text-sm leading-loose text-gray-300">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}

"use client";

import { profile } from "@/data/portfolio-data";

export default function AboutSection() {
  return (
    <div>
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-8">
        <span className="text-xs text-[#999] uppercase tracking-wider">01</span>
        <div className="flex-1 h-px bg-[#e5e5e5]" />
        <span className="text-xs text-[#999] uppercase tracking-wider">About</span>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Bio Card - Large */}
        <div className="md:col-span-2 bg-white rounded-2xl p-8 border border-[#e5e5e5]">
          <h2 className="text-2xl font-light text-[#1a1a1a] mb-6">About Me</h2>
          <p className="text-[#666] leading-relaxed mb-4">
            {profile.about}
          </p>
          <p className="text-[#666] leading-relaxed">
            My approach combines the rigor of Applied Statistics with the creativity of AI Development. 
            I don&apos;t just train models; I build the infrastructure that makes them useful and scalable.
          </p>
        </div>

        {/* Philosophy */}
        <div className="bg-[#f5f5f5] rounded-2xl p-6">
          <p className="text-xs text-[#999] uppercase tracking-wider mb-2">Philosophy</p>
          <p className="text-[#1a1a1a] font-medium">Math-First AI</p>
          <p className="text-sm text-[#666] mt-2">Leveraging mathematical precision for enterprise solutions</p>
        </div>

        {/* Focus */}
        <div className="bg-[#f5f5f5] rounded-2xl p-6">
          <p className="text-xs text-[#999] uppercase tracking-wider mb-2">Focus</p>
          <p className="text-[#1a1a1a] font-medium">Enterprise AI</p>
          <p className="text-sm text-[#666] mt-2">RAG, Deep Learning, and Advanced Analytics</p>
        </div>

        {/* Stats Row */}
        <div className="md:col-span-2 grid grid-cols-4 gap-4">
          {[
            { label: "GPA", value: "3.06" },
            { label: "Experience", value: "4+" },
            { label: "Projects", value: "16+" },
            { label: "Hackathons", value: "5+" },
          ].map((stat) => (
            <div key={stat.label} className="bg-white rounded-2xl p-4 border border-[#e5e5e5] text-center">
              <p className="text-2xl font-light text-[#1a1a1a]">{stat.value}</p>
              <p className="text-[10px] text-[#999] uppercase tracking-wider mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

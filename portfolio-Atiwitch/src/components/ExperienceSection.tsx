"use client";

import { experience } from "@/data/portfolio-data";

export default function ExperienceSection() {
  return (
    <div>
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-8">
        <span className="text-xs text-[#999] uppercase tracking-wider">03</span>
        <div className="flex-1 h-px bg-[#e5e5e5]" />
        <span className="text-xs text-[#999] uppercase tracking-wider">Experience</span>
      </div>

      <h2 className="text-2xl font-light text-[#1a1a1a] mb-8">Professional Experience</h2>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {experience.map((exp, idx) => (
          <div
            key={idx}
            className={`${idx === 0 ? 'md:col-span-2' : ''} bg-white rounded-2xl p-6 border border-[#e5e5e5] hover:border-[#ccc] transition-colors`}
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-xs text-[#999] uppercase tracking-wider mb-1">{exp.company}</p>
                <h3 className="text-lg font-medium text-[#1a1a1a]">{exp.role}</h3>
              </div>
              <span className="text-xs text-[#999] bg-[#f5f5f5] px-3 py-1 rounded-full whitespace-nowrap">
                {exp.period}
              </span>
            </div>
            
            <ul className="space-y-2">
              {exp.details.map((detail, i) => (
                <li key={i} className="text-sm text-[#666] flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#999] mt-2 flex-shrink-0" />
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

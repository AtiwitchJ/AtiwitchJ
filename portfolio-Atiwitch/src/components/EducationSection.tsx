"use client";

import { education, achievements } from "@/data/portfolio-data";

export default function EducationSection() {
  return (
    <div>
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-8">
        <span className="text-xs text-[#999] uppercase tracking-wider">04</span>
        <div className="flex-1 h-px bg-[#e5e5e5]" />
        <span className="text-xs text-[#999] uppercase tracking-wider">Education</span>
      </div>

      <h2 className="text-2xl font-light text-[#1a1a1a] mb-8">Education & Achievements</h2>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Education Cards */}
        {education.map((edu, idx) => (
          <div
            key={idx}
            className={`${idx === 0 ? 'md:col-span-2' : ''} bg-[#1a1a1a] rounded-2xl p-6 text-white`}
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-xs text-[#999] uppercase tracking-wider mb-1">{edu.school}</p>
                <h3 className="text-lg font-medium">{edu.degree}</h3>
              </div>
              <span className="text-xs text-[#666] bg-white/10 px-3 py-1 rounded-full">
                {edu.period}
              </span>
            </div>
            <p className="text-sm text-[#999]">GPA: {edu.gpa}</p>
          </div>
        ))}

        {/* Achievement Cards */}
        {achievements.slice(0, 6).map((achievement, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl p-5 border border-[#e5e5e5] hover:border-[#ccc] transition-colors"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-[#999] bg-[#f5f5f5] px-2 py-1 rounded">
                {achievement.year}
              </span>
            </div>
            <h4 className="text-sm font-medium text-[#1a1a1a] mb-1 line-clamp-2">
              {achievement.title}
            </h4>
            <p className="text-xs text-[#666] line-clamp-2">
              {achievement.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

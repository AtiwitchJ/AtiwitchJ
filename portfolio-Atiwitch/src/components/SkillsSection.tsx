"use client";

import { technicalSkills } from "@/data/portfolio-data";
import { useState } from "react";
import { 
  Code2, 
  Brain, 
  Layers, 
  Database, 
  BarChart3, 
  Cloud,
  Sparkles,
  ChevronRight,
  Star,
  Clock
} from "lucide-react";

type SkillLevel = "Advanced" | "Intermediate" | "Beginner";

const levelConfig: Record<SkillLevel, { 
  color: string; 
  bg: string;
  border: string;
  label: string;
  icon: typeof Star;
}> = {
  Advanced: { 
    color: "text-emerald-700", 
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    label: "Expert",
    icon: Star
  },
  Intermediate: { 
    color: "text-blue-700", 
    bg: "bg-blue-50",
    border: "border-blue-200",
    label: "Skilled",
    icon: Star
  },
  Beginner: { 
    color: "text-amber-700", 
    bg: "bg-amber-50",
    border: "border-amber-200",
    label: "Learning",
    icon: Star
  },
};

const categoryIcons: Record<string, typeof Code2> = {
  programmingLanguages: Code2,
  aiFrameworks: Brain,
  fullStack: Layers,
  databases: Database,
  dataScience: BarChart3,
  devOps: Cloud,
};

const categoryLabels: Record<string, string> = {
  programmingLanguages: "Languages",
  aiFrameworks: "AI & ML",
  fullStack: "Full-Stack",
  databases: "Databases",
  dataScience: "Data Science",
  devOps: "DevOps",
};

const categoryColors: Record<string, string> = {
  programmingLanguages: "from-blue-500 to-cyan-500",
  aiFrameworks: "from-violet-500 to-purple-500",
  fullStack: "from-orange-500 to-pink-500",
  databases: "from-emerald-500 to-teal-500",
  dataScience: "from-rose-500 to-orange-500",
  devOps: "from-slate-600 to-slate-800",
};

function SkillBadge({ 
  name, 
  level, 
  years,
  index
}: { 
  name: string; 
  level: SkillLevel; 
  years: string;
  index: number;
}) {
  const config = levelConfig[level];
  const Stars = config.icon;
  const starCount = level === "Advanced" ? 3 : level === "Intermediate" ? 2 : 1;
  
  return (
    <div 
      className={`
        group relative overflow-hidden
        flex items-center gap-3 
        px-4 py-3 rounded-2xl
        bg-white border ${config.border}
        hover:shadow-lg hover:scale-[1.02]
        transition-all duration-300 ease-out
        cursor-default
      `}
      style={{ animationDelay: `${index * 50}ms` }}
    >
      {/* Hover gradient effect */}
      <div className={`
        absolute inset-0 opacity-0 group-hover:opacity-100
        transition-opacity duration-300
        bg-gradient-to-r ${level === "Advanced" 
          ? "from-emerald-50 to-teal-50" 
          : level === "Intermediate" 
            ? "from-blue-50 to-indigo-50"
            : "from-amber-50 to-yellow-50"
        }
      `} />
      
      {/* Content */}
      <div className="relative flex items-center gap-3 w-full">
        {/* Stars */}
        <div className="flex gap-0.5">
          {Array.from({ length: 3 }).map((_, i) => (
            <Stars 
              key={i} 
              size={10}
              className={`
                transition-colors duration-300
                ${i < starCount 
                  ? level === "Advanced"
                    ? "text-emerald-400 fill-emerald-400"
                    : level === "Intermediate"
                      ? "text-blue-400 fill-blue-400"
                      : "text-amber-400 fill-amber-400"
                  : "text-gray-200"
                }
              `}
            />
          ))}
        </div>
        
        {/* Skill Name */}
        <span className="flex-1 text-sm font-medium text-gray-800">
          {name}
        </span>
        
        {/* Years badge */}
        <div className={`
          flex items-center gap-1 px-2 py-1 rounded-full
          text-xs font-medium
          ${config.bg} ${config.color}
        `}>
          <Clock size={10} />
          {years}
        </div>
      </div>
    </div>
  );
}

function CategoryCard({ 
  categoryKey,
  title,
  skills,
  isExpanded,
  onToggle
}: { 
  categoryKey: string;
  title: string;
  skills: Array<{ name: string; level: SkillLevel; years: string }>;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const Icon = categoryIcons[categoryKey] || Code2;
  const gradient = categoryColors[categoryKey] || "from-gray-500 to-gray-600";
  const label = categoryLabels[categoryKey] || title;
  
  // Sort skills: Advanced first
  const sortedSkills = [...skills].sort((a, b) => {
    const order = { Advanced: 3, Intermediate: 2, Beginner: 1 };
    return order[b.level] - order[a.level];
  });
  
  const advancedCount = skills.filter(s => s.level === "Advanced").length;
  const totalCount = skills.length;

  return (
    <div className={`
      rounded-3xl overflow-hidden
      bg-white border border-gray-100
      shadow-sm hover:shadow-xl
      transition-all duration-500 ease-out
      ${isExpanded ? "ring-2 ring-blue-100" : ""}
    `}>
      {/* Card Header */}
      <button
        onClick={onToggle}
        className="w-full p-5 text-left group"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Icon with gradient background */}
            <div className={`
              w-12 h-12 rounded-2xl flex items-center justify-center
              bg-gradient-to-br ${gradient}
              shadow-lg shadow-blue-500/20
              group-hover:scale-110 transition-transform duration-300
            `}>
              <Icon size={22} className="text-white" />
            </div>
            
            {/* Title & Count */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                {label}
              </h3>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-sm text-gray-500">
                  {totalCount} skills
                </span>
                {advancedCount > 0 && (
                  <>
                    <span className="text-gray-300">·</span>
                    <span className="flex items-center gap-1 text-xs font-medium text-emerald-600">
                      <Sparkles size={10} />
                      {advancedCount} expert
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>
          
          {/* Expand indicator */}
          <div className={`
            w-8 h-8 rounded-full flex items-center justify-center
            bg-gray-100 group-hover:bg-blue-50
            transition-all duration-300
            ${isExpanded ? "rotate-90 bg-blue-100" : ""}
          `}>
            <ChevronRight size={16} className={`
              transition-colors duration-300
              ${isExpanded ? "text-blue-600" : "text-gray-400 group-hover:text-blue-500"}
            `} />
          </div>
        </div>
        
        {/* Progress bar showing expertise distribution */}
        {!isExpanded && (
          <div className="mt-4 flex gap-1 h-1.5">
            {skills.filter(s => s.level === "Advanced").length > 0 && (
              <div 
                className="h-full rounded-full bg-emerald-400"
                style={{ width: `${(advancedCount / totalCount) * 100}%` }}
              />
            )}
            {skills.filter(s => s.level === "Intermediate").length > 0 && (
              <div 
                className="h-full rounded-full bg-blue-400"
                style={{ width: `${(skills.filter(s => s.level === "Intermediate").length / totalCount) * 100}%` }}
              />
            )}
            {skills.filter(s => s.level === "Beginner").length > 0 && (
              <div 
                className="h-full rounded-full bg-amber-400"
                style={{ width: `${(skills.filter(s => s.level === "Beginner").length / totalCount) * 100}%` }}
              />
            )}
          </div>
        )}
      </button>
      
      {/* Expanded Content */}
      {isExpanded && (
        <div className="px-5 pb-5 animate-in slide-in-from-top-2 duration-300">
          <div className="pt-2 border-t border-gray-100">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
              {sortedSkills.map((skill, idx) => (
                <SkillBadge
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  years={skill.years}
                  index={idx}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function SkillsSection() {
  const [expandedCategories, setExpandedCategories] = useState<string[]>([
    "programmingLanguages",
    "aiFrameworks"
  ]);

  const toggleCategory = (key: string) => {
    setExpandedCategories(prev => 
      prev.includes(key) 
        ? prev.filter(k => k !== key)
        : [...prev, key]
    );
  };

  const categories = [
    { key: "programmingLanguages", data: technicalSkills.programmingLanguages },
    { key: "aiFrameworks", data: technicalSkills.aiFrameworks },
    { key: "fullStack", data: technicalSkills.fullStack },
    { key: "databases", data: technicalSkills.databases },
    { key: "dataScience", data: technicalSkills.dataScience },
    { key: "devOps", data: technicalSkills.devOps },
  ];

  // Calculate stats
  const allSkills = categories.flatMap(c => c.data.skills);
  const advancedCount = allSkills.filter(s => s.level === "Advanced").length;
  const intermediateCount = allSkills.filter(s => s.level === "Intermediate").length;
  const beginnerCount = allSkills.filter(s => s.level === "Beginner").length;

  return (
    <div className="py-8">
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-2">
        <span className="text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
          02
        </span>
        <div className="flex-1 h-px bg-gradient-to-r from-blue-100 to-transparent" />
        <span className="text-xs text-gray-400 uppercase tracking-wider">Skills</span>
      </div>

      {/* Title with decorative element */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center shadow-lg shadow-blue-500/25">
            <Sparkles size={20} className="text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">Technical Proficiency</h2>
        </div>
        <p className="text-gray-500 max-w-lg">
          Skills acquired through academic study, professional work at CP ALL, and continuous self-learning
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-4 border border-emerald-100">
          <div className="flex items-center gap-2 mb-1">
            <Star size={14} className="text-emerald-500 fill-emerald-500" />
            <span className="text-xs font-medium text-emerald-600">Expert</span>
          </div>
          <p className="text-2xl font-bold text-emerald-700">{advancedCount}</p>
          <p className="text-xs text-emerald-500">3+ years exp</p>
        </div>
        
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-4 border border-blue-100">
          <div className="flex items-center gap-2 mb-1">
            <Star size={14} className="text-blue-500 fill-blue-500" />
            <span className="text-xs font-medium text-blue-600">Skilled</span>
          </div>
          <p className="text-2xl font-bold text-blue-700">{intermediateCount}</p>
          <p className="text-xs text-blue-500">1-2 years exp</p>
        </div>
        
        <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-4 border border-amber-100">
          <div className="flex items-center gap-2 mb-1">
            <Star size={14} className="text-amber-500 fill-amber-500" />
            <span className="text-xs font-medium text-amber-600">Learning</span>
          </div>
          <p className="text-2xl font-bold text-amber-700">{beginnerCount}</p>
          <p className="text-xs text-amber-500">&lt;1 year</p>
        </div>
        
        <div className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-2xl p-4 border border-gray-200">
          <div className="flex items-center gap-2 mb-1">
            <Code2 size={14} className="text-gray-500" />
            <span className="text-xs font-medium text-gray-600">Total</span>
          </div>
          <p className="text-2xl font-bold text-gray-700">{allSkills.length}</p>
          <p className="text-xs text-gray-500">technologies</p>
        </div>
      </div>

      {/* Skills Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {categories.map(({ key, data }) => (
          <CategoryCard
            key={key}
            categoryKey={key}
            title={data.category}
            skills={data.skills}
            isExpanded={expandedCategories.includes(key)}
            onToggle={() => toggleCategory(key)}
          />
        ))}
      </div>

      {/* Legend */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm">
        <div className="flex items-center gap-2">
          <div className="flex gap-0.5">
            <Star size={10} className="text-emerald-400 fill-emerald-400" />
            <Star size={10} className="text-emerald-400 fill-emerald-400" />
            <Star size={10} className="text-emerald-400 fill-emerald-400" />
          </div>
          <span className="text-gray-600">Expert (3+ years)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex gap-0.5">
            <Star size={10} className="text-blue-400 fill-blue-400" />
            <Star size={10} className="text-blue-400 fill-blue-400" />
            <Star size={10} className="text-gray-200" />
          </div>
          <span className="text-gray-600">Skilled (1-2 years)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex gap-0.5">
            <Star size={10} className="text-amber-400 fill-amber-400" />
            <Star size={10} className="text-gray-200" />
            <Star size={10} className="text-gray-200" />
          </div>
          <span className="text-gray-600">Learning (&lt;1 year)</span>
        </div>
      </div>
    </div>
  );
}

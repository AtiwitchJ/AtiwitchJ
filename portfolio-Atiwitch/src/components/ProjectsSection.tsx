"use client";

import { useState } from "react";
import Image from "next/image";
import { projects, filterCategories } from "@/data/portfolio-data";
import { 
  ArrowUpRight, 
  ExternalLink, 
  FolderGit2,
  Sparkles,
  Clock,
  Layers
} from "lucide-react";

const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  "Enterprise": { bg: "bg-blue-50", text: "text-blue-700", border: "border-blue-200" },
  "AI & RAG": { bg: "bg-violet-50", text: "text-violet-700", border: "border-violet-200" },
  "Data Science & ML": { bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-200" },
  "Web & Backend": { bg: "bg-orange-50", text: "text-orange-700", border: "border-orange-200" },
  "Statistics": { bg: "bg-rose-50", text: "text-rose-700", border: "border-rose-200" },
  "Research": { bg: "bg-cyan-50", text: "text-cyan-700", border: "border-cyan-200" },
  "Hackathon": { bg: "bg-amber-50", text: "text-amber-700", border: "border-amber-200" },
  "Automation": { bg: "bg-slate-50", text: "text-slate-700", border: "border-slate-200" },
  "Data Engineering": { bg: "bg-teal-50", text: "text-teal-700", border: "border-teal-200" },
  "Database": { bg: "bg-indigo-50", text: "text-indigo-700", border: "border-indigo-200" },
  "BI & Visualization": { bg: "bg-pink-50", text: "text-pink-700", border: "border-pink-200" },
};

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) =>
          project.categories.includes(activeCategory)
        );

  // Featured project (first enterprise project)
  const featuredProject = projects.find(p => 
    p.title === '"Latta" Enterprise AI Bot'
  );
  
  const otherProjects = filteredProjects.filter(p => 
    p.title !== '"Latta" Enterprise AI Bot'
  );

  return (
    <div className="py-8">
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-2">
        <span className="text-xs font-medium text-violet-600 bg-violet-50 px-3 py-1 rounded-full">
          05
        </span>
        <div className="flex-1 h-px bg-gradient-to-r from-violet-100 to-transparent" />
        <span className="text-xs text-gray-400 uppercase tracking-wider">Portfolio</span>
      </div>

      {/* Title */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center shadow-lg shadow-violet-500/25">
            <FolderGit2 size={20} className="text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">Selected Works</h2>
        </div>
        <p className="text-gray-500 max-w-lg">
          Featured projects from my work at CP ALL, freelance projects, and academic research
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap gap-2 mb-8">
        {filterCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`
              px-4 py-2 text-sm font-medium rounded-full transition-all duration-300
              ${activeCategory === cat
                ? "bg-gray-800 text-white shadow-lg shadow-gray-800/20 scale-105"
                : "bg-white text-gray-600 border border-gray-200 hover:border-gray-300 hover:bg-gray-50"
              }
            `}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Featured Project - Large Card */}
      {activeCategory === "All" && featuredProject && (
        <div 
          className="mb-6 group relative overflow-hidden rounded-3xl bg-white border border-gray-200 hover:border-violet-200 hover:shadow-2xl hover:shadow-violet-500/10 transition-all duration-500"
          onMouseEnter={() => setHoveredProject(-1)}
          onMouseLeave={() => setHoveredProject(null)}
        >
          <div className="grid md:grid-cols-2">
            {/* Image */}
            <div className="relative h-64 md:h-auto overflow-hidden">
              <Image
                src={featuredProject.image}
                alt={featuredProject.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent md:bg-gradient-to-r" />
              
              {/* Featured Badge */}
              <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-full text-xs font-medium text-violet-700">
                <Sparkles size={12} className="text-violet-500" />
                Featured Project
              </div>
            </div>
            
            {/* Content */}
            <div className="p-6 md:p-8 flex flex-col justify-between">
              <div>
                {/* Categories */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {featuredProject.categories.map((cat) => {
                    const colors = categoryColors[cat] || categoryColors["Enterprise"];
                    return (
                      <span 
                        key={cat}
                        className={`px-2.5 py-1 text-xs font-medium rounded-full ${colors.bg} ${colors.text} ${colors.border} border`}
                      >
                        {cat}
                      </span>
                    );
                  })}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-violet-600 transition-colors">
                  {featuredProject.title}
                </h3>
                <p className="text-sm text-violet-600 font-medium mb-3">
                  {featuredProject.role}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {featuredProject.desc}
                </p>
              </div>
              
              {/* Tech Stack */}
              <div>
                <p className="text-xs text-gray-400 mb-2 flex items-center gap-1">
                  <Layers size={10} />
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {featuredProject.stack.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {otherProjects.map((project, idx) => {
          const isHovered = hoveredProject === idx;
          
          return (
            <div
              key={idx}
              className={`
                group relative overflow-hidden rounded-2xl bg-white 
                border border-gray-200 hover:border-gray-300
                hover:shadow-xl hover:shadow-gray-500/10
                transition-all duration-500 ease-out
                ${isHovered ? "scale-[1.02]" : "scale-100"}
              `}
              onMouseEnter={() => setHoveredProject(idx)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                
                {/* View indicator on hover */}
                <div className={`
                  absolute inset-0 flex items-center justify-center
                  transition-all duration-300
                  ${isHovered ? "opacity-100" : "opacity-0"}
                `}>
                  <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                    <ArrowUpRight size={20} className="text-gray-800" />
                  </div>
                </div>
                
                {/* Category badges on image */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                  {project.categories.slice(0, 2).map((cat) => {
                    const colors = categoryColors[cat] || categoryColors["Enterprise"];
                    return (
                      <span 
                        key={cat}
                        className={`px-2 py-0.5 text-[10px] font-medium rounded-full backdrop-blur-md bg-white/90 ${colors.text}`}
                      >
                        {cat}
                      </span>
                    );
                  })}
                </div>
              </div>
              
              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-base font-bold text-gray-800 group-hover:text-violet-600 transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-xs text-violet-600 font-medium mb-2">
                  {project.role}
                </p>
                
                <p className="text-sm text-gray-500 line-clamp-2 mb-4">
                  {project.desc}
                </p>
                
                {/* Tech stack - compact */}
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.slice(0, 4).map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-0.5 bg-gray-100 text-gray-600 text-[10px] rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 4 && (
                    <span className="px-2 py-0.5 text-gray-400 text-[10px]">
                      +{project.stack.length - 4}
                    </span>
                  )}
                </div>
              </div>
              
              {/* Hover border effect */}
              <div className={`
                absolute inset-0 rounded-2xl border-2 pointer-events-none
                transition-opacity duration-300
                ${isHovered ? "border-violet-400 opacity-100" : "border-transparent opacity-0"}
              `} />
            </div>
          );
        })}
      </div>

      {/* View More CTA */}
      <div className="mt-10 text-center">
        <a 
          href="https://github.com/AtiwitchJ"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors group"
        >
          <span>View All Projects on GitHub</span>
          <ExternalLink size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>
    </div>
  );
}

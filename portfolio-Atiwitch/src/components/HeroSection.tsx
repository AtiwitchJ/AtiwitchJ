"use client";

import Image from "next/image";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/portfolio-data";

export default function HeroSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Main Card - Name & Role */}
      <div className="md:col-span-2 bg-white rounded-2xl p-8 border border-[#e5e5e5] hover:border-[#d0d0d0] transition-colors">
        <div className="flex items-center gap-2 mb-6">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-xs text-[#666] uppercase tracking-wider">Available for work</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-light text-[#1a1a1a] leading-tight mb-4">
          {profile.name.split(" ")[0]} <span className="font-medium">{profile.name.split(" ")[1]}</span>
        </h1>
        
        <p className="text-[#666] text-lg mb-8 max-w-md">
          {profile.tagline}
        </p>
        
        <div className="flex gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1a1a1a] text-white text-sm rounded-full hover:bg-[#333] transition-colors"
          >
            <Mail size={16} />
            Get in touch
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="p-2.5 border border-[#e5e5e5] rounded-full hover:border-[#1a1a1a] transition-colors"
          >
            <Github size={18} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-2.5 border border-[#e5e5e5] rounded-full hover:border-[#1a1a1a] transition-colors"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>

      {/* Profile Image Card */}
      <div className="bg-[#f5f5f5] rounded-2xl overflow-hidden relative aspect-square md:aspect-auto border border-[#e5e5e5]">
        <Image
          src={profile.imgSrc}
          alt={profile.name}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Stats Cards */}
      <div className="bg-white rounded-2xl p-6 border border-[#e5e5e5] text-center">
        <p className="text-3xl font-light text-[#1a1a1a] mb-1">16+</p>
        <p className="text-xs text-[#666] uppercase tracking-wider">Projects</p>
      </div>

      <div className="bg-white rounded-2xl p-6 border border-[#e5e5e5] text-center">
        <p className="text-3xl font-light text-[#1a1a1a] mb-1">4</p>
        <p className="text-xs text-[#666] uppercase tracking-wider">Years Exp</p>
      </div>

      <div className="bg-white rounded-2xl p-6 border border-[#e5e5e5] text-center">
        <p className="text-3xl font-light text-[#1a1a1a] mb-1">7+</p>
        <p className="text-xs text-[#666] uppercase tracking-wider">Awards</p>
      </div>

      {/* Role Card */}
      <div className="md:col-span-2 bg-[#1a1a1a] rounded-2xl p-6 text-white">
        <p className="text-xs text-[#999] uppercase tracking-wider mb-2">Current Role</p>
        <p className="text-lg font-medium">AI Engineer</p>
        <p className="text-sm text-[#999] mt-1">CP ALL Public Company Limited · Nov 2025 - Jun 2026</p>
      </div>

      {/* Location Card */}
      <div className="bg-white rounded-2xl p-6 border border-[#e5e5e5]">
        <p className="text-xs text-[#666] uppercase tracking-wider mb-1">Location</p>
        <p className="text-[#1a1a1a] font-medium">{profile.location}</p>
      </div>
    </div>
  );
}

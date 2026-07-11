"use client";

import { Mail, Phone, Github, Linkedin } from "lucide-react";
import { profile } from "@/data/portfolio-data";

export default function Footer() {
  return (
    <footer id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a] mt-16">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-8">
          <span className="text-xs text-[#666] uppercase tracking-wider">06</span>
          <div className="flex-1 h-px bg-[#333]" />
          <span className="text-xs text-[#666] uppercase tracking-wider">Contact</span>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Left - CTA */}
          <div>
            <h2 className="text-3xl md:text-4xl font-light text-white leading-tight mb-6">
              Let&apos;s work <span className="font-medium">together</span>
            </h2>
            <p className="text-[#999] max-w-md">
              Open for freelance projects, full-time opportunities, and collaborations in AI and Data Science.
            </p>
          </div>

          {/* Right - Contact Info */}
          <div className="space-y-4">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <Mail size={18} className="text-white" />
              </div>
              <div>
                <p className="text-xs text-[#666] uppercase tracking-wider mb-1">Email</p>
                <p className="text-white group-hover:text-[#ccc] transition-colors">{profile.email}</p>
              </div>
            </a>

            <a
              href={`tel:${profile.phone}`}
              className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <Phone size={18} className="text-white" />
              </div>
              <div>
                <p className="text-xs text-[#666] uppercase tracking-wider mb-1">Phone</p>
                <p className="text-white group-hover:text-[#ccc] transition-colors">{profile.phone}</p>
              </div>
            </a>

            <div className="flex gap-4 pt-4">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-2 p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors"
              >
                <Github size={18} className="text-white" />
                <span className="text-sm text-white">GitHub</span>
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-2 p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors"
              >
                <Linkedin size={18} className="text-white" />
                <span className="text-sm text-white">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-[#333] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#666]">
            &copy; 2026 {profile.name}. All rights reserved.
          </p>
          <p className="text-xs text-[#666]">
            Built with Next.js + Tailwind CSS + Three.js
          </p>
        </div>
      </div>
    </footer>
  );
}

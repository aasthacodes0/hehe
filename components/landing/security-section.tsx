"use client";

import { useEffect, useState, useRef } from "react";
import { Figma, Code2, Film, Brain } from "lucide-react";

const tools = [
  {
    icon: Figma,
    title: "Figma",
    description: "My go-to design tool for UI/UX. I've built full design systems, interactive prototypes, and pixel-perfect handoffs.",
  },
  {
    icon: Brain,
    title: "DSA & Problem Solving",
    description: "Strong algorithmic foundations in data structures and algorithms — from trees and graphs to dynamic programming.",
  },
  {
    icon: Code2,
    title: "Frontend Development",
    description: "React, TypeScript, Next.js — I write clean, accessible, performant code that brings designs to life.",
  },
  {
    icon: Film,
    title: "Video Editing",
    description: "Premiere Pro, color grading, motion graphics — turning raw footage into compelling stories.",
  },
];

const toolTags = ["Figma", "React", "TypeScript", "Next.js", "DSA", "Premiere Pro", "CSS", "Node.js", "Git", "Python"];

export function SecuritySection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="toolkit" ref={sectionRef} className="relative py-24 lg:py-32 bg-foreground/[0.02] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Content */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px bg-foreground/30" />
              Toolkit
            </span>
            <h2 className="text-4xl lg:text-6xl font-display tracking-tight mb-8">
              Tools I
              <br />
              live in.
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              From design tools to code editors, I&apos;ve curated a stack that lets me move fast without sacrificing quality.
            </p>

            {/* Tool tags */}
            <div className="flex flex-wrap gap-3">
              {toolTags.map((tag, index) => (
                <span
                  key={tag}
                  className={`px-4 py-2 border border-foreground/10 text-sm font-mono transition-all duration-500 hover:border-foreground/40 hover:bg-foreground/5 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${index * 50 + 200}ms` }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Tool cards */}
          <div className="grid gap-6">
            {tools.map((tool, index) => (
              <div
                key={tool.title}
                className={`p-6 border border-foreground/10 hover:border-foreground/20 transition-all duration-500 group ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 flex items-center justify-center border border-foreground/10 group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
                    <tool.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1 group-hover:translate-x-1 transition-transform duration-300">
                      {tool.title}
                    </h3>
                    <p className="text-muted-foreground">{tool.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

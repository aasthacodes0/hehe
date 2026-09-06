"use client";

import { useEffect, useRef, useState } from "react";

const skills = [
  {
    number: "01",
    title: "UI/UX Design",
    description: "Creating intuitive, beautiful interfaces in Figma. From wireframes and prototypes to polished design systems — I design experiences that feel effortless and look stunning.",
    visual: "figma",
  },
  {
    number: "02",
    title: "Development & DSA",
    description: "Writing clean, efficient code backed by strong algorithmic thinking. I love solving complex problems with elegant solutions — whether it's crafting a React component or cracking a data structures challenge.",
    visual: "code",
  },
  {
    number: "03",
    title: "Video Editing",
    description: "Transforming raw footage into compelling visual stories. From color grading to motion graphics, I bring narratives to life with cinematic precision and creative flair.",
    visual: "video",
  },
];

function FigmaVisual() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      {/* Figma-inspired logo shapes */}
      {/* Top-left rounded rect (red) */}
      <rect x="60" y="20" width="40" height="40" rx="20" fill="currentColor" opacity="0.8">
        <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" />
      </rect>
      {/* Top-right circle (purple) */}
      <circle cx="140" cy="40" r="20" fill="currentColor" opacity="0.5">
        <animate attributeName="opacity" values="0.5;0.9;0.5" dur="2s" begin="0.3s" repeatCount="indefinite" />
      </circle>
      {/* Middle-left square (orange) */}
      <rect x="60" y="60" width="40" height="40" rx="0" fill="currentColor" opacity="0.6">
        <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" begin="0.6s" repeatCount="indefinite" />
      </rect>
      {/* Center circle (blue) */}
      <circle cx="80" cy="120" r="20" fill="currentColor" opacity="0.4">
        <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2s" begin="0.9s" repeatCount="indefinite" />
      </circle>
      {/* Right middle round-rect (green) */}
      <rect x="100" y="60" width="40" height="40" rx="20" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.7">
        <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" begin="0.2s" repeatCount="indefinite" />
      </rect>
    </svg>
  );
}

function CodeVisual() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      <defs>
        <clipPath id="codeClip">
          <rect x="20" y="20" width="160" height="120" rx="4" />
        </clipPath>
      </defs>
      <rect x="20" y="20" width="160" height="120" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
      <g clipPath="url(#codeClip)">
        {/* Code lines */}
        {[
          { y: 40, w: 60, label: "function" },
          { y: 55, w: 100, label: "" },
          { y: 70, w: 80, label: "" },
          { y: 85, w: 120, label: "" },
          { y: 100, w: 50, label: "" },
          { y: 115, w: 90, label: "" },
        ].map((line, i) => (
          <rect
            key={i}
            x="35"
            y={line.y}
            width={line.w}
            height="8"
            rx="2"
            fill="currentColor"
            opacity="0.2"
          >
            <animate
              attributeName="opacity"
              values="0.2;0.7;0.2"
              dur="2.5s"
              begin={`${i * 0.2}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="width"
              values={`${line.w * 0.3};${line.w};${line.w * 0.3}`}
              dur="2.5s"
              begin={`${i * 0.2}s`}
              repeatCount="indefinite"
            />
          </rect>
        ))}
        {/* Cursor blink */}
        <rect x="36" y="128" width="8" height="10" rx="1" fill="currentColor">
          <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite" />
        </rect>
      </g>
    </svg>
  );
}

function VideoVisual() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      {/* Screen */}
      <rect x="20" y="25" width="130" height="85" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
      {/* Play button */}
      <path d="M 75 55 L 105 67.5 L 75 80 Z" fill="currentColor" opacity="0.8">
        <animate attributeName="opacity" values="0.8;1;0.8" dur="1.5s" repeatCount="indefinite" />
      </path>
      {/* Timeline bar */}
      <rect x="20" y="118" width="130" height="6" rx="3" fill="currentColor" opacity="0.1" />
      <rect x="20" y="118" width="70" height="6" rx="3" fill="currentColor" opacity="0.6">
        <animate attributeName="width" values="20;130;20" dur="4s" repeatCount="indefinite" />
      </rect>
      {/* Playhead */}
      <circle cx="90" cy="121" r="5" fill="currentColor">
        <animate attributeName="cx" values="25;145;25" dur="4s" repeatCount="indefinite" />
      </circle>
      {/* Camera icon */}
      <rect x="160" y="45" width="25" height="20" rx="3" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.6" />
      <path d="M 185 52 L 195 47 L 195 63 L 185 58 Z" fill="currentColor" opacity="0.6" />
      {/* Record pulse */}
      <circle cx="172" cy="55" r="4" fill="currentColor" opacity="0.8">
        <animate attributeName="r" values="4;6;4" dur="1s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.8;0.3;0.8" dur="1s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

function AnimatedVisual({ type }: { type: string }) {
  switch (type) {
    case "figma":
      return <FigmaVisual />;
    case "code":
      return <CodeVisual />;
    case "video":
      return <VideoVisual />;
    default:
      return <FigmaVisual />;
  }
}

function SkillCard({ skill, index }: { skill: typeof skills[0]; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`group relative transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 py-12 lg:py-20 border-b border-foreground/10">
        {/* Number */}
        <div className="shrink-0">
          <span className="font-mono text-sm text-muted-foreground">{skill.number}</span>
        </div>
        
        {/* Content */}
        <div className="flex-1 grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-3xl lg:text-4xl font-display mb-4 group-hover:translate-x-2 transition-transform duration-500">
              {skill.title}
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {skill.description}
            </p>
          </div>
          
          {/* Visual */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-48 h-40 text-foreground">
              <AnimatedVisual type={skill.visual} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FeaturesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-24 lg:py-32"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 lg:mb-24">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            What I do
          </span>
          <h2
            className={`text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Skills &amp; craft.
            <br />
            <span className="text-muted-foreground">Built from passion.</span>
          </h2>
        </div>

        {/* Skills List */}
        <div>
          {skills.map((skill, index) => (
            <SkillCard key={skill.number} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

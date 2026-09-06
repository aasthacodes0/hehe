"use client";

import { useState, useEffect, useRef } from "react";
import { Copy, Check, Mail, ExternalLink } from "lucide-react";

const contactInfo = [
  {
    label: "Email",
    code: `aastha@email.com`,
  },
  {
    label: "LinkedIn",
    code: `linkedin.com/in/aastha`,
  },
  {
    label: "GitHub",
    code: `github.com/aastha`,
  },
];

const highlights = [
  { 
    title: "Open to internships", 
    description: "Looking for design & dev roles."
  },
  { 
    title: "Freelance projects", 
    description: "Available for select collaborations."
  },
  { 
    title: "Quick responder", 
    description: "I reply within 24 hours."
  },
  { 
    title: "Based in India", 
    description: "Open to remote worldwide."
  },
];

const codeAnimationStyles = `
  .dev-code-line {
    opacity: 0;
    transform: translateX(-8px);
    animation: devLineReveal 0.4s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  }
  
  @keyframes devLineReveal {
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  .dev-code-char {
    opacity: 0;
    filter: blur(8px);
    animation: devCharReveal 0.3s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  }
  
  @keyframes devCharReveal {
    to {
      opacity: 1;
      filter: blur(0);
    }
  }
`;

export function DevelopersSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const handleCopy = () => {
    navigator.clipboard.writeText(contactInfo[activeTab].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
    <section id="contact" ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      <style dangerouslySetInnerHTML={{ __html: codeAnimationStyles }} />
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Content */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px bg-foreground/30" />
              Get in touch
            </span>
            <h2 className="text-4xl lg:text-6xl font-display tracking-tight mb-8">
              Let&apos;s work
              <br />
              <span className="text-muted-foreground">together.</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Whether you have a project in mind, a collab idea, or just want to say hi — my inbox is always open.
            </p>
            
            {/* Highlights */}
            <div className="grid grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className={`transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${index * 50 + 200}ms` }}
                >
                  <h3 className="font-medium mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right: Contact block */}
          <div
            className={`lg:sticky lg:top-32 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="border border-foreground/10">
              {/* Tabs */}
              <div className="flex items-center border-b border-foreground/10">
                {contactInfo.map((info, idx) => (
                  <button
                    key={info.label}
                    type="button"
                    onClick={() => setActiveTab(idx)}
                    className={`px-6 py-4 text-sm font-mono transition-colors relative ${
                      activeTab === idx
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {info.label}
                    {activeTab === idx && (
                      <span className="absolute bottom-0 left-0 right-0 h-px bg-foreground" />
                    )}
                  </button>
                ))}
                <div className="flex-1" />
                <button
                  type="button"
                  onClick={handleCopy}
                  className="px-4 py-4 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Copy contact info"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-green-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
              
              {/* Contact content */}
              <div className="p-8 font-mono text-sm bg-foreground/[0.01] min-h-[120px] flex items-center">
                <div className="text-foreground/80 text-lg">
                  {contactInfo[activeTab].code}
                </div>
              </div>
            </div>
            
            {/* Links */}
            <div className="mt-6 flex items-center gap-6 text-sm">
              <a href="mailto:aastha@email.com" className="text-foreground hover:underline underline-offset-4 flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Send email
              </a>
              <span className="text-foreground/20">|</span>
              <a href="https://linkedin.com/in/aastha" className="text-muted-foreground hover:text-foreground flex items-center gap-2">
                <ExternalLink className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

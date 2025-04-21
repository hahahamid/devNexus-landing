
import React, { useEffect, useRef } from "react";
import { ArrowRight, Code, Zap } from "lucide-react";

const HeroSection = () => {
  const codeBlockRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const interval = setInterval(() => {
      if (codeBlockRef.current) {
        const currentText = codeBlockRef.current.textContent || "";
        const cursorElement = codeBlockRef.current.querySelector(".cursor");
        
        if (cursorElement) {
          cursorElement.classList.toggle("opacity-0");
        }
      }
    }, 500);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-20 pb-20 overflow-hidden"
      style={{ 
        backgroundImage: "linear-gradient(to bottom, rgba(26, 31, 44, 0.97), rgba(26, 31, 44, 0.97)), url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2072&ixlib=rb-4.0.3')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Animated Gradient Orb */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-radial from-purple/30 to-transparent rounded-full filter blur-3xl opacity-20 animate-float"></div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="section-container z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">
              Building <span className="text-gradient">Exceptional</span> Digital Experiences
            </h1>
            <p className="text-lg text-white/80 max-w-lg">
              We craft powerful, scalable web solutions that drive business growth and elevate your online presence. From CRM systems to stunning websites, we've got you covered.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="btn-primary flex items-center gap-2 group">
                Get Started 
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-secondary">
                View Our Work
              </button>
            </div>
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center">
                <Zap size={18} className="text-purple mr-2" />
                <span className="text-white/70">Fast Delivery</span>
              </div>
              <div className="flex items-center">
                <Code size={18} className="text-purple mr-2" />
                <span className="text-white/70">Clean Code</span>
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-in-slow">
            <div className="bg-dark-card glass-card p-6 rounded-lg shadow-xl purple-glow-sm">
              <div className="flex items-center mb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="ml-4 text-white/40 text-sm">index.ts</div>
              </div>
              <div
                ref={codeBlockRef}
                className="font-code text-sm leading-relaxed text-white/80 overflow-hidden"
              >
                <div><span className="text-purple-light">import</span> <span className="text-highlight">&#123; createApp &#125;</span> <span className="text-purple-light">from</span> <span className="text-green-400">'@devnexus/core'</span>;</div>
                <div className="mt-2"><span className="text-purple-light">const</span> <span className="text-yellow-300">app</span> <span className="text-white">=</span> <span className="text-highlight">createApp</span><span className="text-white">(</span><span className="text-white">&#123;</span></div>
                <div className="ml-4"><span className="text-blue-300">name</span>: <span className="text-green-400">'Your Amazing Project'</span>,</div>
                <div className="ml-4"><span className="text-blue-300">type</span>: <span className="text-green-400">'enterprise'</span>,</div>
                <div className="ml-4"><span className="text-blue-300">features</span>: [<span className="text-green-400">'authentication'</span>, <span className="text-green-400">'database'</span>, <span className="text-green-400">'api'</span>],</div>
                <div className="ml-4"><span className="text-blue-300">deploy</span>: <span className="text-orange-400">true</span>,</div>
                <div className="text-white">&#125;<span className="text-white">)</span>;</div>
                <div className="mt-2"><span className="text-highlight">app</span>.<span className="text-yellow-300">launch</span><span className="text-white">()</span>;</div>
                <div className="mt-2 flex items-center">
                  <span className="text-green-400">// Let's build something amazing together</span>
                  <span className="cursor w-2 h-5 bg-white/70 ml-1 inline-block"></span>
                </div>
              </div>
            </div>
            
            {/* Floating elements around the code block */}
            <div className="absolute -top-5 -right-5 w-20 h-20 rounded-full bg-dark-card border border-purple/30 flex items-center justify-center animate-float">
              <Code size={24} className="text-purple-light" />
            </div>
            
            <div className="absolute -bottom-5 -left-5 w-16 h-16 rounded-full bg-dark-card border border-purple/30 flex items-center justify-center animate-float" style={{ animationDelay: "1s" }}>
              <Zap size={20} className="text-purple-light" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

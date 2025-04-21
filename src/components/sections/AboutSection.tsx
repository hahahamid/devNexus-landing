
import React, { useRef, useEffect } from "react";
import { 
  Check, 
  Code, 
  Users, 
  Zap
} from "lucide-react";

const AboutSection = () => {
  const countersRef = useRef<HTMLDivElement>(null);
  const counterRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const options = {
      threshold: 0.5,
    };

    const callback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const counters = counterRefs.current.filter(Boolean);
          
          counters.forEach((counter, index) => {
            if (!counter) return;
            
            const targetValue = parseInt(counter.dataset.target || "0", 10);
            const duration = 2000; // 2 seconds
            const stepTime = Math.abs(Math.floor(duration / targetValue));
            
            let currentValue = 0;
            const timer = setInterval(() => {
              currentValue += 1;
              counter.textContent = currentValue.toString();
              
              if (currentValue >= targetValue) {
                counter.textContent = targetValue.toString() + (counter.dataset.suffix || "");
                clearInterval(timer);
              }
            }, stepTime);
          });
          
          // Unobserve after animation is triggered
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    
    if (countersRef.current) {
      observer.observe(countersRef.current);
    }

    return () => {
      if (countersRef.current) {
        observer.unobserve(countersRef.current);
      }
    };
  }, []);

  const keyPoints = [
    "Modern, responsive designs that adapt to any device",
    "Clean, maintainable code following best practices",
    "Scalable solutions that grow with your business",
    "Performance-optimized applications for superior user experience",
    "Comprehensive testing to ensure reliability",
    "Ongoing support and maintenance plans"
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-purple/20 to-transparent rounded-full filter blur-3xl opacity-30"></div>
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Why Choose <span className="text-gradient">DevNexus</span>
            </h2>
            <p className="text-white/80 mb-8">
              With over a decade of experience delivering exceptional web solutions, we combine technical expertise with strategic insight to help your business thrive in the digital landscape.
            </p>
            
            <div className="space-y-4 mb-8">
              {keyPoints.map((point, index) => (
                <div key={index} className="flex items-start animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="shrink-0 mt-1">
                    <Check size={18} className="text-purple" />
                  </div>
                  <p className="ml-3 text-white/80">{point}</p>
                </div>
              ))}
            </div>
            
            <button className="btn-primary">Learn More About Us</button>
          </div>
          
          <div>
            <div className="relative">
              <div className="bg-dark-surface glass-card rounded-xl p-8 border border-dark-border">
                <h3 className="text-2xl font-heading font-semibold mb-8 text-gradient">
                  Our Achievements
                </h3>
                
                <div 
                  ref={countersRef}
                  className="grid grid-cols-2 gap-8"
                >
                  <CounterBox 
                    ref={(el) => (counterRefs.current[0] = el)}
                    icon={<Code size={28} className="text-purple" />}
                    label="Projects Completed"
                    value={150}
                    suffix="+"
                  />
                  
                  <CounterBox 
                    ref={(el) => (counterRefs.current[1] = el)}
                    icon={<Users size={28} className="text-purple" />}
                    label="Happy Clients"
                    value={98}
                    suffix="%"
                  />
                  
                  <CounterBox 
                    ref={(el) => (counterRefs.current[2] = el)}
                    icon={<Zap size={28} className="text-purple" />}
                    label="Websites Launched"
                    value={120}
                    suffix="+"
                  />
                  
                  <CounterBox 
                    ref={(el) => (counterRefs.current[3] = el)}
                    icon={<Code size={28} className="text-purple" />}
                    label="Apps Developed"
                    value={75}
                    suffix="+"
                  />
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-dark-bg border border-purple/40 rounded-lg rotate-12"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-dark-bg border border-purple/40 rounded-lg -rotate-6"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CounterBox = React.forwardRef<
  HTMLDivElement, 
  { icon: React.ReactNode; label: string; value: number; suffix?: string }
>(({ icon, label, value, suffix = "" }, ref) => (
  <div className="text-center">
    <div className="mb-3 inline-flex items-center justify-center w-14 h-14 rounded-full bg-dark-bg border border-dark-border">
      {icon}
    </div>
    <div 
      ref={ref}
      className="text-3xl font-bold mb-1" 
      data-target={value.toString()}
      data-suffix={suffix}
    >
      0
    </div>
    <p className="text-white/60 text-sm">{label}</p>
  </div>
));

export default AboutSection;

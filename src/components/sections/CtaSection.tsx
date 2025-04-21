import React from "react";
import { ArrowRight } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-dark/50 to-highlight/50 opacity-10"></div>
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-gradient-radial from-purple/30 to-transparent rounded-full filter blur-3xl opacity-30"></div>

      <div className="section-container relative z-10">
        <div className="bg-dark-surface glass-card rounded-2xl p-12 border border-purple/30 relative overflow-hidden purple-glow-sm">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-radial from-purple/10 to-transparent rounded-full filter blur-3xl opacity-30"></div>

          <div className="grid grid-cols-1 lg:grid-cols-5 items-center gap-10">
            <div className="lg:col-span-3 space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold leading-tight">
                Ready to Transform Your <br />
                <span className="text-gradient">Digital Presence?</span>
              </h2>
              <p className="text-white/80 text-lg">
                Partner with us to create exceptional web solutions that drive
                growth, enhance user experience, and elevate your brand.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="btn-primary flex items-center gap-2 group">
                  Get Started Today
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
                <a
                  href="https://calendly.com/hahahamid/30min?preview_source=et_card"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn-secondary">
                    Schedule a Consultation
                  </button>
                </a>
              </div>
            </div>

            <div className="lg:col-span-2 flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-56 h-56 rounded-full bg-gradient-to-r from-purple/20 to-highlight/20 flex items-center justify-center animate-pulse-glow">
                  <div className="w-48 h-48 rounded-full bg-dark-bg border border-purple/40 flex items-center justify-center">
                    <div className="text-center">
                      <div className="font-heading font-bold text-4xl mb-2 text-gradient">
                        Let's Talk
                      </div>
                      <p className="text-white/60 text-sm">
                        About Your Project
                      </p>
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-dark-bg border border-purple/40 flex items-center justify-center animate-float">
                  <div className="w-6 h-6 rounded-full bg-purple"></div>
                </div>
                <div
                  className="absolute -bottom-4 -left-4 w-10 h-10 rounded-full bg-dark-bg border border-purple/40 flex items-center justify-center animate-float"
                  style={{ animationDelay: "1s" }}
                >
                  <div className="w-5 h-5 rounded-full bg-highlight"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;

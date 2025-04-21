
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

const PortfolioSection = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [activeSlide, setActiveSlide] = useState(0);
  
  const portfolioItems = [
    {
      id: 1,
      title: "Enterprise CRM System",
      category: "crm",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3",
      description: "A comprehensive customer relationship management system for a global enterprise client.",
      technologies: ["React", "Node.js", "MongoDB", "GraphQL"]
    },
    {
      id: 2,
      title: "E-commerce Platform",
      category: "web",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426&ixlib=rb-4.0.3",
      description: "A fully-featured e-commerce solution with inventory management and payment processing.",
      technologies: ["Next.js", "Stripe", "PostgreSQL", "AWS"]
    },
    {
      id: 3,
      title: "Healthcare Management System",
      category: "ems",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3",
      description: "An enterprise management system for a leading healthcare provider.",
      technologies: ["Vue.js", "Laravel", "MySQL", "Docker"]
    },
    {
      id: 4,
      title: "Investment Portfolio Tracker",
      category: "web",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3",
      description: "A real-time investment tracking application with advanced analytics.",
      technologies: ["React", "Node.js", "D3.js", "Firebase"]
    },
    {
      id: 5,
      title: "Real Estate Management Portal",
      category: "ems",
      image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3",
      description: "A comprehensive solution for real estate agencies to manage properties and clients.",
      technologies: ["Angular", "Express", "MongoDB", "AWS"]
    },
    {
      id: 6,
      title: "Recruitment CRM",
      category: "crm",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3",
      description: "A specialized CRM for recruitment agencies to manage candidates and job placements.",
      technologies: ["React", "Django", "PostgreSQL", "Redis"]
    }
  ];
  
  const tabs = [
    { id: "all", label: "All Work" },
    { id: "web", label: "Websites" },
    { id: "crm", label: "CRM Solutions" },
    { id: "ems", label: "EMS" }
  ];
  
  const filteredItems = activeTab === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeTab);
  
  const nextSlide = () => {
    setActiveSlide((prev) => 
      prev === Math.ceil(filteredItems.length / 3) - 1 ? 0 : prev + 1
    );
  };
  
  const prevSlide = () => {
    setActiveSlide((prev) => 
      prev === 0 ? Math.ceil(filteredItems.length / 3) - 1 : prev - 1
    );
  };
  
  const visibleItems = filteredItems.slice(activeSlide * 3, activeSlide * 3 + 3);

  return (
    <section id="portfolio" className="section-padding bg-dark-surface">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Our <span className="text-gradient">Portfolio</span>
          </h2>
          <p className="text-white/70 max-w-xl mx-auto">
            Explore our successful projects and see how we've helped businesses achieve their digital goals.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center mb-8 space-x-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`px-5 py-2 rounded-full transition-all duration-300 mb-2 ${
                activeTab === tab.id
                  ? "bg-purple text-white"
                  : "bg-dark-bg text-white/70 hover:bg-dark-bg/80"
              }`}
              onClick={() => {
                setActiveTab(tab.id);
                setActiveSlide(0);
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
        
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 min-h-[500px]">
            {visibleItems.length > 0 ? (
              visibleItems.map((item, index) => (
                <PortfolioCard 
                  key={item.id}
                  item={item}
                  index={index}
                />
              ))
            ) : (
              <div className="col-span-3 flex justify-center items-center h-64">
                <p className="text-white/50">No projects in this category.</p>
              </div>
            )}
          </div>
          
          {filteredItems.length > 3 && (
            <div className="flex justify-center mt-10 space-x-4">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full bg-dark-bg border border-dark-border flex items-center justify-center text-white/70 hover:text-purple transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              <div className="flex space-x-2">
                {Array.from({ length: Math.ceil(filteredItems.length / 3) }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveSlide(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      activeSlide === idx
                        ? "bg-purple w-6"
                        : "bg-dark-border hover:bg-purple/50"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full bg-dark-bg border border-dark-border flex items-center justify-center text-white/70 hover:text-purple transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  technologies: string[];
}

const PortfolioCard = ({ 
  item, 
  index 
}: { 
  item: PortfolioItem; 
  index: number;
}) => {
  const animationDelay = `${index * 0.15}s`;
  
  return (
    <div 
      className="group relative overflow-hidden rounded-xl h-[350px] animate-fade-in-slow"
      style={{ animationDelay }}
    >
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url(${item.image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-dark-bg to-transparent opacity-90" />
      
      <div className="absolute inset-0 p-6 flex flex-col justify-end transform transition-transform duration-500">
        <h3 className="text-xl font-heading font-semibold mb-2 text-white">{item.title}</h3>
        <p className="text-white/70 mb-4 line-clamp-2">{item.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {item.technologies.map((tech, idx) => (
            <span key={idx} className="text-xs py-1 px-2 bg-dark-bg/50 rounded-full text-white/80">
              {tech}
            </span>
          ))}
        </div>
        
        <div className="transform transition-all duration-500 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
          <a
            href="#"
            className="inline-flex items-center text-purple hover:text-purple-light text-sm font-medium"
          >
            View Project <ExternalLink size={14} className="ml-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;


import React, { useState, useEffect } from "react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO, TechInnovate",
      company: "TechInnovate",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      stars: 5,
      text: "DevNexus completely transformed our digital presence. Their team delivered an exceptional enterprise management system that has streamlined our operations and significantly improved productivity. The attention to detail and technical expertise was impressive."
    },
    {
      id: 2,
      name: "David Chen",
      position: "Marketing Director",
      company: "GrowthWave",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      stars: 5,
      text: "Working with DevNexus on our e-commerce platform was a game-changer for our business. The custom solution they built has helped us scale our online sales by 200% in just six months. Their team's expertise and dedication to our project exceeded our expectations."
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Operations Manager",
      company: "HealthPlus",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      stars: 5,
      text: "We needed a sophisticated CRM system to manage our healthcare client relationships, and DevNexus delivered perfectly. The intuitive interface and powerful features have revolutionized how we interact with our patients. Their support team has been exceptional throughout the process."
    },
    {
      id: 4,
      name: "Michael Taylor",
      position: "Founder",
      company: "PropertyPro",
      avatar: "https://randomuser.me/api/portraits/men/75.jpg",
      stars: 5,
      text: "DevNexus built our real estate management platform from the ground up, and the results have been outstanding. The system is robust, user-friendly, and has all the features we need. Their team was responsive, professional, and truly understood our industry requirements."
    }
  ];

  useEffect(() => {
    let interval;
    
    if (autoplay) {
      interval = setInterval(() => {
        setActiveIndex(prev => (prev === testimonials.length - 1 ? 0 : prev + 1));
      }, 5000);
    }
    
    return () => clearInterval(interval);
  }, [autoplay, testimonials.length]);

  const handlePrev = () => {
    setAutoplay(false);
    setActiveIndex(prev => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setAutoplay(false);
    setActiveIndex(prev => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden bg-dark-bg">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-gradient-radial from-purple/20 to-transparent rounded-full filter blur-3xl opacity-30"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Client <span className="text-gradient">Testimonials</span>
          </h2>
          <p className="text-white/70 max-w-xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -top-8 left-10 text-purple opacity-20">
            <Quote size={120} />
          </div>
          
          <div className="relative z-10">
            <div className="min-h-[350px]">
              {testimonials.map((testimonial, idx) => (
                <div
                  key={testimonial.id}
                  className={`transition-all duration-500 absolute inset-0 ${
                    idx === activeIndex
                      ? "opacity-100 translate-x-0"
                      : idx < activeIndex
                      ? "opacity-0 -translate-x-full"
                      : "opacity-0 translate-x-full"
                  }`}
                >
                  <div className="bg-dark-surface rounded-xl p-8 md:p-10 glass-card border border-dark-border">
                    <div className="flex items-center mb-6">
                      <div className="w-14 h-14 rounded-full overflow-hidden mr-4">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-heading font-semibold">
                          {testimonial.name}
                        </h3>
                        <p className="text-white/60 text-sm">
                          {testimonial.position}, {testimonial.company}
                        </p>
                      </div>
                      <div className="ml-auto flex">
                        {[...Array(testimonial.stars)].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className="text-yellow-500 fill-yellow-500"
                          />
                        ))}
                      </div>
                    </div>
                    
                    <p className="text-white/80 italic text-lg leading-relaxed">
                      "{testimonial.text}"
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center mt-8 space-x-4">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full bg-dark-surface border border-dark-border flex items-center justify-center text-white/70 hover:text-purple transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              
              <div className="flex items-center space-x-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setAutoplay(false);
                      setActiveIndex(idx);
                    }}
                    className={`w-2 h-2 rounded-full transition-all ${
                      activeIndex === idx
                        ? "bg-purple w-6"
                        : "bg-dark-border hover:bg-purple/50"
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full bg-dark-surface border border-dark-border flex items-center justify-center text-white/70 hover:text-purple transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

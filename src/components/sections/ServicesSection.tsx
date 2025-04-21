
import React, { useState } from "react";
import { 
  Code, 
  LayoutGrid, 
  Database, 
  LineChart, 
  Users, 
  MessageSquare,
  ChevronRight,
} from "lucide-react";

const ServicesSection = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: 0,
      icon: <Database size={36} className="text-purple" />,
      title: "CRM Solutions",
      description: "Custom customer relationship management systems tailored to your business needs, improving client interactions and sales pipelines.",
      features: [
        "Client management dashboard",
        "Sales pipeline automation",
        "Communication tracking",
        "Task management",
        "Performance analytics"
      ]
    },
    {
      id: 1,
      icon: <LineChart size={36} className="text-purple" />,
      title: "Enterprise Management Systems",
      description: "Comprehensive EMS solutions that streamline operations, enhance productivity, and provide valuable insights for your business.",
      features: [
        "Resource planning",
        "Inventory management",
        "HR and employee portals",
        "Financial analytics",
        "Reporting dashboards"
      ]
    },
    {
      id: 2,
      icon: <LayoutGrid size={36} className="text-purple" />,
      title: "Custom Websites",
      description: "Stunning, responsive websites designed to showcase your brand, increase engagement, and drive conversions.",
      features: [
        "Responsive design",
        "SEO optimization",
        "Content management",
        "Analytics integration",
        "Performance optimization"
      ]
    },
    {
      id: 3,
      icon: <Code size={36} className="text-purple" />,
      title: "Web Applications",
      description: "Powerful web applications with intuitive interfaces and robust functionality to solve complex business challenges.",
      features: [
        "Custom functionality",
        "User authentication",
        "Third-party integrations",
        "Real-time features",
        "Scalable architecture"
      ]
    },
    {
      id: 4,
      icon: <Users size={36} className="text-purple" />,
      title: "E-commerce Solutions",
      description: "End-to-end e-commerce platforms that enhance user experience, increase conversions, and streamline inventory management.",
      features: [
        "Product catalogs",
        "Secure payments",
        "Inventory management",
        "Customer accounts",
        "Order processing"
      ]
    },
    {
      id: 5,
      icon: <MessageSquare size={36} className="text-purple" />,
      title: "Landing Pages",
      description: "High-converting landing pages designed to capture leads, promote products, and drive specific marketing campaigns.",
      features: [
        "A/B testing",
        "Lead capture forms",
        "Conversion optimization",
        "Mobile optimization",
        "Analytics tracking"
      ]
    }
  ];

  return (
    <section id="services" className="section-padding bg-dark-bg relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-white/70 max-w-xl mx-auto">
            We provide end-to-end web development solutions to help businesses thrive in the digital landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className={`glass-card rounded-xl p-6 md:p-8 transition-all duration-300 cursor-pointer group hover:bg-dark-surface ${
                activeService === service.id ? "border-purple purple-glow-sm" : "border-dark-border"
              }`}
              onClick={() => setActiveService(service.id)}
            >
              <div className="mb-4 transform transition-transform duration-300 group-hover:scale-110">
                {service.icon}
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-white/70 mb-4">
                {service.description}
              </p>
              
              {activeService === service.id && (
                <div className="mt-6 animate-fade-in">
                  <h4 className="text-sm font-medium text-purple-light mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <ChevronRight size={16} className="text-purple-light mt-1 mr-2 shrink-0" />
                        <span className="text-white/80 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              <div className="mt-4 flex justify-end">
                <button className="text-purple-light hover:text-purple text-sm font-medium flex items-center group/btn">
                  Learn more
                  <ChevronRight size={16} className="ml-1 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

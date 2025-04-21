
import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding bg-dark-surface relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-white/70 max-w-xl mx-auto">
            Ready to discuss your project? Contact us today and let's build something amazing together.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-dark-bg glass-card rounded-xl p-8 border border-dark-border animate-fade-in">
              <h3 className="text-xl font-heading font-semibold mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-purple/10 flex items-center justify-center mr-4">
                    <MapPin size={20} className="text-purple" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-1">Our Location</h4>
                    <p className="text-white/60">
                      123 Innovation Drive, Tech Hub, CA 91234
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-purple/10 flex items-center justify-center mr-4">
                    <Mail size={20} className="text-purple" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-1">Email Us</h4>
                    <p className="text-white/60">contact@devnexus.com</p>
                    <p className="text-white/60">support@devnexus.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-purple/10 flex items-center justify-center mr-4">
                    <Phone size={20} className="text-purple" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-1">Call Us</h4>
                    <p className="text-white/60">+1 (555) 123-4567</p>
                    <p className="text-white/60">+1 (555) 987-6543</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-medium text-white mb-4">Working Hours</h4>
                <p className="text-white/60 mb-1">
                  Monday - Friday: 9:00 AM - 6:00 PM
                </p>
                <p className="text-white/60">
                  Saturday - Sunday: Closed
                </p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <div className="bg-dark-bg glass-card rounded-xl p-8 border border-dark-border h-full animate-fade-in-slow">
              <h3 className="text-xl font-heading font-semibold mb-6">
                Send Us a Message
              </h3>
              
              {submitted ? (
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 text-center animate-fade-in">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check size={32} className="text-green-500" />
                  </div>
                  <h4 className="text-lg font-medium text-white mb-2">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-white/70">
                    Thank you for contacting us. We'll get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white/80 mb-2 text-sm" htmlFor="name">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-dark-surface border border-dark-border text-white focus:border-purple focus:outline-none focus:ring-1 focus:ring-purple/50 transition-colors"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-white/80 mb-2 text-sm" htmlFor="email">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-dark-surface border border-dark-border text-white focus:border-purple focus:outline-none focus:ring-1 focus:ring-purple/50 transition-colors"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white/80 mb-2 text-sm" htmlFor="phone">
                        Phone Number (Optional)
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-dark-surface border border-dark-border text-white focus:border-purple focus:outline-none focus:ring-1 focus:ring-purple/50 transition-colors"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-white/80 mb-2 text-sm" htmlFor="subject">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-dark-surface border border-dark-border text-white focus:border-purple focus:outline-none focus:ring-1 focus:ring-purple/50 transition-colors"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-white/80 mb-2 text-sm" htmlFor="message">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-dark-surface border border-dark-border text-white focus:border-purple focus:outline-none focus:ring-1 focus:ring-purple/50 transition-colors resize-none"
                      required
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`btn-primary w-full flex items-center justify-center gap-2 ${
                      isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <Spinner className="animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={18} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Spinner = ({ className = "" }: { className?: string }) => (
  <svg
    className={`w-5 h-5 text-white ${className}`}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    ></circle>
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    ></path>
  </svg>
);

const Check = ({ size, className }: { size: number; className: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

export default ContactSection;

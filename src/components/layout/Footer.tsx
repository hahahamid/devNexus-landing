import React from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Twitter,
  Linkedin,
  Facebook,
  Github,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-dark-surface border-t border-dark-border">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link
              to="/"
              className="text-2xl font-heading font-bold text-gradient inline-block"
            >
              DevNexus
            </Link>
            <p className="text-white/70 max-w-xs">
              Transforming ideas into powerful digital solutions for businesses
              of all sizes.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={<Twitter size={18} />} />
              <SocialIcon icon={<Linkedin size={18} />} />
              <SocialIcon icon={<Facebook size={18} />} />
              <SocialIcon icon={<Instagram size={18} />} />
              <SocialIcon icon={<Github size={18} />} />
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Services</h3>
            <ul className="space-y-2">
              <FooterLink href="#">CRM Solutions</FooterLink>
              <FooterLink href="#">Enterprise Management</FooterLink>
              <FooterLink href="#">Custom Websites</FooterLink>
              <FooterLink href="#">Landing Pages</FooterLink>
              <FooterLink href="#">Web Applications</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Company</h3>
            <ul className="space-y-2">
              <FooterLink href="#">About Us</FooterLink>
              <FooterLink href="#">Our Team</FooterLink>
              <FooterLink href="#">Careers</FooterLink>
              <FooterLink href="#">Blog</FooterLink>
              <FooterLink href="#">Privacy Policy</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="text-purple-light mt-1 mr-3" />
                <span className="text-white/70">
                  87, 1st Floor, Mahatma Gandhi Rd, Bengaluru, Karnataka 560001
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-purple-light mr-3" />
                <span className="text-white/70">+91-855-593-4256</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-purple-light mr-3" />
                <span className="text-white/70">contact@devnexus.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-dark-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} DevNexus. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <span className="text-white/50 text-sm hover:text-white/80 cursor-pointer">
              Terms of Service
            </span>
            <span className="text-white/50 text-sm hover:text-white/80 cursor-pointer">
              Privacy Policy
            </span>
            <span className="text-white/50 text-sm hover:text-white/80 cursor-pointer">
              Cookies
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon }: { icon: React.ReactNode }) => {
  return (
    <a
      href="#"
      className="w-8 h-8 rounded-full bg-dark-bg flex items-center justify-center text-white/60 hover:text-purple-light transition-colors hover:border-purple-light border border-dark-border"
    >
      {icon}
    </a>
  );
};

const FooterLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <li>
      <a
        href={href}
        className="text-white/70 hover:text-purple-light transition-colors"
      >
        {children}
      </a>
    </li>
  );
};

export default Footer;

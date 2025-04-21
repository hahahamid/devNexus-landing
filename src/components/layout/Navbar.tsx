
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-dark-bg/90 backdrop-blur-md shadow-md"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="section-container flex items-center justify-between">
        <Link
          to="/"
          className="text-2xl font-heading font-bold text-gradient"
        >
          DevNexus
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLinks />
          <button className="btn-primary animate-fade-in-fast">
            Get Started
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-dark-surface p-4 shadow-lg border-t border-dark-border animate-slide-in-top">
          <nav className="flex flex-col space-y-4">
            <NavLinks mobile setIsMenuOpen={setIsMenuOpen} />
            <button className="btn-primary w-full">Get Started</button>
          </nav>
        </div>
      )}
    </header>
  );
};

const NavLinks = ({ 
  mobile = false, 
  setIsMenuOpen = (_value: boolean) => {} 
}: { 
  mobile?: boolean; 
  setIsMenuOpen?: (value: boolean) => void;
}) => {
  const links = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const handleClick = () => {
    if (mobile) {
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className={`text-white/80 hover:text-white transition-colors ${
            mobile ? "block py-2" : ""
          }`}
          onClick={handleClick}
        >
          {link.name}
        </a>
      ))}
    </>
  );
};

export default Navbar;

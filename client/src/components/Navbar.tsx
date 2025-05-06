import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  scrolled: boolean;
}

const Navbar = ({ scrolled }: NavbarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#courses", label: "Courses" },
    { href: "#locations", label: "Locations" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-primary/95 backdrop-blur-sm shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex justify-between items-center">
          <a
            href="#hero"
            className="text-white font-montserrat font-bold text-xl md:text-2xl tracking-wider text-shadow"
          >
            KITE<span className="text-secondary">COACH</span>
          </a>

          <div className="hidden md:flex space-x-8 font-montserrat text-white text-shadow">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link hover:text-secondary transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden w-full bg-primary/95 backdrop-blur-sm ${
          mobileMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4 font-montserrat text-white">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link py-2 hover:text-secondary transition-all"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

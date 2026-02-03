import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/favicon.ico";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Gallery", path: "/gallery" },
  { name: "Designs", path: "/designs" },
  { name: "Courses", path: "/courses" },
  { name: "Contact", path: "/contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-cream/95 backdrop-blur-md shadow-card py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          
          <img
            src={logo}
            alt="Anu Aari Fashion Logo"
             className="w-10 h-10 rounded-full object-cover"
          />

          <div className="flex flex-col">
            <span
              className={`font-display text-xl font-semibold tracking-wide transition-colors ${
                isScrolled ? "text-maroon" : "text-cream"
              }`}
            >
              Anu Aari
            </span>
            <span
              className={`text-[10px] uppercase tracking-[0.2em] -mt-1 transition-colors ${
                isScrolled ? "text-gold-dark" : "text-gold-light"
              }`}
            >
              Fashion
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative font-medium text-sm uppercase tracking-wider transition-colors hover:text-gold group ${
                isScrolled ? "text-foreground" : "text-cream"
              } ${location.pathname === link.path ? "text-gold" : ""}`}
            >
              {link.name}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-gold transition-all duration-300 ${
                  location.pathname === link.path
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Link to="/register">
            <Button
              className={`font-medium uppercase tracking-wider text-xs px-6 py-5 transition-all duration-300 ${
                isScrolled
                  ? "bg-maroon text-cream hover:bg-maroon-dark"
                  : "bg-gold text-maroon-dark hover:bg-gold-light"
              }`}
            >
              Join Course
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`lg:hidden p-2 transition-colors ${
            isScrolled ? "text-maroon" : "text-cream"
          }`}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[72px] bg-cream/98 backdrop-blur-lg shadow-elegant transition-all duration-500 overflow-hidden ${
          isMobileMenuOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-medium text-lg py-2 border-b border-border transition-colors hover:text-gold ${
                location.pathname === link.path
                  ? "text-gold"
                  : "text-foreground"
              }`}
            >
              {link.name}
            </Link>
          ))}

          <Link to="/register" className="mt-4">
            <Button className="w-full bg-maroon text-cream hover:bg-maroon-dark uppercase tracking-wider py-6">
              Join Course
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

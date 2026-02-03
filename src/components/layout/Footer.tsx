import { Link } from "react-router-dom";
import { Instagram, Phone, Mail, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-maroon-dark text-cream">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center border border-gold/30">
                <span className="text-gold font-display text-2xl font-bold">A</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-2xl font-semibold text-cream">
                  Anu Aari
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-gold">
                  Fashion
                </span>
              </div>
            </div>
            <p className="text-cream/70 text-sm md:text-lg leading-relaxed font-elegant">
              Where Tradition Meets Elegance. Handcrafted Aari embroidery for the modern woman.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/anu_aari_fashion"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-gold hover:text-maroon-dark transition-all duration-300"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://wa.me/916385490317"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-gold hover:text-maroon-dark transition-all duration-300"
              >
                <Phone size={18} />
              </a>
              <a
                href="mailto:aariworkanu@gmail.com"
                className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-gold hover:text-maroon-dark transition-all duration-300"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg text-gold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Gallery", path: "/gallery" },
                { name: "Designs", path: "/designs" },
                { name: "Courses", path: "/courses" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-cream/70 hover:text-gold transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg text-gold mb-6">Our Services</h4>
            <ul className="space-y-3 text-cream/70 text-sm">
              <li>Bridal Aari Work</li>
              <li>Custom Blouse Designs</li>
              <li>Online Aari Courses</li>
              <li>Design Consultation</li>
              <li>Bulk Orders</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg text-gold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-cream/70 text-sm">
                <MapPin size={18} className="text-gold mt-0.5 flex-shrink-0" />
                <span>Cuddalore, Tamil Nadu, India</span>
              </li>
              <li className="flex items-center gap-3 text-cream/70 text-sm">
                <Phone size={18} className="text-gold flex-shrink-0" />
                <span>+91 6385490317</span>
              </li>
              <li className="flex items-center gap-3 text-cream/70 text-sm">
                <Mail size={18} className="text-gold flex-shrink-0" />
                <span>aariworkanu@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-cream/10">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-cream/50 text-sm">
            © {new Date().getFullYear()} Anu Aari Fashion. All rights reserved.
          </p>
          <p className="text-cream/50 text-sm font-elegant italic">
            "Stitching Stories in Thread"
          </p>
        </div>
      </div>
    </footer>
  );
};

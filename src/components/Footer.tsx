import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gradient-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">C</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">Chetana STEM Labs</h3>
                <p className="text-sm text-muted-foreground">Making learning practical</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Teaching Math and Physics through Robotics to school students (Grades 3-10), 
              aligned with NEP 2020 guidelines.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              {[
                { name: "Programs", href: "/programs" },
                { name: "Curriculum", href: "/curriculum" },
                { name: "About Us", href: "/about" },
                { name: "Contact", href: "/contact" },
              ].map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Programs */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide">Programs</h4>
            <div className="flex flex-col space-y-2">
              {[
                "School Integration",
                "After-school Labs", 
                "ATL Setup & Support",
                "Teacher Training",
                "STEM Camps"
              ].map((program) => (
                <span key={program} className="text-sm text-muted-foreground">
                  {program}
                </span>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary" />
                <div className="text-sm">
                  <div className="text-foreground">09705269485</div>
                  <div className="text-muted-foreground">8074695485</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-sm text-foreground">chetanastemlabs@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm text-foreground">Hyderabad, Telangana</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Chetana STEM Labs. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Founded by S. Prathyusha • Empowering Future Innovators
          </p>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="lg"
          className="rounded-full w-14 h-14 bg-success hover:bg-success/90 shadow-large"
          asChild
        >
          <a
            href="https://wa.me/919705269485"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle className="h-6 w-6" />
          </a>
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, MessageCircle, Heart, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gradient-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center animate-pulse">
                <span className="text-primary-foreground font-bold text-lg">C</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">Chetana STEM Labs</h3>
                <p className="text-sm text-muted-foreground">Math & Physics by Robotics</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Transforming STEM education through hands-on robotics learning for grades 3-10. 
              Making abstract concepts tangible and engaging.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              {[
                { name: "Home", href: "/" },
                { name: "Programs", href: "/programs" },
                { name: "Curriculum", href: "/curriculum" },
                { name: "About Us", href: "/about" },
                { name: "Contact", href: "/contact" }
              ].map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block"
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
                "After-School Labs", 
                "ATL Setup & Support",
                "Teacher Training",
                "STEM Camps"
              ].map((program) => (
                <span key={program} className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
                  {program}
                </span>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="h-4 w-4 text-primary mt-0.5 animate-pulse" />
                <div className="text-sm">
                  <div className="text-foreground hover:text-primary transition-colors duration-300">09705269485</div>
                  <div className="text-muted-foreground hover:text-foreground transition-colors duration-300">8074695485</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-4 w-4 text-primary mt-0.5 animate-pulse" />
                <span className="text-sm text-foreground hover:text-primary transition-colors duration-300">chetanastemlabs@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-primary mt-0.5 animate-pulse" />
                <span className="text-sm text-foreground">Hyderabad, Telangana</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>© 2024 Chetana STEM Labs. All rights reserved.</span>
            </div>
            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-destructive animate-pulse" />
              <span>for STEM Education</span>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="lg"
          className="rounded-full w-14 h-14 bg-success hover:bg-success/90 shadow-glow hover:scale-110 transition-all duration-300 animate-bounce-gentle"
          asChild
        >
          <a
            href="https://wa.me/919705269485?text=Hi%20Chetana%20STEM%20Labs,%20I'm%20interested%20in%20your%20robotics%20programs"
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
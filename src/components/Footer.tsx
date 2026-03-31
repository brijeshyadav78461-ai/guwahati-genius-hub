import { Link } from "react-router-dom";
import { Phone, MapPin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-foreground text-background">
    <div className="container py-12">
      <div className="grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="mb-4 text-xl font-heading">AICI Coaching Center</h3>
          <p className="text-sm text-background/70">
            Empowering students to achieve academic excellence through quality
            education and personalized mentoring since 2015.
          </p>
        </div>
        <div>
          <h4 className="mb-4 font-heading text-lg">Quick Links</h4>
          <div className="flex flex-col gap-2 text-sm text-background/70">
            <Link to="/" className="hover:text-background transition-colors">
              Home
            </Link>
            <Link
              to="/about"
              className="hover:text-background transition-colors"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="hover:text-background transition-colors"
            >
              Contact
            </Link>
            <Link
              to="/login"
              className="hover:text-background transition-colors"
            >
              Student Login
            </Link>
          </div>
        </div>
        <div>
          <h4 className="mb-4 font-heading text-lg">Contact Info</h4>
          <div className="flex flex-col gap-3 text-sm text-background/70">
            <a
              href="tel:8471894433"
              className="flex items-center gap-2 hover:text-background transition-colors"
            >
              <Phone className="h-4 w-4" /> 8471894433
            </a>
            <a
              href="tel:7099483837"
              className="flex items-center gap-2 hover:text-background transition-colors"
            >
              <Phone className="h-4 w-4" /> 7099483837
            </a>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 shrink-0" /> Mirza Chowk & VIP Airport,
              Guwahati
            </div>
            <a
              href="mailto:info@aicicoaching.in"
              className="flex items-center gap-2 hover:text-background transition-colors"
            >
              <Mail className="h-4 w-4" />{" "}
              info@academiaindiacarrierinstitute.com
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-background/20 pt-6 text-center text-xs text-background/50">
        © {new Date().getFullYear()} AICI Coaching Center, Guwahati. All rights
        reserved.
      </div>
    </div>
  </footer>
);

export default Footer;

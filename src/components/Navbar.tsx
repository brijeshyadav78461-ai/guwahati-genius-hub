import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Courses", to: "/#courses" },
  { label: "Results", to: "/#results" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = (to: string) => {
    setOpen(false);
    if (to.startsWith("/#")) {
      const id = to.replace("/#", "");
      if (location.pathname === "/") {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container flex h-16 items-center justify-between md:h-20">
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="AICI Coaching Center"
            className="h-10 w-10 md:h-12 md:w-12"
          />
          <div>
            <span className="text-lg font-heading font-bold text-primary md:text-xl">
              AICI
            </span>
            <span className="ml-1 hidden text-sm text-muted-foreground sm:inline">
              Academia India Carrier Institute
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              onClick={() => handleNavClick(link.to)}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
          <a href="tel:8471894433">
            <Button
              size="sm"
              className="ml-3 gap-2 bg-primary text-primary-foreground hover:bg-primary/90 animate-pulse-glow"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </Button>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-md p-2 text-foreground md:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-border bg-card p-4 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              onClick={() => handleNavClick(link.to)}
              className="block rounded-md px-4 py-3 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
          <a href="tel:8471894433" className="mt-2 block">
            <Button className="w-full gap-2 bg-primary text-primary-foreground">
              <Phone className="h-4 w-4" />
              Call Now
            </Button>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

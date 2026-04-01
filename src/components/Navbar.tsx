import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.svg";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Courses", to: "/#courses" },
  { label: "Results", to: "/#results" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between md:h-20">
        {/* 🔷 Logo + Brand */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="logo" className="h-10 w-auto" />
          <span className="text-xl md:text-2xl font-bold text-primary tracking-wide">
            AICI
          </span>
        </Link>

        {/* 🖥 Desktop Menu */}
        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => {
            const isActive =
              location.pathname === link.to ||
              location.hash === link.to.replace("/", "");

            return (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => handleNavClick(link.to)}
                className="relative text-sm font-medium text-gray-700 hover:text-primary transition-colors"
              >
                {link.label}

                {/* 🔥 Animated underline */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] w-full bg-primary transform transition-transform duration-300 ${
                    isActive ? "scale-x-100" : "scale-x-0"
                  } origin-left`}
                />
              </Link>
            );
          })}

          {/* 📞 CTA Button */}
          <a href="tel:8471894433">
            <Button className="ml-2 gap-2 bg-primary text-white hover:bg-primary/90 shadow-md">
              <Phone className="h-4 w-4" />
              Call Now
            </Button>
          </a>
        </div>

        {/* 📱 Mobile Toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden p-2">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* 📱 Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t shadow-sm">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              onClick={() => handleNavClick(link.to)}
              className="block px-4 py-3 text-sm hover:bg-gray-100"
            >
              {link.label}
            </Link>
          ))}

          <a href="tel:8471894433" className="block p-4">
            <Button className="w-full bg-primary text-white">Call Now</Button>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

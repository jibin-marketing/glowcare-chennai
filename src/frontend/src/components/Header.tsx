import { Button } from "@/components/ui/button";
import { useLocation, useNavigate } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home", section: "#home", route: "/" },
  { label: "Services", href: "/services", section: null, route: "/services" },
  { label: "Gallery", href: "/gallery", section: null, route: "/gallery" },
  { label: "About", href: "/about", section: null, route: "/about" },
  { label: "Contact", href: "/contact", section: null, route: "/contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (link: (typeof navLinks)[0]) => {
    setMobileOpen(false);
    if (link.section && location.pathname === "/") {
      const el = document.querySelector(link.section);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else if (link.section && location.pathname !== "/") {
      navigate({ to: "/" }).then(() => {
        setTimeout(() => {
          const el = document.querySelector(link.section!);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      });
    } else {
      navigate({ to: link.route });
    }
  };

  const handleLogoClick = () => {
    setMobileOpen(false);
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate({ to: "/" });
    }
  };

  const handleBooking = () => {
    setMobileOpen(false);
    navigate({ to: "/contact" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/95 backdrop-blur-md shadow-subtle border-b border-border"
          : "bg-card/80 backdrop-blur-sm"
      }`}
      data-ocid="header"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            type="button"
            onClick={handleLogoClick}
            className="flex items-center gap-2.5 group bg-transparent border-0 p-0 cursor-pointer"
            data-ocid="header.logo_link"
            aria-label="Aura Derma Home"
          >
            <img
              src="/assets/generated/clinic-logo-mark-transparent.dim_120x120.png"
              alt="Aura Derma logo"
              className="w-9 h-9 object-contain"
            />
            <div className="min-w-0">
              <p className="font-display text-lg font-semibold leading-tight text-foreground group-hover:text-primary transition-colors">
                Aura Derma
              </p>
              <p className="text-xs text-muted-foreground leading-none tracking-widest uppercase">
                Clinic, Chennai
              </p>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav
            className="hidden md:flex items-center gap-1"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => {
              const isActive = location.pathname === link.route;
              return (
                <button
                  type="button"
                  key={link.label}
                  onClick={() => handleNav(link)}
                  className={`px-3 py-2 text-sm font-medium transition-colors rounded-md hover:bg-muted/60 bg-transparent border-0 cursor-pointer ${
                    isActive
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  data-ocid={`header.nav_${link.label.toLowerCase()}`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+914412345678"
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
              data-ocid="header.phone_link"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>044 1234 5678</span>
            </a>
            <Button
              onClick={handleBooking}
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium shadow-subtle text-sm px-5"
              data-ocid="header.book_button"
            >
              Book Consultation
            </Button>
          </div>

          {/* Mobile Hamburger */}
          <button
            type="button"
            className="md:hidden p-2 rounded-md text-foreground hover:bg-muted/60 transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle mobile menu"
            data-ocid="header.mobile_menu_toggle"
          >
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="md:hidden bg-card border-t border-border shadow-elevated"
          data-ocid="header.mobile_menu"
        >
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                type="button"
                key={link.label}
                onClick={() => handleNav(link)}
                className="px-3 py-3 text-sm font-medium text-foreground hover:text-primary hover:bg-muted/60 rounded-md transition-colors text-left bg-transparent border-0 cursor-pointer w-full"
                data-ocid={`header.mobile_nav_${link.label.toLowerCase()}`}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-3 border-t border-border mt-2 flex flex-col gap-2">
              <a
                href="tel:+914412345678"
                className="flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground hover:text-primary"
                data-ocid="header.mobile_phone_link"
              >
                <Phone className="w-4 h-4" />
                044 1234 5678
              </a>
              <Button
                onClick={handleBooking}
                className="bg-primary text-primary-foreground w-full"
                data-ocid="header.mobile_book_button"
              >
                Book Consultation
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

import { useNavigate } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Linkedin } from "lucide-react";
import { SiFacebook, SiInstagram, SiYoutube } from "react-icons/si";

const footerServices = [
  { label: "Skin Rejuvenation", to: "/services" },
  { label: "Hair Restoration", to: "/services" },
  { label: "Laser Treatments", to: "/services" },
  { label: "Anti-Aging", to: "/services" },
  { label: "Hair Transplant", to: "/services" },
  { label: "Acne Solutions", to: "/services" },
];

const footerLinks = [
  { label: "About Us", to: "/about" },
  { label: "Our Treatments", to: "/services" },
  { label: "Patient Gallery", to: "/gallery" },
  { label: "Testimonials", to: "/" },
  { label: "Book Appointment", to: "/contact" },
  { label: "Privacy Policy", to: null },
];

const socialLinks = [
  { icon: SiInstagram, label: "Instagram", href: "https://instagram.com" },
  { icon: SiFacebook, label: "Facebook", href: "https://facebook.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: SiYoutube, label: "YouTube", href: "https://youtube.com" },
];

export function Footer() {
  const year = new Date().getFullYear();
  const navigate = useNavigate();

  return (
    <footer className="bg-foreground text-card-foreground" data-ocid="footer">
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <img
                src="/assets/generated/clinic-logo-mark-transparent.dim_120x120.png"
                alt="Aura Derma"
                className="w-9 h-9 object-contain brightness-200"
              />
              <div>
                <p className="font-display text-xl font-semibold text-card">
                  Aura Derma
                </p>
                <p className="text-xs text-muted-foreground tracking-widest uppercase">
                  Clinic, Chennai
                </p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-xs">
              Chennai's premier aesthetic clinic specializing in advanced hair
              and skin treatments. Where medical expertise meets artistry.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-card/10 hover:bg-accent/80 flex items-center justify-center transition-colors"
                  data-ocid={`footer.social_${label.toLowerCase()}`}
                >
                  <Icon className="w-4 h-4 text-card" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-semibold text-card/60 tracking-widest uppercase mb-4">
              Services
            </h3>
            <ul className="space-y-2.5">
              {footerServices.map((item) => (
                <li key={item.label}>
                  <button
                    type="button"
                    onClick={() => navigate({ to: item.to })}
                    className="text-sm text-muted-foreground hover:text-card transition-colors text-left"
                    data-ocid={`footer.service_${item.label.toLowerCase().replace(/\s+/g, "_")}`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Clinic */}
          <div>
            <h3 className="text-xs font-semibold text-card/60 tracking-widest uppercase mb-4">
              Clinic
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.map((item) => (
                <li key={item.label}>
                  {item.to ? (
                    <button
                      type="button"
                      onClick={() => navigate({ to: item.to! })}
                      className="text-sm text-muted-foreground hover:text-card transition-colors text-left"
                      data-ocid={`footer.link_${item.label.toLowerCase().replace(/\s+/g, "_")}`}
                    >
                      {item.label}
                    </button>
                  ) : (
                    <span
                      className="text-sm text-muted-foreground cursor-default"
                      data-ocid={`footer.link_${item.label.toLowerCase().replace(/\s+/g, "_")}`}
                    >
                      {item.label}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold text-card/60 tracking-widest uppercase mb-4">
              Connect
            </h3>
            <ul className="space-y-3">
              <li className="flex gap-2.5 items-start">
                <Mail className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" />
                <a
                  href="mailto:hello@auraderma.in"
                  className="text-sm text-muted-foreground hover:text-card transition-colors break-all"
                  data-ocid="footer.email_link"
                >
                  hello@auraderma.in
                </a>
              </li>
              <li className="flex gap-2.5 items-start">
                <Phone className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" />
                <a
                  href="tel:+914412345678"
                  className="text-sm text-muted-foreground hover:text-card transition-colors"
                  data-ocid="footer.phone_link"
                >
                  044 1234 5678
                </a>
              </li>
              <li className="flex gap-2.5 items-start">
                <MapPin className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" />
                <address className="text-sm text-muted-foreground not-italic leading-snug">
                  14, Nungambakkam High Rd
                  <br />
                  Nungambakkam, Chennai – 600 034
                </address>
              </li>
              <li className="flex gap-2.5 items-start">
                <Clock className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" />
                <div className="text-sm text-muted-foreground leading-snug">
                  <p>Mon – Sat: 9 AM – 7 PM</p>
                  <p>Sunday: 10 AM – 4 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-card/10">
        <div className="container mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-muted-foreground text-center">
            © {year} Aura Derma Clinic, Chennai. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground text-center">
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
                typeof window !== "undefined" ? window.location.hostname : "",
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-card transition-colors underline underline-offset-2"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

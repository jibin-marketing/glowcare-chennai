import { AppointmentForm } from "@/components/AppointmentForm";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Clock, Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";

const contactCards = [
  {
    icon: Phone,
    label: "Call Us",
    lines: ["+91 44 1234 5678", "+91 98765 43210"],
    href: "tel:+914412345678",
    ocid: "contact.phone_card",
  },
  {
    icon: Mail,
    label: "Email Us",
    lines: ["hello@auraderma.in", "appointments@auraderma.in"],
    href: "mailto:hello@auraderma.in",
    ocid: "contact.email_card",
  },
  {
    icon: MapPin,
    label: "Visit Us",
    lines: ["42, Nungambakkam High Road", "Chennai, Tamil Nadu 600034"],
    href: "https://maps.google.com/?q=Nungambakkam+High+Road+Chennai",
    ocid: "contact.location_card",
  },
];

const hours = [
  { day: "Monday – Friday", time: "9:00 AM – 7:00 PM" },
  { day: "Saturday", time: "9:00 AM – 5:00 PM" },
  { day: "Sunday", time: "10:00 AM – 2:00 PM (by appointment)" },
];

const socials = [
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://instagram.com/auraderma",
    ocid: "contact.instagram_link",
  },
  {
    icon: Facebook,
    label: "Facebook",
    href: "https://facebook.com/auraderma",
    ocid: "contact.facebook_link",
  },
];

export function ContactPage() {
  return (
    <div data-ocid="contact.page">
      {/* ── Hero Band ── */}
      <section className="bg-card border-b border-border py-14 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <Badge
            variant="secondary"
            className="mb-4 text-xs tracking-widest uppercase font-semibold bg-accent-subtle text-accent-foreground border-none"
          >
            Get in Touch
          </Badge>
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-4 leading-tight">
            Book Your Consultation
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto text-base leading-relaxed">
            Ready to start your transformation? Reach out to us — our team is
            here to guide you towards healthy, radiant hair and skin.
          </p>
        </motion.div>
      </section>

      {/* ── Quick Contact Cards ── */}
      <section
        className="bg-muted/30 border-b border-border py-10 px-6"
        data-ocid="contact.info_section"
      >
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-5">
          {contactCards.map((card, i) => (
            <motion.a
              key={card.label}
              href={card.href}
              target={card.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.45 }}
              className="group"
              data-ocid={card.ocid}
            >
              <Card className="p-6 flex flex-col items-center text-center gap-3 border-border bg-card hover:shadow-elevated transition-smooth hover:-translate-y-1 cursor-pointer h-full">
                <div className="w-12 h-12 rounded-full bg-teal-subtle flex items-center justify-center group-hover:bg-primary/10 transition-smooth">
                  <card.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="font-display font-semibold text-foreground text-base">
                  {card.label}
                </p>
                {card.lines.map((line) => (
                  <p
                    key={line}
                    className="text-sm text-muted-foreground leading-relaxed"
                  >
                    {line}
                  </p>
                ))}
              </Card>
            </motion.a>
          ))}
        </div>
      </section>

      {/* ── Form + Hours/Map ── */}
      <section
        className="bg-background py-16 px-6"
        data-ocid="contact.main_section"
      >
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Form — wider column */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <AppointmentForm />
          </motion.div>

          {/* Sidebar — hours + map + social */}
          <motion.aside
            className="lg:col-span-2 flex flex-col gap-6"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {/* Business Hours */}
            <Card
              className="p-6 border-border bg-card shadow-subtle"
              data-ocid="contact.hours_card"
            >
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-4 h-4 text-primary" />
                <h3 className="font-display font-semibold text-foreground text-base">
                  Clinic Hours
                </h3>
              </div>
              <ul className="space-y-3">
                {hours.map(({ day, time }) => (
                  <li
                    key={day}
                    className="flex justify-between items-start gap-2 text-sm"
                  >
                    <span className="text-muted-foreground font-medium">
                      {day}
                    </span>
                    <span className="text-foreground text-right">{time}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground">
                  Walk-ins welcome during clinic hours. Appointments recommended
                  for treatments.
                </p>
              </div>
            </Card>

            {/* Map Embed Placeholder */}
            <Card
              className="overflow-hidden border-border bg-card shadow-subtle"
              data-ocid="contact.map_card"
            >
              <div className="relative w-full h-52 bg-muted/50">
                {/* Google Maps embed — replace src with real embed URL */}
                <iframe
                  title="Aura Derma Clinic Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.3695823009856!2d80.24193807454524!3d13.059959087258086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266de8b918ccf%3A0xbdd62da8bb4c6a8f!2sNungambakkam%20High%20Rd%2C%20Nungambakkam%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1714000000000!5m2!1sen!2sin"
                  className="absolute inset-0 w-full h-full border-0"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="p-4">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      Aura Derma
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      42, Nungambakkam High Road
                      <br />
                      Chennai, Tamil Nadu 600034
                    </p>
                  </div>
                </div>
                <a
                  href="https://maps.google.com/?q=Nungambakkam+High+Road+Chennai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-xs text-primary-teal font-medium hover:underline"
                  data-ocid="contact.directions_link"
                >
                  Get Directions →
                </a>
              </div>
            </Card>

            {/* Social Links */}
            <Card
              className="p-5 border-border bg-card shadow-subtle"
              data-ocid="contact.social_card"
            >
              <p className="text-sm font-semibold text-foreground mb-3">
                Follow Our Journey
              </p>
              <div className="flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-10 h-10 rounded-full bg-accent-subtle flex items-center justify-center text-accent-warm hover:bg-accent hover:text-accent-foreground transition-smooth"
                    data-ocid={s.ocid}
                  >
                    <s.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
                See our latest treatments, before & afters, and skin care tips
                on social media.
              </p>
            </Card>
          </motion.aside>
        </div>
      </section>

      {/* ── Bottom CTA strip ── */}
      <section
        className="bg-muted/40 border-t border-border py-8 px-6 text-center"
        data-ocid="contact.cta_section"
      >
        <p className="text-sm text-muted-foreground">
          Prefer to call?{" "}
          <a
            href="tel:+914412345678"
            className="text-primary-teal font-semibold hover:underline"
            data-ocid="contact.call_link"
          >
            +91 44 1234 5678
          </a>{" "}
          — We're happy to answer any questions before you book.
        </p>
      </section>
    </div>
  );
}

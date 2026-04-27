import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Award,
  ChevronDown,
  ChevronRight,
  Clock,
  Mail,
  MapPin,
  Phone,
  Shield,
  Sparkles,
  Star,
  Stethoscope,
  Users,
} from "lucide-react";
import { useState } from "react";
import { AppointmentForm } from "../components/AppointmentForm";
import { featuredServices, services } from "../data/services";
import { testimonials } from "../data/testimonials";

/* ─── Stats ────────────────────────────────────────────────────── */
const stats = [
  { icon: Users, value: "8,000+", label: "Happy Patients" },
  { icon: Award, value: "12+", label: "Years of Excellence" },
  { icon: Clock, value: "52+", label: "Treatments Offered" },
  { icon: Shield, value: "100%", label: "Safe & Certified" },
];

/* ─── FAQ ────────────────────────────────────────────────────────── */
const faqs = [
  {
    q: "How do I know which treatment is right for me?",
    a: "Every patient begins with a free personalised consultation. Our dermatologist will assess your skin or hair concerns, review your medical history, and recommend a evidence-based treatment plan tailored to your goals.",
  },
  {
    q: "Are the treatments safe? Do they cause side effects?",
    a: "All treatments at Aura Derma use FDA-approved devices and clinically tested protocols. Side effects, if any, are minimal and temporary — such as mild redness or swelling. Our team provides detailed pre- and post-care guidance.",
  },
  {
    q: "How many sessions will I need?",
    a: "It varies by treatment and individual response. For example, laser hair removal typically takes 6–8 sessions, while PRP hair therapy shows results in 3–5 sessions. We'll outline a realistic timeline during your first consultation.",
  },
  {
    q: "Is the hair transplant procedure painful?",
    a: "The FUE procedure is performed under local anaesthesia, making it virtually painless. Most patients experience mild discomfort during recovery, which is well-managed with prescribed medication. Most return to work within 3–5 days.",
  },
  {
    q: "How long before I see results?",
    a: "Skin treatments often show improvement within 2–4 weeks. Hair restoration results — especially PRP — become visible around 3 months, with full results at 6–12 months. Patience is key; we track progress at every follow-up.",
  },
  {
    q: "Do you offer EMI or payment plans?",
    a: "Yes. We offer no-cost EMI options through major bank cards and leading healthcare finance providers. Our front desk team can walk you through the available plans during your consultation.",
  },
  {
    q: "Is there a waiting period for appointments?",
    a: "We strive to offer appointments within 48–72 hours for consultations and within a week for most procedures. You can request your preferred slot via our booking form and we'll confirm within 24 hours.",
  },
  {
    q: "What should I do to prepare for my first visit?",
    a: "Come with clean skin — no heavy makeup or sunscreen. Bring any previous dermatology reports or prescriptions if available. Wear comfortable clothing. A detailed skin and hair history from our team will follow during the consultation.",
  },
];

/* ─── Doctors ────────────────────────────────────────────────────── */
const doctors = [
  {
    name: "Dr. Priya Nair",
    title: "Chief Dermatologist",
    quals: "MBBS, MD (Dermatology), FRCP",
    speciality: "Laser & Skin Aesthetics",
    exp: "14 years",
    initials: "PN",
    highlight:
      "Expert in laser resurfacing, pigmentation, and anti-aging protocols.",
  },
  {
    name: "Dr. Arjun Krishnan",
    title: "Senior Trichologist",
    quals: "MBBS, DVL, Hair Transplant Specialist",
    speciality: "Hair Restoration & Transplant",
    exp: "11 years",
    initials: "AK",
    highlight:
      "Performed 1,200+ FUE procedures with a 97% patient satisfaction rate.",
  },
  {
    name: "Dr. Meera Suresh",
    title: "Aesthetic Physician",
    quals: "MBBS, PGDCC, Diploma in Cosmetology",
    speciality: "Injectables & Skin Sculpting",
    exp: "9 years",
    initials: "MS",
    highlight:
      "Specialist in natural-looking fillers, Botox, and non-surgical face contouring.",
  },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="border border-border rounded-2xl overflow-hidden bg-card transition-smooth"
      data-ocid={`faq.item.${index}`}
    >
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left hover:bg-muted/30 transition-smooth"
        aria-expanded={open}
        data-ocid={`faq.toggle.${index}`}
        type="button"
      >
        <span className="font-semibold text-foreground text-sm leading-relaxed pr-2">
          {q}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="px-6 pb-5">
          <div className="w-8 h-px bg-border mb-3" />
          <p className="text-sm text-muted-foreground leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export function HomePage() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  // Show all 6 services in the services section
  const displayServices = services.slice(0, 6);

  return (
    <>
      {/* ═══════════════════ HERO ═══════════════════ */}
      <section
        id="home"
        className="relative min-h-[calc(100vh-5rem)] gradient-hero flex items-center overflow-hidden"
        data-ocid="home.section"
      >
        {/* Background dot texture */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="container mx-auto px-4 py-16 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left — text */}
          <div className="order-2 lg:order-1">
            <Badge
              className="mb-6 bg-accent/20 text-accent-foreground border-accent/30 font-body text-xs tracking-widest uppercase px-3 py-1"
              variant="outline"
            >
              ✦ Chennai's Premier Aesthetic Clinic
            </Badge>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] text-card mb-6">
              Experience{" "}
              <em className="not-italic text-accent-warm">Artistry</em>
              <br />
              in Rejuvenation
            </h1>
            <p className="text-base md:text-lg text-card/70 leading-relaxed max-w-lg mb-8 font-body">
              Discover radiant skin and healthy hair at Aura Derma — Chennai's
              leading aesthetic clinic. Personalised care that meets global
              standards, delivered with warmth.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                onClick={() => scrollTo("#contact")}
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-7 py-3 h-auto text-sm shadow-elevated transition-smooth"
                data-ocid="home.hero_book_button"
              >
                Book Free Consultation <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollTo("#services")}
                className="border-card/30 text-card hover:bg-card/10 font-medium px-7 py-3 h-auto text-sm bg-transparent transition-smooth"
                data-ocid="home.hero_services_button"
              >
                View Treatments
              </Button>
            </div>

            {/* Trust badges */}
            <div className="mt-10 flex flex-wrap gap-4">
              {[
                "NABH Accredited",
                "Certified Dermatologists",
                "ISO 9001:2015",
              ].map((b) => (
                <div
                  key={b}
                  className="flex items-center gap-1.5 text-xs text-card/60"
                >
                  <Shield className="w-3 h-3 text-accent-warm" />
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — hero image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 bg-accent/10 rounded-[40px] blur-2xl" />
              <img
                src="/assets/generated/hero-woman.dim_900x1100.jpg"
                alt="Confident woman with glowing skin and healthy hair"
                className="relative w-[340px] md:w-[420px] lg:w-[480px] h-[460px] md:h-[560px] lg:h-[620px] object-cover rounded-[32px] shadow-elevated"
              />
              {/* Floating rating card */}
              <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-4 shadow-elevated flex items-center gap-3 max-w-[200px]">
                <div className="w-10 h-10 rounded-full bg-teal-subtle flex items-center justify-center flex-shrink-0">
                  <Star className="w-5 h-5 text-primary-teal fill-current" />
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground leading-tight">
                    4.9 / 5.0
                  </p>
                  <p className="text-xs text-muted-foreground">
                    from 2,400+ reviews
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ STATS ═══════════════════ */}
      <section
        className="bg-card border-y border-border"
        data-ocid="stats.section"
      >
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="flex flex-col items-center text-center gap-2"
              >
                <div className="w-10 h-10 rounded-full bg-teal-subtle flex items-center justify-center mb-1">
                  <Icon className="w-5 h-5 text-primary-teal" />
                </div>
                <p className="font-display text-3xl font-semibold text-foreground">
                  {value}
                </p>
                <p className="text-sm text-muted-foreground">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ SERVICES ═══════════════════ */}
      <section
        id="services"
        className="bg-background py-20"
        data-ocid="services.section"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <Badge
              variant="outline"
              className="mb-4 border-primary/30 text-primary-teal bg-teal-subtle text-xs tracking-widest uppercase px-3"
            >
              Our Treatments
            </Badge>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-4">
              Comprehensive Care for{" "}
              <em className="not-italic text-accent-warm">Hair & Skin</em>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-base leading-relaxed">
              Six signature treatments combining advanced medical technology
              with personalised care — each designed to deliver visible, lasting
              results.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {displayServices.map((service, i) => (
              <article
                key={service.id}
                className="bg-card rounded-2xl p-6 border border-border border-teal-left shadow-subtle hover:shadow-elevated hover:-translate-y-1 transition-smooth group"
                data-ocid={`services.item.${i + 1}`}
              >
                {service.tag && (
                  <Badge className="mb-3 text-xs bg-accent-subtle text-accent-warm border-0 font-medium">
                    {service.tag}
                  </Badge>
                )}
                <div className="w-12 h-12 rounded-xl bg-teal-subtle flex items-center justify-center mb-4 text-2xl">
                  {service.icon}
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2 leading-snug">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {service.shortDesc}
                </p>
                <button
                  type="button"
                  onClick={() => scrollTo("#contact")}
                  className="flex items-center gap-1 text-sm font-medium text-primary-teal hover:gap-2 transition-smooth"
                  data-ocid={`services.learn_more.${i + 1}`}
                >
                  Book Consultation <ChevronRight className="w-4 h-4" />
                </button>
              </article>
            ))}
          </div>

          <div className="text-center">
            <Button
              onClick={() => scrollTo("#contact")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-subtle font-semibold px-8 py-3 h-auto"
              data-ocid="services.book_button"
            >
              Schedule a Free Consultation{" "}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* ═══════════════════ DOCTOR TEASER ═══════════════════ */}
      <section
        id="doctors"
        className="bg-muted/40 py-20"
        data-ocid="doctors.section"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <Badge
              variant="outline"
              className="mb-4 border-accent/30 text-accent-warm bg-accent-subtle text-xs tracking-widest uppercase px-3"
            >
              Our Specialists
            </Badge>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-4">
              Meet the <em className="not-italic text-accent-warm">Experts</em>{" "}
              Behind Your Care
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-base leading-relaxed">
              Board-certified dermatologists and trichologists with decades of
              combined expertise, committed to your transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {doctors.map((doc, i) => (
              <article
                key={doc.name}
                className="bg-card rounded-2xl border border-border shadow-subtle hover:shadow-elevated hover:-translate-y-1 transition-smooth overflow-hidden"
                data-ocid={`doctors.item.${i + 1}`}
              >
                {/* Avatar strip */}
                <div className="h-32 gradient-hero flex items-end px-6 pb-5 relative overflow-hidden">
                  {/* decorative rings */}
                  <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full border border-card/10" />
                  <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full border border-card/10" />
                  <div className="flex items-center gap-4 relative z-10">
                    <div className="w-14 h-14 rounded-full gradient-accent flex items-center justify-center flex-shrink-0 border-2 border-card/30">
                      <span className="font-bold text-accent-foreground text-lg">
                        {doc.initials}
                      </span>
                    </div>
                    <div>
                      <p className="font-display text-base font-semibold text-card leading-tight">
                        {doc.name}
                      </p>
                      <p className="text-xs text-card/70">{doc.title}</p>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Stethoscope className="w-4 h-4 text-primary-teal flex-shrink-0" />
                    <span className="text-xs font-semibold text-primary-teal uppercase tracking-wide">
                      {doc.speciality}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-3 font-medium">
                    {doc.quals}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {doc.highlight}
                  </p>
                  <div className="flex items-center justify-between">
                    <Badge
                      variant="outline"
                      className="text-xs border-border text-muted-foreground"
                    >
                      {doc.exp} experience
                    </Badge>
                    <button
                      type="button"
                      onClick={() => scrollTo("#contact")}
                      className="text-xs font-semibold text-primary-teal hover:underline flex items-center gap-1 transition-smooth"
                      data-ocid={`doctors.consult.${i + 1}`}
                    >
                      Book <ChevronRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Credentials callout */}
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 shadow-subtle">
            {[
              {
                icon: "🏥",
                title: "NABH Accredited",
                sub: "National patient safety standards",
              },
              {
                icon: "👩‍⚕️",
                title: "10+ Specialists",
                sub: "Dermatologists & trichologists",
              },
              {
                icon: "⚗️",
                title: "FDA Approved Devices",
                sub: "Clinically proven technology",
              },
              {
                icon: "🌟",
                title: "Award Winning",
                sub: "Best Clinic 2023 – Chennai",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex flex-col items-center text-center gap-1"
              >
                <span className="text-2xl mb-1">{item.icon}</span>
                <p className="font-semibold text-foreground text-sm">
                  {item.title}
                </p>
                <p className="text-xs text-muted-foreground">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ TESTIMONIALS ═══════════════════ */}
      <section
        id="testimonials"
        className="bg-background py-20"
        data-ocid="testimonials.section"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <Badge
              variant="outline"
              className="mb-4 border-primary/30 text-primary-teal bg-teal-subtle text-xs tracking-widest uppercase px-3"
            >
              Patient Stories
            </Badge>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-3">
              Real Results,{" "}
              <em className="not-italic text-accent-warm">Real Confidence</em>
            </h2>
            <p className="text-muted-foreground text-base max-w-md mx-auto leading-relaxed">
              Thousands of patients have trusted Aura Derma with their most
              personal transformations.
            </p>
          </div>

          {/* Overall rating bar */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 bg-card border border-border rounded-2xl p-6 max-w-lg mx-auto shadow-subtle">
            <div className="text-center">
              <p className="font-display text-5xl font-semibold text-foreground">
                4.9
              </p>
              <div className="flex gap-0.5 justify-center mt-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    className="w-4 h-4 text-accent-warm fill-current"
                  />
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Overall Rating
              </p>
            </div>
            <div className="w-px h-12 bg-border hidden sm:block" />
            <div className="text-center">
              <p className="font-display text-2xl font-semibold text-foreground">
                2,400+
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Verified Reviews
              </p>
            </div>
            <div className="w-px h-12 bg-border hidden sm:block" />
            <div className="text-center">
              <p className="font-display text-2xl font-semibold text-foreground">
                98%
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Would Recommend
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {testimonials.map((t, i) => (
              <article
                key={t.id}
                className="bg-card rounded-2xl p-6 border border-border shadow-subtle hover:shadow-elevated transition-smooth flex flex-col"
                data-ocid={`testimonials.item.${i + 1}`}
              >
                {/* Quotation mark */}
                <div className="text-4xl leading-none text-accent-warm font-display mb-2 select-none">
                  "
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">
                  {t.text}
                </p>

                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }, (_, j) => (
                    <Star
                      key={`${t.id}-star-${j}`}
                      className="w-3.5 h-3.5 text-accent-warm fill-current"
                    />
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-10 h-10 rounded-full gradient-teal flex items-center justify-center flex-shrink-0">
                    <span className="font-semibold text-primary-foreground text-xs">
                      {t.initials}
                    </span>
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-foreground text-sm leading-tight truncate">
                      {t.name}
                    </p>
                    <p className="text-xs text-muted-foreground truncate">
                      {t.location}
                    </p>
                  </div>
                </div>

                <div className="mt-3">
                  <Badge
                    variant="outline"
                    className="text-xs border-primary/20 text-primary-teal bg-teal-subtle"
                  >
                    {t.service}
                  </Badge>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center">
            <Button
              variant="outline"
              onClick={() => scrollTo("#contact")}
              className="border-primary text-primary-teal hover:bg-teal-subtle font-semibold px-8 py-3 h-auto transition-smooth"
              data-ocid="testimonials.book_button"
            >
              Start Your Own Journey <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* ═══════════════════ FAQ ═══════════════════ */}
      <section id="faq" className="bg-muted/40 py-20" data-ocid="faq.section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <Badge
              variant="outline"
              className="mb-4 border-accent/30 text-accent-warm bg-accent-subtle text-xs tracking-widest uppercase px-3"
            >
              Common Questions
            </Badge>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-4">
              Frequently Asked{" "}
              <em className="not-italic text-accent-warm">Questions</em>
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto text-base leading-relaxed">
              Everything you need to know before your first visit. If you don't
              find your answer here, we're just a call away.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3 mb-10">
            {faqs.map((faq, i) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} index={i + 1} />
            ))}
          </div>

          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Still have questions?
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button
                onClick={() => scrollTo("#contact")}
                className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-subtle font-semibold h-auto py-2.5"
                data-ocid="faq.contact_button"
              >
                <Phone className="w-4 h-4 mr-2" />
                Speak with a Specialist
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollTo("#contact")}
                className="border-border text-foreground hover:bg-muted/60 font-semibold h-auto py-2.5"
                data-ocid="faq.book_button"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Book Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ CONTACT / BOOKING ═══════════════════ */}
      <section
        id="contact"
        className="bg-background py-20"
        data-ocid="contact.section"
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            {/* Info */}
            <div>
              <Badge
                variant="outline"
                className="mb-5 border-accent/30 text-accent-warm bg-accent-subtle text-xs tracking-widest uppercase px-3"
              >
                Get In Touch
              </Badge>
              <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-5 leading-tight">
                Begin Your{" "}
                <em className="not-italic text-accent-warm">Transformation</em>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Schedule a free consultation with our specialists. We'll assess
                your concerns and create a personalised treatment plan tailored
                to you.
              </p>

              <div className="space-y-5 mb-10">
                {[
                  {
                    Icon: MapPin,
                    label: "Address",
                    value:
                      "14, Nungambakkam High Rd, Nungambakkam, Chennai – 600 034",
                  },
                  { Icon: Phone, label: "Phone", value: "044 1234 5678" },
                  { Icon: Mail, label: "Email", value: "hello@auraderma.in" },
                  {
                    Icon: Clock,
                    label: "Hours",
                    value: "Mon–Sat: 9 AM – 7 PM  |  Sun: 10 AM – 4 PM",
                  },
                ].map(({ Icon, label, value }) => (
                  <div key={label} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl bg-teal-subtle flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-primary-teal" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-0.5">
                        {label}
                      </p>
                      <p className="text-sm text-foreground">{value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Why choose us mini-list */}
              <div className="border-t border-border pt-8">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">
                  Why Aura Derma?
                </p>
                <ul className="space-y-3">
                  {[
                    "Free initial consultation with a certified specialist",
                    "No-cost EMI options available on all treatments",
                    "NABH accredited — highest patient safety standards",
                    "Results-focused protocols backed by clinical evidence",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 items-start text-sm text-muted-foreground"
                    >
                      <div className="w-5 h-5 rounded-full gradient-teal flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg
                          width="10"
                          height="8"
                          viewBox="0 0 10 8"
                          fill="none"
                          aria-hidden="true"
                          role="presentation"
                        >
                          <path
                            d="M1 4L3.5 6.5L9 1"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Appointment Form */}
            <AppointmentForm />
          </div>
        </div>
      </section>

      {/* ═══════════════════ CTA BANNER ═══════════════════ */}
      <section className="gradient-hero py-20" data-ocid="cta.section">
        <div className="container mx-auto px-4 text-center">
          <Badge
            className="mb-6 bg-accent/20 text-accent-foreground border-accent/30 text-xs tracking-widest uppercase px-3 py-1"
            variant="outline"
          >
            Take the First Step
          </Badge>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-card mb-5 max-w-2xl mx-auto leading-tight">
            Your best skin & hair are
            <br />
            <em className="not-italic text-accent-warm">waiting for you</em>
          </h2>
          <p className="text-card/70 mb-8 max-w-md mx-auto text-base leading-relaxed">
            Join thousands of patients who've discovered their most confident
            selves at Aura Derma, Chennai's most trusted aesthetic clinic.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button
              onClick={() => scrollTo("#contact")}
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-3 h-auto text-sm shadow-elevated transition-smooth"
              data-ocid="cta.book_button"
            >
              Book Free Consultation <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollTo("#doctors")}
              className="border-card/30 text-card hover:bg-card/10 font-medium px-7 py-3 h-auto text-sm bg-transparent transition-smooth"
              data-ocid="cta.meet_doctors_button"
            >
              Meet Our Doctors
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

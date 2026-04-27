import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Award,
  CalendarCheck,
  CheckCircle2,
  Heart,
  Leaf,
  Quote,
  Shield,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import { motion } from "motion/react";

// ─── Data ────────────────────────────────────────────────────────────────────

const values = [
  {
    icon: Heart,
    title: "Patient-First Care",
    description:
      "Every treatment begins with listening. We take time to understand your unique concerns, skin type, and goals before recommending any procedure.",
  },
  {
    icon: Shield,
    title: "Evidence-Based Medicine",
    description:
      "All our protocols are grounded in clinical research and dermatological science — no fad treatments, no empty promises.",
  },
  {
    icon: Sparkles,
    title: "Natural Results",
    description:
      "We believe in enhancing your natural beauty, not altering it. Our goal is to help you look refreshed, healthy, and confidently yourself.",
  },
  {
    icon: Leaf,
    title: "Holistic Approach",
    description:
      "Skin and hair health reflect overall wellness. We address underlying causes — lifestyle, nutrition, stress — not just surface symptoms.",
  },
  {
    icon: Users,
    title: "Inclusive Excellence",
    description:
      "Our expertise spans all skin tones and hair types, with specialised protocols for South Asian and Indian skin — uniquely suited for Chennai.",
  },
  {
    icon: CheckCircle2,
    title: "Transparent Practice",
    description:
      "No hidden costs, no pressure upsells. We explain every recommendation clearly so you make informed decisions about your care.",
  },
];

const awards = [
  {
    year: "2024",
    title: "Best Dermatology Clinic – Chennai",
    org: "Times Health Excellence Awards",
    icon: Award,
  },
  {
    year: "2023",
    title: "Top 10 Skin Clinics in Tamil Nadu",
    org: "The Hindu BestOf List",
    icon: Star,
  },
  {
    year: "2023",
    title: "Excellence in Hair Restoration",
    org: "Indian Association of Dermatologists",
    icon: Award,
  },
  {
    year: "2022",
    title: "Patient Choice Award",
    org: "Practo Health Awards",
    icon: Heart,
  },
  {
    year: "2022",
    title: "Aesthetic Innovation Award",
    org: "South India Dermatology Summit",
    icon: Sparkles,
  },
  {
    year: "2021",
    title: "Emerging Clinic of the Year",
    org: "MedX India",
    icon: Star,
  },
];

const specializations = [
  "Advanced Laser Dermatology",
  "Hair Transplant (FUE/FUT)",
  "PRP Hair Restoration",
  "Chemical Peels & Resurfacing",
  "Anti-Aging & Injectables",
  "Acne Scar Treatment",
  "Hyperpigmentation Therapy",
  "Medical-Grade Facials",
];

const teamMembers = [
  {
    name: "Meera Nair",
    role: "Senior Aesthetician",
    credentials: "CIDESCO, 6+ years",
    focus: "Facial Treatments & Chemical Peels",
    photo: "/assets/generated/staff-meera-nair.dim_400x450.jpg",
  },
  {
    name: "Dr. Arjun Kumar",
    role: "Hair Restoration Specialist",
    credentials: "MBBS, Trichology Diploma",
    focus: "Hair Transplant & PRP Therapy",
    photo: "/assets/generated/staff-arjun-kumar.dim_400x450.jpg",
  },
  {
    name: "Divya Raj",
    role: "Patient Care Coordinator",
    credentials: "B.Sc Nursing, 4+ years",
    focus: "Treatment Planning & Follow-Up",
    photo: "/assets/generated/staff-divya-raj.dim_400x450.jpg",
  },
];

// ─── Animations ──────────────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: "easeOut" as const },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: "easeOut" as const },
  },
};

// ─── Component ───────────────────────────────────────────────────────────────

export function AboutPage() {
  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div data-ocid="about.page">
      {/* ── Page Hero ── */}
      <section
        className="relative bg-card border-b border-border overflow-hidden"
        id="about-hero"
      >
        <div className="absolute inset-0 bg-teal-subtle opacity-40 pointer-events-none" />
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-accent-subtle opacity-30 translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0}
            className="max-w-2xl"
          >
            <Badge className="bg-accent/10 text-accent border-accent/20 mb-4 text-xs tracking-widest uppercase font-body font-medium">
              About Aura Derma
            </Badge>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-5">
              Where Science Meets{" "}
              <span className="text-accent-warm">Radiant Beauty</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
              Chennai's trusted destination for advanced hair and skin care —
              blending medical precision with a warm, personal touch since 2015.
            </p>
            <Button
              onClick={scrollToContact}
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-elevated px-7 py-5 text-base"
              data-ocid="about.hero_book_button"
            >
              <CalendarCheck className="w-4 h-4 mr-2" />
              Book a Consultation
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ── Our Story ── */}
      <section
        className="bg-background py-20 md:py-28"
        id="our-story"
        data-ocid="about.story_section"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeLeft}
            >
              <Badge className="bg-muted text-muted-foreground border-border mb-4 text-xs tracking-widest uppercase font-body">
                Our Story
              </Badge>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground leading-snug mb-6">
                A Vision Born from a Belief in Better Skin Health
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-5">
                Aura Derma was founded in 2015 by Dr. Priya Sharma with a
                singular vision: to bring evidence-based, compassionate
                dermatology to Chennai. She had witnessed too many patients
                cycle through ineffective treatments, left feeling dismissed or
                overwhelmed. She set out to build something different.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-5">
                Starting with a modest two-room clinic in T. Nagar, Dr. Sharma
                combined her rigorous clinical training with a genuine curiosity
                for the latest dermatological advances. Word spread — not
                through advertising, but through results. Patients who had
                struggled for years with acne, pigmentation, or hair thinning
                walked out with renewed confidence.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Today, Aura Derma is a full-service aesthetic clinic with a team
                of dedicated specialists, serving over 5,000 patients annually.
                But our founding philosophy remains unchanged: every face has a
                story, and every patient deserves our very best.
              </p>

              {/* Mission Statement */}
              <div className="border-teal-left pl-5 py-2 bg-teal-subtle rounded-r-lg">
                <p className="font-display text-lg italic text-foreground leading-relaxed">
                  "Our mission is to empower every patient with personalised,
                  science-backed skin and hair care — delivered with honesty,
                  empathy, and excellence."
                </p>
                <p className="text-sm text-muted-foreground mt-2 font-medium">
                  — Dr. Priya Sharma, Founder & Chief Dermatologist
                </p>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeRight}
              className="flex flex-col gap-6"
            >
              <div className="grid grid-cols-2 gap-5">
                {[
                  { value: "10+", label: "Years of Excellence" },
                  { value: "5,000+", label: "Patients Annually" },
                  { value: "98%", label: "Patient Satisfaction" },
                  { value: "20+", label: "Treatment Specialties" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-card border border-border rounded-2xl p-6 shadow-subtle text-center"
                  >
                    <p className="font-display text-3xl md:text-4xl font-semibold text-accent-warm mb-1">
                      {stat.value}
                    </p>
                    <p className="text-sm text-muted-foreground font-body">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
              <div className="bg-card border border-border rounded-2xl p-6 shadow-subtle">
                <div className="flex items-start gap-3">
                  <Quote className="w-8 h-8 text-primary/40 shrink-0 mt-1" />
                  <blockquote className="text-muted-foreground leading-relaxed italic text-sm">
                    "I had been dealing with persistent acne scars for 5 years.
                    After just three sessions at Aura Derma, my skin
                    transformed. Dr. Priya took time to understand my skin's
                    history and customised a plan just for me."
                  </blockquote>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star
                        key={s}
                        className="w-3.5 h-3.5 fill-accent text-accent"
                      />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground font-medium">
                    — Kavitha R., Anna Nagar
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Lead Doctor ── */}
      <section
        className="bg-muted/30 border-y border-border py-20 md:py-28"
        id="doctor"
        data-ocid="about.doctor_section"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Photo */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeLeft}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-elevated aspect-[5/6] max-w-sm mx-auto lg:mx-0">
                <img
                  src="/assets/generated/dr-priya-sharma-portrait.dim_600x700.jpg"
                  alt="Dr. Priya Sharma, Chief Dermatologist"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent pointer-events-none" />
              </div>
              {/* Floating badge */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 lg:left-6 lg:translate-x-0 bg-card/95 backdrop-blur-sm border border-border rounded-2xl px-5 py-3 shadow-elevated text-center min-w-[180px]">
                <p className="font-display text-base font-semibold text-foreground">
                  Dr. Priya Sharma
                </p>
                <p className="text-xs text-primary font-medium mt-0.5">
                  MBBS · MD Dermatology
                </p>
              </div>
            </motion.div>

            {/* Profile */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeRight}
            >
              <Badge className="bg-accent/10 text-accent border-accent/20 mb-4 text-xs tracking-widest uppercase font-body">
                Meet the Doctor
              </Badge>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground leading-snug mb-2">
                Dr. Priya Sharma
              </h2>
              <p className="text-primary font-medium mb-1">
                Founder & Chief Dermatologist
              </p>
              <p className="text-muted-foreground text-sm mb-6">
                MBBS, MD Dermatology (AIIMS Delhi) · 10+ Years Experience
              </p>

              <p className="text-muted-foreground leading-relaxed mb-5">
                Dr. Priya Sharma is one of Chennai's foremost dermatologists,
                known for her meticulous diagnostic approach and genuine rapport
                with patients. After completing her MD in Dermatology at AIIMS
                Delhi with distinction, she pursued advanced fellowship training
                in laser dermatology and hair restoration techniques in New York
                and London.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-7">
                She has published over 15 peer-reviewed papers on pigmentation
                disorders in Indian skin, and regularly speaks at national and
                international dermatology conferences. Her practice philosophy:
                "Diagnose first, treat second. Understanding the root is
                everything."
              </p>

              {/* Credentials pills */}
              <div className="flex flex-wrap gap-2 mb-7">
                {[
                  "MBBS – AIIMS Delhi",
                  "MD Dermatology",
                  "Fellowship – Laser & Aesthetics",
                  "IAD Member",
                  "IADVL Fellow",
                  "10+ Years Experience",
                ].map((c) => (
                  <Badge
                    key={c}
                    className="bg-muted text-muted-foreground border-border text-xs font-body font-normal px-3 py-1"
                  >
                    {c}
                  </Badge>
                ))}
              </div>

              <Separator className="mb-7" />

              {/* Specializations */}
              <div data-ocid="about.specializations_section">
                <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                  Specializations
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {specializations.map((s) => (
                    <div
                      key={s}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section
        className="bg-background py-20 md:py-28"
        id="values"
        data-ocid="about.values_section"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-center max-w-xl mx-auto mb-14"
          >
            <Badge className="bg-muted text-muted-foreground border-border mb-4 text-xs tracking-widest uppercase font-body">
              Our Philosophy
            </Badge>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground leading-snug mb-4">
              The Values That Guide Everything We Do
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              These aren't platitudes — they're the principles every member of
              our team lives by, from the moment you walk in to your final
              follow-up.
            </p>
          </motion.div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            data-ocid="about.values_list"
          >
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                data-ocid={`about.value.${i + 1}`}
              >
                <div className="bg-card border border-border rounded-2xl p-6 shadow-subtle hover:shadow-elevated transition-smooth h-full">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <v.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {v.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {v.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Awards ── */}
      <section
        className="bg-card border-y border-border py-20 md:py-28"
        id="awards"
        data-ocid="about.awards_section"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-center max-w-xl mx-auto mb-14"
          >
            <Badge className="bg-accent/10 text-accent border-accent/20 mb-4 text-xs tracking-widest uppercase font-body">
              Recognition
            </Badge>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground leading-snug mb-4">
              Awards & Recognitions
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Proud to be recognised by leading health, wellness, and media
              organisations across India for our commitment to clinical
              excellence.
            </p>
          </motion.div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
            data-ocid="about.awards_list"
          >
            {awards.map((award, i) => (
              <motion.div
                key={`${award.year}-${award.title}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                data-ocid={`about.award.${i + 1}`}
              >
                <div className="bg-background border border-border rounded-2xl p-5 shadow-subtle hover:shadow-elevated transition-smooth flex gap-4 items-start h-full">
                  <div className="w-10 h-10 rounded-xl gradient-accent flex items-center justify-center shrink-0">
                    <award.icon
                      className="w-4.5 h-4.5 text-primary-foreground"
                      style={{ width: "1.125rem", height: "1.125rem" }}
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-semibold text-accent-warm font-body tabular-nums">
                        {award.year}
                      </span>
                    </div>
                    <p className="font-display text-sm font-semibold text-foreground leading-snug mb-1">
                      {award.title}
                    </p>
                    <p className="text-xs text-muted-foreground">{award.org}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section
        className="bg-muted/30 border-b border-border py-20 md:py-28"
        id="team"
        data-ocid="about.team_section"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-center max-w-xl mx-auto mb-14"
          >
            <Badge className="bg-muted text-muted-foreground border-border mb-4 text-xs tracking-widest uppercase font-body">
              Our Team
            </Badge>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground leading-snug mb-4">
              The People Behind Your Results
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Each member of our team brings specialist training, genuine
              warmth, and a shared dedication to your skin and hair health.
            </p>
          </motion.div>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-7 max-w-4xl mx-auto"
            data-ocid="about.team_list"
          >
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                data-ocid={`about.team_member.${i + 1}`}
              >
                <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-subtle hover:shadow-elevated transition-smooth">
                  <div className="aspect-[4/4.5] overflow-hidden">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full object-cover hover:scale-105 transition-smooth"
                    />
                  </div>
                  <div className="p-5">
                    <p className="font-display text-base font-semibold text-foreground">
                      {member.name}
                    </p>
                    <p className="text-xs text-primary font-medium mt-0.5 mb-1">
                      {member.role}
                    </p>
                    <p className="text-xs text-muted-foreground mb-3">
                      {member.credentials}
                    </p>
                    <div className="border-teal-left pl-3 py-1">
                      <p className="text-xs text-muted-foreground italic">
                        {member.focus}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="bg-background py-20 md:py-28"
        id="about-cta"
        data-ocid="about.cta_section"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="w-14 h-14 rounded-2xl gradient-teal flex items-center justify-center mx-auto mb-6 shadow-elevated">
              <CalendarCheck className="w-6 h-6 text-primary-foreground" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground leading-snug mb-4">
              Ready to Begin Your Skin Journey?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
              Schedule a one-on-one consultation with Dr. Priya Sharma or a
              member of our specialist team. Your first step toward radiant,
              healthy skin starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                onClick={scrollToContact}
                className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-elevated px-8 py-5 text-base"
                data-ocid="about.cta_book_button"
              >
                <CalendarCheck className="w-4 h-4 mr-2" />
                Book a Free Consultation
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  const el = document.querySelector("#services");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="border-border text-foreground hover:bg-muted/60 px-8 py-5 text-base"
                data-ocid="about.cta_services_button"
              >
                Explore Our Services
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

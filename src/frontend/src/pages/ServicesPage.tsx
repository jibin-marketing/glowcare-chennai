import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useNavigate } from "@tanstack/react-router";
import { ArrowRight, ChevronRight, Clock, DollarSign } from "lucide-react";
import { useMemo, useState } from "react";
import { allServices } from "../data/services";
import type { FullService } from "../types";

const CATEGORIES = [
  { key: "all", label: "All Treatments" },
  { key: "facials", label: "Facials" },
  { key: "laser", label: "Laser & HIFU" },
  { key: "peels", label: "Peels" },
  { key: "microneedling", label: "Microneedling" },
  { key: "pmu", label: "PMU & Brows" },
  { key: "hair", label: "Hair" },
  { key: "skin", label: "Skin" },
  { key: "injectables", label: "Injectables" },
] as const;

type FilterKey = (typeof CATEGORIES)[number]["key"];

const categoryColors: Record<string, string> = {
  hair: "bg-teal-subtle text-primary-teal border-primary/20",
  skin: "bg-accent-subtle text-accent-warm border-accent/20",
  laser: "bg-muted text-foreground border-border",
  injectables: "bg-secondary/30 text-secondary-foreground border-secondary/30",
  facials: "bg-accent-subtle text-accent-warm border-accent/20",
  peels: "bg-teal-subtle text-primary-teal border-primary/20",
  microneedling: "bg-muted text-foreground border-border",
  pmu: "bg-secondary/30 text-secondary-foreground border-secondary/30",
};

function ServiceCard({
  service,
  index,
}: {
  service: FullService;
  index: number;
}) {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      className="bg-card rounded-2xl border border-border shadow-subtle hover:shadow-elevated hover:-translate-y-1 transition-smooth flex flex-col group cursor-pointer text-left w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      data-ocid={`services.card.${index}`}
      onClick={() =>
        navigate({
          to: "/services/$serviceId",
          params: { serviceId: service.id },
        })
      }
    >
      {/* Top accent bar */}
      <div className="h-1 rounded-t-2xl gradient-accent w-full" />

      <div className="p-6 flex flex-col flex-1 w-full">
        {/* Tags row */}
        <div className="flex items-center gap-2 mb-4">
          <Badge
            variant="outline"
            className={`text-xs capitalize px-2.5 py-0.5 ${categoryColors[service.category] ?? "bg-muted text-foreground border-border"}`}
          >
            {service.category === "injectables"
              ? "Injectables"
              : service.category === "pmu"
                ? "PMU & Brows"
                : service.category === "microneedling"
                  ? "Microneedling"
                  : service.category}
          </Badge>
          {service.tag && (
            <Badge className="text-xs bg-accent-subtle text-accent-warm border-0 font-medium">
              {service.tag}
            </Badge>
          )}
        </div>

        {/* Icon + title */}
        <div className="flex items-start gap-3 mb-3">
          <div className="w-11 h-11 rounded-xl bg-teal-subtle flex items-center justify-center flex-shrink-0 text-xl">
            {service.icon}
          </div>
          <h3 className="font-display text-lg font-semibold text-foreground leading-snug pt-1">
            {service.title}
          </h3>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
          {service.shortDesc}
        </p>

        {/* Meta */}
        <div className="flex flex-wrap gap-3 mb-5">
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Clock className="w-3.5 h-3.5 text-primary-teal" />
            <span>{service.duration}</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <DollarSign className="w-3.5 h-3.5 text-accent-warm" />
            <span>{service.priceRange}</span>
          </div>
        </div>

        {/* Footer actions */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <span className="flex items-center gap-1 text-sm font-medium text-primary-teal group-hover:gap-2 transition-smooth">
            View Details <ChevronRight className="w-4 h-4" />
          </span>
          <span
            className="inline-flex items-center justify-center bg-primary text-primary-foreground text-xs h-8 px-4 rounded-md font-medium"
            data-ocid={`services.book.${index}`}
          >
            Book Now
          </span>
        </div>
      </div>
    </button>
  );
}

export function ServicesPage() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");
  const navigate = useNavigate();

  const filtered = useMemo(
    () =>
      activeFilter === "all"
        ? allServices
        : allServices.filter((s) => s.category === activeFilter),
    [activeFilter],
  );

  const navigateToContact = () => navigate({ to: "/contact" });

  return (
    <div className="min-h-screen bg-background" data-ocid="services.page">
      {/* ── Hero Banner ───────────────────────────────────────────── */}
      <section
        className="gradient-hero py-20 md:py-28 relative overflow-hidden"
        data-ocid="services.hero"
      >
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <Badge
            className="mb-5 bg-accent/20 text-accent-foreground border-accent/30 text-xs tracking-widest uppercase px-3 py-1"
            variant="outline"
          >
            ✦ Expert Care, Proven Results
          </Badge>
          <h1 className="font-display text-5xl md:text-6xl font-semibold text-card leading-tight mb-5">
            Our Treatments &{" "}
            <em className="not-italic text-accent-warm">Services</em>
          </h1>
          <p className="text-card/70 max-w-xl mx-auto text-base leading-relaxed mb-8">
            Comprehensive aesthetic care for hair and skin — combining advanced
            medical technology with personalised treatment plans tailored for
            Chennai's climate and skin types.
          </p>
          <Button
            onClick={navigateToContact}
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-3 h-auto shadow-elevated transition-smooth"
            data-ocid="services.hero_book_button"
          >
            Book a Consultation <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </section>

      {/* ── Category Filter Tabs ──────────────────────────────────── */}
      <section
        className="bg-card border-b border-border sticky top-16 md:top-20 z-30"
        data-ocid="services.filter_bar"
      >
        <div className="container mx-auto px-4">
          <div
            className="flex gap-1 overflow-x-auto py-3 scrollbar-hide"
            role="tablist"
            aria-label="Service categories"
          >
            {CATEGORIES.map(({ key, label }) => (
              <button
                type="button"
                key={key}
                role="tab"
                aria-selected={activeFilter === key}
                onClick={() => setActiveFilter(key)}
                className={`flex-shrink-0 px-5 py-2 rounded-full text-sm font-medium transition-smooth border whitespace-nowrap ${
                  activeFilter === key
                    ? "bg-primary text-primary-foreground border-primary shadow-subtle"
                    : "bg-background text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
                }`}
                data-ocid={`services.filter.${key}`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Service Count ──────────────────────────────────────────── */}
      <section className="bg-background py-8" data-ocid="services.count_bar">
        <div className="container mx-auto px-4 flex items-center justify-between flex-wrap gap-3">
          <p className="text-muted-foreground text-sm">
            Showing{" "}
            <span className="font-semibold text-foreground">
              {filtered.length}
            </span>{" "}
            {activeFilter === "all"
              ? "treatments across all categories"
              : `treatments in ${CATEGORIES.find((c) => c.key === activeFilter)?.label}`}
          </p>
          <button
            type="button"
            onClick={navigateToContact}
            className="flex items-center gap-1 text-sm font-medium text-primary-teal hover:underline transition-smooth"
            data-ocid="services.consult_link"
          >
            Need help choosing? Book a free consultation{" "}
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* ── Services Grid ─────────────────────────────────────────── */}
      <section className="bg-background pb-20" data-ocid="services.grid">
        <div className="container mx-auto px-4">
          {filtered.length === 0 ? (
            <div className="text-center py-24" data-ocid="services.empty_state">
              <p className="text-muted-foreground">
                No treatments found for this category.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((service, i) => (
                <ServiceCard key={service.id} service={service} index={i + 1} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Bottom CTA ───────────────────────────────────────────── */}
      <section
        className="bg-muted/40 border-t border-border py-16"
        data-ocid="services.bottom_cta"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Not sure which treatment is right for you?
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto mb-8 text-sm leading-relaxed">
            Our dermatologists offer a complimentary 20-minute consultation to
            assess your concerns and recommend the best treatment plan.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button
              onClick={navigateToContact}
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 py-3 h-auto shadow-subtle"
              data-ocid="services.cta_book_button"
            >
              Book Free Consultation <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <a href="tel:+914412345678">
              <Button
                variant="outline"
                className="border-primary text-primary-teal hover:bg-teal-subtle font-medium px-8 py-3 h-auto"
                data-ocid="services.cta_call_button"
              >
                Call 044 1234 5678
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

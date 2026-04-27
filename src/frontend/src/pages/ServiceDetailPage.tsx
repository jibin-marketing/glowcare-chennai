import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useNavigate, useParams } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Clock,
  DollarSign,
} from "lucide-react";
import { allServices } from "../data/services";

const categoryLabel: Record<string, string> = {
  hair: "Hair Services",
  skin: "Skin Treatments",
  laser: "Laser Treatments",
  injectables: "Injectables & Fillers",
};

const categoryColors: Record<string, string> = {
  hair: "bg-teal-subtle text-primary-teal border-primary/20",
  skin: "bg-accent-subtle text-accent-warm border-accent/20",
  laser: "bg-muted text-foreground border-border",
  injectables: "bg-secondary/30 text-secondary-foreground border-secondary/30",
};

export function ServiceDetailPage() {
  const { serviceId } = useParams({ from: "/services/$serviceId" });
  const navigate = useNavigate();
  const service = allServices.find((s) => s.id === serviceId);

  const scrollToContact = () => {
    navigate({ to: "/contact" });
  };

  if (!service) {
    return (
      <div
        className="min-h-screen bg-background flex flex-col items-center justify-center gap-6 py-32"
        data-ocid="service-detail.not_found"
      >
        <div className="text-6xl">🔍</div>
        <h1 className="font-display text-3xl font-semibold text-foreground">
          Treatment not found
        </h1>
        <p className="text-muted-foreground text-sm">
          The treatment you're looking for doesn't exist.
        </p>
        <Button
          onClick={() => navigate({ to: "/services" })}
          className="bg-primary text-primary-foreground"
          data-ocid="service-detail.back_button"
        >
          <ArrowLeft className="mr-2 w-4 h-4" /> Back to Services
        </Button>
      </div>
    );
  }

  const relatedServices = allServices
    .filter((s) => s.category === service.category && s.id !== service.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background" data-ocid="service-detail.page">
      {/* ── Breadcrumb ─────────────────────────────────────────── */}
      <div
        className="bg-card border-b border-border py-3"
        data-ocid="service-detail.breadcrumb"
      >
        <div className="container mx-auto px-4 flex items-center gap-2 text-sm text-muted-foreground">
          <button
            type="button"
            onClick={() => navigate({ to: "/" })}
            className="hover:text-foreground transition-colors"
            data-ocid="service-detail.home_link"
          >
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5" />
          <button
            type="button"
            onClick={() => navigate({ to: "/services" })}
            className="hover:text-foreground transition-colors"
            data-ocid="service-detail.services_link"
          >
            Services
          </button>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-foreground font-medium truncate">
            {service.title}
          </span>
        </div>
      </div>

      {/* ── Hero Section ──────────────────────────────────────── */}
      <section
        className="gradient-hero py-16 md:py-20 relative overflow-hidden"
        data-ocid="service-detail.hero"
      >
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <button
            type="button"
            onClick={() => navigate({ to: "/services" })}
            className="flex items-center gap-2 text-card/70 hover:text-card text-sm mb-8 transition-colors"
            data-ocid="service-detail.back_to_services"
          >
            <ArrowLeft className="w-4 h-4" /> Back to All Services
          </button>

          <div className="flex flex-wrap items-start gap-4 mb-5">
            <Badge
              variant="outline"
              className={`text-xs capitalize px-2.5 py-0.5 ${categoryColors[service.category]}`}
            >
              {categoryLabel[service.category]}
            </Badge>
            {service.tag && (
              <Badge className="text-xs bg-accent/30 text-accent-foreground border-0">
                {service.tag}
              </Badge>
            )}
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="w-16 h-16 rounded-2xl bg-card/10 backdrop-blur border border-card/20 flex items-center justify-center text-3xl mb-6">
                {service.icon}
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-semibold text-card leading-tight mb-4">
                {service.title}
              </h1>
              <p className="text-card/75 text-base md:text-lg leading-relaxed max-w-lg">
                {service.fullDescription}
              </p>
            </div>

            {/* Quick Facts Card */}
            <div className="bg-card/10 backdrop-blur border border-card/20 rounded-2xl p-6">
              <h3 className="font-semibold text-card text-sm uppercase tracking-widest mb-4">
                Treatment Overview
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-card/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4.5 h-4.5 text-card/70" />
                  </div>
                  <div>
                    <p className="text-xs text-card/50 uppercase tracking-wide mb-0.5">
                      Duration
                    </p>
                    <p className="text-sm text-card font-medium">
                      {service.duration}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-card/10 flex items-center justify-center flex-shrink-0">
                    <DollarSign className="w-4.5 h-4.5 text-card/70" />
                  </div>
                  <div>
                    <p className="text-xs text-card/50 uppercase tracking-wide mb-0.5">
                      Price Range
                    </p>
                    <p className="text-sm text-card font-medium">
                      {service.priceRange}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-card/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-base">🗓</span>
                  </div>
                  <div>
                    <p className="text-xs text-card/50 uppercase tracking-wide mb-0.5">
                      Sessions
                    </p>
                    <p className="text-sm text-card font-medium">
                      {service.sessions}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-card/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-base">⏱</span>
                  </div>
                  <div>
                    <p className="text-xs text-card/50 uppercase tracking-wide mb-0.5">
                      Recovery
                    </p>
                    <p className="text-sm text-card font-medium">
                      {service.recoveryTime}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-card/20">
                <Button
                  onClick={scrollToContact}
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-elevated"
                  data-ocid="service-detail.hero_book_button"
                >
                  Book This Treatment <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Main Content ──────────────────────────────────────── */}
      <section
        className="bg-background py-16"
        data-ocid="service-detail.content"
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Left: Benefits + Procedure + Aftercare */}
            <div className="lg:col-span-2 space-y-10">
              {/* Benefits */}
              <div data-ocid="service-detail.benefits_section">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-1 h-6 rounded-full gradient-accent" />
                  <h2 className="font-display text-2xl font-semibold text-foreground">
                    Key Benefits
                  </h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  {service.benefits.map((benefit, i) => (
                    <div
                      key={benefit}
                      className="flex items-start gap-3 bg-card rounded-xl p-4 border border-border"
                      data-ocid={`service-detail.benefit.${i + 1}`}
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary-teal flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-foreground leading-relaxed">
                        {benefit}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Procedure */}
              <div data-ocid="service-detail.procedure_section">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-1 h-6 rounded-full gradient-teal" />
                  <h2 className="font-display text-2xl font-semibold text-foreground">
                    The Procedure
                  </h2>
                </div>
                <div className="space-y-3">
                  {service.procedure.map((step, i) => (
                    <div
                      key={step}
                      className="flex items-start gap-4 bg-card rounded-xl p-4 border border-border"
                      data-ocid={`service-detail.step.${i + 1}`}
                    >
                      <div className="w-7 h-7 rounded-full gradient-teal flex items-center justify-center flex-shrink-0 text-xs font-bold text-primary-foreground">
                        {i + 1}
                      </div>
                      <p className="text-sm text-foreground leading-relaxed pt-0.5">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Aftercare */}
              <div data-ocid="service-detail.aftercare_section">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-1 h-6 rounded-full gradient-accent" />
                  <h2 className="font-display text-2xl font-semibold text-foreground">
                    Post-Treatment Care
                  </h2>
                </div>
                <div className="bg-card rounded-xl border border-border p-6">
                  <ul className="space-y-3">
                    {service.aftercare.map((item, i) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm text-foreground"
                        data-ocid={`service-detail.aftercare.${i + 1}`}
                      >
                        <span className="w-5 h-5 rounded-full bg-accent-subtle text-accent-warm flex items-center justify-center flex-shrink-0 text-xs font-bold">
                          ✓
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Sidebar: Suitable For + Book CTA */}
            <div className="space-y-6" data-ocid="service-detail.sidebar">
              {/* Suitable For */}
              <div className="bg-card rounded-2xl border border-border p-6 shadow-subtle">
                <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                  Suitable For
                </h3>
                <ul className="space-y-2">
                  {service.suitableFor.map((item, i) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-foreground"
                      data-ocid={`service-detail.suitable.${i + 1}`}
                    >
                      <span className="text-primary-teal mt-0.5">◆</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Book CTA card */}
              <div className="bg-card rounded-2xl border border-border p-6 shadow-subtle">
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  Ready to begin?
                </h3>
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                  Book a free consultation with our specialists and receive a
                  personalised treatment plan.
                </p>
                <Button
                  onClick={scrollToContact}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-subtle mb-3"
                  data-ocid="service-detail.sidebar_book_button"
                >
                  Book Appointment <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <a href="tel:+914412345678" className="block">
                  <Button
                    variant="outline"
                    className="w-full border-primary text-primary-teal hover:bg-teal-subtle"
                    data-ocid="service-detail.sidebar_call_button"
                  >
                    Call 044 1234 5678
                  </Button>
                </a>
              </div>

              {/* Price transparency note */}
              <div className="bg-teal-subtle rounded-xl p-4 border border-primary/15">
                <p className="text-xs text-primary-teal leading-relaxed">
                  <span className="font-semibold block mb-1">
                    Price Transparency
                  </span>
                  All prices are indicative. Final pricing is discussed during
                  your consultation after a thorough assessment of your concerns
                  and goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Services ─────────────────────────────────── */}
      {relatedServices.length > 0 && (
        <section
          className="bg-muted/40 border-t border-border py-16"
          data-ocid="service-detail.related_services"
        >
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground">
                Related{" "}
                <em className="not-italic text-accent-warm">
                  {categoryLabel[service.category]}
                </em>
              </h2>
              <button
                type="button"
                onClick={() => navigate({ to: "/services" })}
                className="flex items-center gap-1 text-sm font-medium text-primary-teal hover:underline"
                data-ocid="service-detail.view_all_link"
              >
                View all services <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {relatedServices.map((rel, i) => (
                <button
                  key={rel.id}
                  type="button"
                  className="bg-card rounded-2xl border border-border p-5 shadow-subtle hover:shadow-elevated hover:-translate-y-1 transition-smooth cursor-pointer group text-left w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  onClick={() =>
                    navigate({
                      to: "/services/$serviceId",
                      params: { serviceId: rel.id },
                    })
                  }
                  data-ocid={`service-detail.related.${i + 1}`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-teal-subtle flex items-center justify-center text-lg flex-shrink-0">
                      {rel.icon}
                    </div>
                    <h3 className="font-semibold text-foreground leading-snug">
                      {rel.title}
                    </h3>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-3 line-clamp-2">
                    {rel.shortDesc}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {rel.duration}
                    </span>
                    <span className="flex items-center gap-1 text-primary-teal font-medium group-hover:gap-2 transition-smooth">
                      Details <ChevronRight className="w-3 h-3" />
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

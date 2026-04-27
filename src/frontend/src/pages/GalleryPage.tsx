import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useNavigate } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, Sparkles, X, ZoomIn } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useState } from "react";

// ─── Types ───────────────────────────────────────────────────────────────────

type GalleryCategory = "skin" | "hair" | "lasers" | "injectables";
type FilterKey = GalleryCategory | "all";

interface GalleryItem {
  id: string;
  category: GalleryCategory;
  title: string;
  description: string;
  sessions: string;
  image: string;
}

// ─── Data ────────────────────────────────────────────────────────────────────

const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    category: "skin",
    title: "Acne Scar Treatment",
    description:
      "Fractional laser + PRP combination therapy dramatically reduces atrophic and boxcar scars for visibly smoother skin.",
    sessions: "6 sessions",
    image: "/assets/generated/gallery-acne-scar.dim_600x400.jpg",
  },
  {
    id: "g2",
    category: "hair",
    title: "PRP Hair Restoration",
    description:
      "Platelet-rich plasma mesotherapy stimulates dormant follicles, delivering visible regrowth and increased hair density.",
    sessions: "4 sessions over 3 months",
    image: "/assets/generated/gallery-hair-prp.dim_600x400.jpg",
  },
  {
    id: "g3",
    category: "hair",
    title: "FUE Hair Transplant",
    description:
      "2400 grafts placed via Follicular Unit Extraction — permanent, natural-looking hairline restoration.",
    sessions: "Single procedure",
    image: "/assets/generated/gallery-fue-transplant.dim_600x400.jpg",
  },
  {
    id: "g4",
    category: "skin",
    title: "Pigmentation Correction",
    description:
      "Q-Switch Nd:YAG laser targets melanin clusters, visibly brightening uneven tone, melasma, and sun damage.",
    sessions: "4 sessions",
    image: "/assets/generated/gallery-pigmentation.dim_600x400.jpg",
  },
  {
    id: "g5",
    category: "lasers",
    title: "Laser Hair Removal",
    description:
      "Advanced diode laser delivers permanent hair reduction with cool-tip comfort technology — all skin types.",
    sessions: "6–8 sessions",
    image: "/assets/generated/gallery-laser-hair.dim_600x400.jpg",
  },
  {
    id: "g6",
    category: "injectables",
    title: "Lip Filler Enhancement",
    description:
      "Precision hyaluronic acid filler adds natural volume and definition while preserving authentic lip movement.",
    sessions: "Single session",
    image: "/assets/generated/gallery-lip-filler.dim_600x400.jpg",
  },
  {
    id: "g7",
    category: "skin",
    title: "HydraFacial Rejuvenation",
    description:
      "Multi-step vortex cleansing, exfoliation, and deep hydration infusion restores luminosity and skin barrier health.",
    sessions: "Monthly maintenance",
    image: "/assets/generated/gallery-hydrafacial.dim_600x400.jpg",
  },
  {
    id: "g8",
    category: "injectables",
    title: "Anti-Wrinkle Botox",
    description:
      "Targeted neuromodulator injections relax dynamic lines for a refreshed, natural look with zero downtime.",
    sessions: "Lasts 4–6 months",
    image: "/assets/generated/gallery-botox.dim_600x400.jpg",
  },
];

const filters: { key: FilterKey; label: string }[] = [
  { key: "all", label: "All Treatments" },
  { key: "skin", label: "Skin Rejuvenation" },
  { key: "hair", label: "Hair Restoration" },
  { key: "lasers", label: "Laser Treatments" },
  { key: "injectables", label: "Injectables" },
];

const categoryColors: Record<GalleryCategory, string> = {
  skin: "bg-accent/15 text-accent border-accent/30",
  hair: "bg-primary/10 text-primary border-primary/30",
  lasers: "bg-secondary/40 text-secondary-foreground border-secondary/50",
  injectables: "bg-muted text-muted-foreground border-border",
};

const categoryLabels: Record<GalleryCategory, string> = {
  skin: "Skin",
  hair: "Hair",
  lasers: "Lasers",
  injectables: "Injectables",
};

// ─── Lightbox ─────────────────────────────────────────────────────────────────

interface LightboxProps {
  items: GalleryItem[];
  activeIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

function Lightbox({
  items,
  activeIndex,
  onClose,
  onPrev,
  onNext,
}: LightboxProps) {
  const item = items[activeIndex];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, onPrev, onNext]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 backdrop-blur-sm p-4"
      onClick={onClose}
      data-ocid="gallery.dialog"
    >
      <motion.div
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.92, opacity: 0 }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className="relative bg-card rounded-2xl shadow-elevated overflow-hidden max-w-2xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          type="button"
          aria-label="Close lightbox"
          data-ocid="gallery.close_button"
          onClick={onClose}
          className="absolute top-3 right-3 z-10 p-2 rounded-full bg-foreground/10 hover:bg-foreground/20 transition-smooth text-card-foreground"
        >
          <X size={18} />
        </button>

        {/* Image with before/after overlay */}
        <div className="relative">
          <img
            src={item.image}
            alt={item.title}
            className="w-full object-cover"
            style={{ maxHeight: 380 }}
          />
          {/* Before / After labels */}
          <div className="absolute bottom-3 left-3">
            <span className="px-2.5 py-1 text-xs font-semibold rounded bg-foreground/70 text-background tracking-wider uppercase">
              Before
            </span>
          </div>
          <div className="absolute bottom-3 right-3">
            <span className="px-2.5 py-1 text-xs font-semibold rounded bg-primary text-primary-foreground tracking-wider uppercase">
              After
            </span>
          </div>
          {/* Divider line */}
          <div className="absolute inset-y-0 left-1/2 -translate-x-px w-0.5 bg-card/60" />
        </div>

        {/* Info */}
        <div className="p-6">
          <div className="flex items-start justify-between gap-3 mb-2">
            <h3 className="font-display text-xl text-foreground leading-snug">
              {item.title}
            </h3>
            <span
              className={`text-xs font-semibold px-2.5 py-1 rounded-full border shrink-0 ${categoryColors[item.category]}`}
            >
              {categoryLabels[item.category]}
            </span>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed mb-3">
            {item.description}
          </p>
          <div className="flex items-center gap-2 text-xs text-accent font-semibold">
            <Sparkles size={13} />
            {item.sessions}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between px-6 pb-5">
          <button
            type="button"
            onClick={onPrev}
            data-ocid="gallery.pagination_prev"
            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-smooth"
          >
            <ChevronLeft size={16} /> Previous
          </button>
          <span className="text-xs text-muted-foreground">
            {activeIndex + 1} / {items.length}
          </span>
          <button
            type="button"
            onClick={onNext}
            data-ocid="gallery.pagination_next"
            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-smooth"
          >
            Next <ChevronRight size={16} />
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── Gallery Card ──────────────────────────────────────────────────────────────

interface GalleryCardProps {
  item: GalleryItem;
  index: number;
  onClick: () => void;
}

function GalleryCard({ item, index, onClick }: GalleryCardProps) {
  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.45,
        delay: index * 0.07,
        ease: "easeOut",
      }}
      data-ocid={`gallery.item.${index + 1}`}
      className="group cursor-pointer bg-card rounded-xl overflow-hidden border border-border shadow-subtle hover:shadow-elevated transition-smooth text-left w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      onClick={onClick}
    >
      {/* Image container */}
      <div className="relative overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full object-cover h-52 group-hover:scale-[1.03] transition-smooth"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-smooth flex items-center justify-center">
          <ZoomIn
            size={28}
            className="text-card opacity-0 group-hover:opacity-100 transition-smooth"
          />
        </div>
        {/* Before / After pills */}
        <div className="absolute bottom-2 left-2 right-2 flex justify-between pointer-events-none">
          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-foreground/60 text-background uppercase tracking-widest">
            Before
          </span>
          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-primary text-primary-foreground uppercase tracking-widest">
            After
          </span>
        </div>
        {/* Centre divider */}
        <div className="absolute inset-y-0 left-1/2 -translate-x-px w-0.5 bg-card/40 pointer-events-none" />
      </div>

      {/* Card body */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-1.5">
          <h3 className="font-display text-base leading-snug text-foreground group-hover:text-primary transition-smooth line-clamp-2">
            {item.title}
          </h3>
          <Badge
            variant="outline"
            className={`text-[10px] font-semibold shrink-0 border ${categoryColors[item.category]}`}
          >
            {categoryLabels[item.category]}
          </Badge>
        </div>
        <p className="text-muted-foreground text-xs leading-relaxed line-clamp-2 mb-2">
          {item.description}
        </p>
        <div className="flex items-center gap-1.5 text-[11px] text-accent font-semibold">
          <Sparkles size={11} />
          {item.sessions}
        </div>
      </div>
    </motion.button>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const navigate = useNavigate();

  const filtered =
    activeFilter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  const openLightbox = useCallback(
    (index: number) => setLightboxIndex(index),
    [],
  );
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const prevItem = useCallback(() => {
    setLightboxIndex((i) =>
      i === null ? null : (i - 1 + filtered.length) % filtered.length,
    );
  }, [filtered.length]);

  const nextItem = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i + 1) % filtered.length));
  }, [filtered.length]);

  return (
    <div data-ocid="gallery.page">
      {/* ── Hero Banner ── */}
      <section className="gradient-hero py-16 md:py-24 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">
            Real Results · Real People
          </p>
          <h1 className="font-display text-4xl md:text-5xl text-primary-foreground leading-tight mb-4">
            Before &amp; After{" "}
            <span className="text-accent-warm italic">Gallery</span>
          </h1>
          <p className="text-primary-foreground/70 max-w-xl mx-auto text-base leading-relaxed">
            Explore our curated collection of treatment outcomes across hair
            restoration, skin rejuvenation, laser therapies, and aesthetic
            injectables.
          </p>
        </motion.div>
      </section>

      {/* ── Filter Tabs ── */}
      <section className="bg-muted/40 border-b border-border sticky top-16 md:top-20 z-30 px-4 py-3">
        <div className="max-w-6xl mx-auto flex items-center gap-2 overflow-x-auto scrollbar-none">
          {filters.map((f) => (
            <button
              type="button"
              key={f.key}
              data-ocid={`gallery.filter.${f.key}`}
              onClick={() => {
                setActiveFilter(f.key);
                setLightboxIndex(null);
              }}
              className={`shrink-0 px-4 py-1.5 rounded-full text-sm font-medium border transition-smooth ${
                activeFilter === f.key
                  ? "bg-primary text-primary-foreground border-primary shadow-subtle"
                  : "bg-card text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
              }`}
            >
              {f.label}
              {f.key !== "all" && (
                <span className="ml-1.5 text-xs opacity-60">
                  ({galleryItems.filter((g) => g.category === f.key).length})
                </span>
              )}
            </button>
          ))}
        </div>
      </section>

      {/* ── Gallery Grid ── */}
      <section className="bg-background py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Count line */}
          <motion.p
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xs text-muted-foreground mb-6"
          >
            Showing{" "}
            <span className="font-semibold text-foreground">
              {filtered.length}
            </span>{" "}
            {filtered.length === 1 ? "result" : "results"}
            {activeFilter !== "all" && (
              <>
                {" "}
                in{" "}
                <span className="font-semibold text-primary">
                  {filters.find((f) => f.key === activeFilter)?.label}
                </span>
              </>
            )}
          </motion.p>

          <AnimatePresence mode="wait">
            {filtered.length > 0 ? (
              <motion.div
                key={activeFilter}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              >
                {filtered.map((item, index) => (
                  <GalleryCard
                    key={item.id}
                    item={item}
                    index={index}
                    onClick={() => openLightbox(index)}
                  />
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                data-ocid="gallery.empty_state"
                className="text-center py-20"
              >
                <p className="text-muted-foreground">
                  No results for this category yet.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ── CTA Strip ── */}
      <section className="bg-muted/40 border-t border-border py-12 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-2xl md:text-3xl text-foreground mb-3">
            Ready to Begin Your Transformation?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto text-sm">
            Book a free consultation with our specialists and discover the right
            treatment plan for you.
          </p>
          <Button
            data-ocid="gallery.cta_button"
            className="gradient-accent text-primary-foreground font-semibold px-8 py-2.5 shadow-subtle hover:shadow-elevated transition-smooth"
            onClick={() => navigate({ to: "/contact" })}
          >
            Book a Consultation
          </Button>
        </motion.div>
      </section>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            items={filtered}
            activeIndex={lightboxIndex}
            onClose={closeLightbox}
            onPrev={prevItem}
            onNext={nextItem}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

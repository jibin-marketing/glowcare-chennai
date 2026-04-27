export type GalleryCategory = "skin" | "hair" | "lasers" | "injectables";

export interface GalleryEntry {
  id: string;
  category: GalleryCategory;
  title: string;
  description: string;
}

export const galleryItems: GalleryEntry[] = [
  {
    id: "g1",
    category: "skin",
    title: "Acne Scar Treatment",
    description: "Fractional laser + PRP for acne scarring — 6 sessions",
  },
  {
    id: "g2",
    category: "hair",
    title: "Hair Loss Therapy",
    description: "PRP mesotherapy — visible regrowth in 3 months",
  },
  {
    id: "g3",
    category: "hair",
    title: "Hair Transplant (FUE)",
    description: "2400 grafts — natural hairline restoration",
  },
  {
    id: "g4",
    category: "skin",
    title: "Pigmentation Correction",
    description: "Q-Switch laser — significant brightening over 4 sessions",
  },
  {
    id: "g5",
    category: "lasers",
    title: "Laser Hair Removal",
    description: "Full face diode laser — permanent reduction",
  },
  {
    id: "g6",
    category: "injectables",
    title: "Lip Filler Enhancement",
    description: "Natural volume & definition with hyaluronic acid",
  },
];

export const galleryCategories: {
  key: GalleryCategory | "all";
  label: string;
}[] = [
  { key: "all", label: "All" },
  { key: "skin", label: "Skin" },
  { key: "hair", label: "Hair" },
  { key: "lasers", label: "Lasers" },
  { key: "injectables", label: "Injectables" },
];

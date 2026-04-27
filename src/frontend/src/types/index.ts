export type Service =
  | { HairTreatment: null }
  | { SkinTreatment: null }
  | { HairTransplant: null }
  | { SkinConsultation: null }
  | { HairConsultation: null }
  | { Other: null };

export type AppointmentStatus =
  | { Pending: null }
  | { Confirmed: null }
  | { Cancelled: null };

export interface Appointment {
  id: bigint;
  name: string;
  phone: string;
  email: string;
  service: Service;
  message: string;
  status: AppointmentStatus;
  createdAt: bigint;
}

export interface ServiceItem {
  id: string;
  category:
    | "hair"
    | "skin"
    | "laser"
    | "injectables"
    | "facials"
    | "peels"
    | "microneedling"
    | "pmu";
  title: string;
  shortDesc: string;
  icon: string;
  tag?: string;
}

export interface FullService extends ServiceItem {
  duration: string;
  priceRange: string;
  fullDescription: string;
  benefits: string[];
  procedure: string[];
  recoveryTime: string;
  sessions: string;
  suitableFor: string[];
  aftercare: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  service: string;
  initials: string;
}

export interface GalleryItem {
  id: string;
  category: "skin" | "hair" | "lasers" | "injectables";
  title: string;
  description: string;
  before: string;
  after: string;
}

export type NavLink = {
  label: string;
  href: string;
};

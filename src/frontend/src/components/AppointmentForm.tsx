import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

const serviceOptions: { label: string; value: string }[] = [
  { label: "Skin Treatment", value: "SkinTreatment" },
  { label: "Skin Consultation", value: "SkinConsultation" },
  { label: "Hair Treatment", value: "HairTreatment" },
  { label: "Hair Transplant", value: "HairTransplant" },
  { label: "Hair Consultation", value: "HairConsultation" },
  { label: "Other", value: "Other" },
];

interface FormState {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

const initialForm: FormState = {
  name: "",
  phone: "",
  email: "",
  service: "",
  message: "",
};

export function AppointmentForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const validate = (): boolean => {
    const errs: Partial<FormState> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.phone.trim()) errs.phone = "Phone is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "Invalid email";
    if (!form.service) errs.service = "Please select a service";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (field: keyof FormState, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    try {
      const selectedService = serviceOptions.find(
        (s) => s.value === form.service,
      );
      if (!selectedService) throw new Error("Invalid service");

      // Simulate API call — backend integration pending bindgen
      await new Promise((resolve) => setTimeout(resolve, 800));
      setSubmitted(true);
      setForm(initialForm);
      toast.success("Appointment request sent! We'll confirm shortly.");
    } catch {
      toast.error(
        "Something went wrong. Please try again or call us directly.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div
        className="bg-card rounded-2xl border border-border p-10 flex flex-col items-center text-center shadow-card"
        data-ocid="appointment.success_state"
      >
        <div className="w-16 h-16 rounded-full bg-teal-subtle flex items-center justify-center mb-5 text-3xl">
          ✅
        </div>
        <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
          Request Received!
        </h3>
        <p className="text-muted-foreground mb-6 text-sm leading-relaxed max-w-sm">
          Thank you for choosing Aura Derma. Our team will contact you within 24
          hours to confirm your appointment.
        </p>
        <Button
          onClick={() => setSubmitted(false)}
          variant="outline"
          className="border-primary text-primary-teal hover:bg-teal-subtle"
          data-ocid="appointment.book_another_button"
        >
          Book Another Appointment
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-card rounded-2xl border border-border p-7 shadow-card"
      noValidate
      data-ocid="appointment.form"
    >
      <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
        Request an Appointment
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div className="space-y-1.5">
          <Label
            htmlFor="appt-name"
            className="text-sm font-medium text-foreground"
          >
            Full Name <span className="text-destructive">*</span>
          </Label>
          <Input
            id="appt-name"
            value={form.name}
            onChange={(e) => handleChange("name", e.target.value)}
            placeholder="Lakshmi Ramesh"
            className={errors.name ? "border-destructive" : ""}
            data-ocid="appointment.name_input"
          />
          {errors.name && (
            <p
              className="text-xs text-destructive"
              data-ocid="appointment.name_error"
            >
              {errors.name}
            </p>
          )}
        </div>

        <div className="space-y-1.5">
          <Label
            htmlFor="appt-phone"
            className="text-sm font-medium text-foreground"
          >
            Phone <span className="text-destructive">*</span>
          </Label>
          <Input
            id="appt-phone"
            type="tel"
            value={form.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            placeholder="+91 98765 43210"
            className={errors.phone ? "border-destructive" : ""}
            data-ocid="appointment.phone_input"
          />
          {errors.phone && (
            <p
              className="text-xs text-destructive"
              data-ocid="appointment.phone_error"
            >
              {errors.phone}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-1.5 mb-4">
        <Label
          htmlFor="appt-email"
          className="text-sm font-medium text-foreground"
        >
          Email <span className="text-destructive">*</span>
        </Label>
        <Input
          id="appt-email"
          type="email"
          value={form.email}
          onChange={(e) => handleChange("email", e.target.value)}
          placeholder="you@example.com"
          className={errors.email ? "border-destructive" : ""}
          data-ocid="appointment.email_input"
        />
        {errors.email && (
          <p
            className="text-xs text-destructive"
            data-ocid="appointment.email_error"
          >
            {errors.email}
          </p>
        )}
      </div>

      <div className="space-y-1.5 mb-4">
        <Label
          htmlFor="service-select"
          className="text-sm font-medium text-foreground"
        >
          Service <span className="text-destructive">*</span>
        </Label>
        <Select
          value={form.service}
          onValueChange={(v) => handleChange("service", v)}
        >
          <SelectTrigger
            id="service-select"
            className={errors.service ? "border-destructive" : ""}
            data-ocid="appointment.service_select"
          >
            <SelectValue placeholder="Select a treatment" />
          </SelectTrigger>
          <SelectContent>
            {serviceOptions.map((opt) => (
              <SelectItem key={opt.value} value={opt.value}>
                {opt.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.service && (
          <p
            className="text-xs text-destructive"
            data-ocid="appointment.service_error"
          >
            {errors.service}
          </p>
        )}
      </div>

      <div className="space-y-1.5 mb-6">
        <Label
          htmlFor="appt-message"
          className="text-sm font-medium text-foreground"
        >
          Message / Concerns
        </Label>
        <Textarea
          id="appt-message"
          value={form.message}
          onChange={(e) => handleChange("message", e.target.value)}
          placeholder="Tell us about your concerns or what you're hoping to achieve..."
          rows={4}
          className="resize-none"
          data-ocid="appointment.message_textarea"
        />
      </div>

      <Button
        type="submit"
        disabled={submitting}
        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 h-auto shadow-subtle transition-smooth"
        data-ocid="appointment.submit_button"
      >
        {submitting ? (
          <span
            className="flex items-center gap-2"
            data-ocid="appointment.loading_state"
          >
            <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
            Sending Request...
          </span>
        ) : (
          "Confirm Appointment Request"
        )}
      </Button>

      <p className="text-xs text-muted-foreground text-center mt-4">
        We'll confirm within 24 hours. For urgent queries, call{" "}
        <a
          href="tel:+914412345678"
          className="text-primary-teal hover:underline"
        >
          044 1234 5678
        </a>
        .
      </p>
    </form>
  );
}

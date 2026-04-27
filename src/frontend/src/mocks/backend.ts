import type { backendInterface } from "../backend";
import { AppointmentStatus, Service } from "../backend";

export const mockBackend: backendInterface = {
  getAppointment: async (id) => ({
    id: id,
    service: Service.SkinConsultation,
    status: AppointmentStatus.Confirmed,
    name: "Priya Ramesh",
    createdAt: BigInt(Date.now()),
    email: "priya@example.com",
    message: "Looking for skin brightening treatment",
    phone: "+91 98765 43210",
  }),
  listAppointments: async () => [
    {
      id: BigInt(1),
      service: Service.SkinConsultation,
      status: AppointmentStatus.Confirmed,
      name: "Priya Ramesh",
      createdAt: BigInt(Date.now()),
      email: "priya@example.com",
      message: "Looking for skin brightening treatment",
      phone: "+91 98765 43210",
    },
    {
      id: BigInt(2),
      service: Service.HairTreatment,
      status: AppointmentStatus.Pending,
      name: "Arjun Krishnan",
      createdAt: BigInt(Date.now()),
      email: "arjun@example.com",
      message: "Interested in PRP hair treatment",
      phone: "+91 87654 32109",
    },
  ],
  submitAppointment: async (req) => ({
    id: BigInt(3),
    service: req.service,
    status: AppointmentStatus.Pending,
    name: req.name,
    createdAt: BigInt(Date.now()),
    email: req.email,
    message: req.message,
    phone: req.phone,
  }),
};

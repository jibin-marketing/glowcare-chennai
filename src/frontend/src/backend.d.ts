import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type Timestamp = bigint;
export interface AppointmentRequest {
    service: Service;
    name: string;
    email: string;
    message: string;
    phone: string;
}
export type AppointmentId = bigint;
export interface Appointment {
    id: AppointmentId;
    service: Service;
    status: AppointmentStatus;
    name: string;
    createdAt: Timestamp;
    email: string;
    message: string;
    phone: string;
}
export enum AppointmentStatus {
    Confirmed = "Confirmed",
    Cancelled = "Cancelled",
    Pending = "Pending"
}
export enum Service {
    HairConsultation = "HairConsultation",
    SkinConsultation = "SkinConsultation",
    SkinTreatment = "SkinTreatment",
    Other = "Other",
    HairTransplant = "HairTransplant",
    HairTreatment = "HairTreatment"
}
export interface backendInterface {
    getAppointment(id: AppointmentId): Promise<Appointment | null>;
    listAppointments(): Promise<Array<Appointment>>;
    submitAppointment(req: AppointmentRequest): Promise<Appointment>;
}

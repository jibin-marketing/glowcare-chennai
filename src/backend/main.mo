import List "mo:core/List";
import Types "types/appointments";
import AppointmentsMixin "mixins/appointments-api";

actor {
  let appointments = List.empty<Types.Appointment>();

  include AppointmentsMixin(appointments);
};

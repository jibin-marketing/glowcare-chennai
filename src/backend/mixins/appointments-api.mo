import Debug "mo:core/Debug";
import List "mo:core/List";
import Types "../types/appointments";

mixin (appointments : List.List<Types.Appointment>) {
  public func submitAppointment(req : Types.AppointmentRequest) : async Types.Appointment {
    Debug.todo();
  };

  public query func listAppointments() : async [Types.Appointment] {
    Debug.todo();
  };

  public query func getAppointment(id : Types.AppointmentId) : async ?Types.Appointment {
    Debug.todo();
  };
};

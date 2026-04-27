import Debug "mo:core/Debug";
import List "mo:core/List";
import Types "../types/appointments";

module {
  public type Appointment = Types.Appointment;
  public type AppointmentRequest = Types.AppointmentRequest;
  public type AppointmentId = Types.AppointmentId;

  public func submit(
    appointments : List.List<Appointment>,
    req : AppointmentRequest,
  ) : Appointment {
    Debug.todo();
  };

  public func listAll(appointments : List.List<Appointment>) : [Appointment] {
    Debug.todo();
  };

  public func getById(
    appointments : List.List<Appointment>,
    id : AppointmentId,
  ) : ?Appointment {
    Debug.todo();
  };
};

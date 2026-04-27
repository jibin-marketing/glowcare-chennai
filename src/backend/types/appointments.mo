module {
  public type AppointmentId = Nat;
  public type Timestamp = Int;

  public type Service = {
    #HairTreatment;
    #SkinTreatment;
    #HairTransplant;
    #SkinConsultation;
    #HairConsultation;
    #Other;
  };

  public type AppointmentStatus = {
    #Pending;
    #Confirmed;
    #Cancelled;
  };

  public type Appointment = {
    id : AppointmentId;
    name : Text;
    phone : Text;
    email : Text;
    service : Service;
    message : Text;
    status : AppointmentStatus;
    createdAt : Timestamp;
  };

  public type AppointmentRequest = {
    name : Text;
    phone : Text;
    email : Text;
    service : Service;
    message : Text;
  };
};

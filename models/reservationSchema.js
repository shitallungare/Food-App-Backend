import mongoose from "mongoose";


const reservationSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First name is required"],
  },
  lastName: {
    type: String,
    required: [true, "Last name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    
  },
  phone: {
    type: String,
    required: [true, "Phone number is required"],
    
    
  },
  time: {
    type: String,
    required: [true, "Time is required"],
  },
  date: {
    type: String,
    required: [true, "Date is required"],
  },
});

export const Reservation = mongoose.model("Reservation", reservationSchema);

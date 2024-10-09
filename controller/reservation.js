import ErrorHandler from "../error/error.js";
import {Reservation } from "../models/reservationSchema.js"; 


export const sendReservation = async(req, res, next) => { //funcation data 
    const {firstName, lastName, email, phone, time , date} = req.body; // i want this data from the frontend 
    if(!firstName || !lastName || !email || !phone || !date || !time ){
return next(new ErrorHandler("Please fill full reservation from!", 400));
    }
    try {
        await Reservation.create({firstName, lastName, email, phone, time , date});
        res.status(200),json({
            success: true,
            message: "Reservation sent Sucessfully!"
        })
    } catch (error) {
      if(error.name === "ValidationError"){
        const ValidationError = Object.values(error.errors).map(
         (err) => err.message
        );
        return next (new ErrorHandler(ValidationError.join(" , "), 400)); // join java script menthod reguest 400
        
      }
    }
};
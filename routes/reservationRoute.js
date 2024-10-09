import express from "express";
import {sendReservation} from '../controller/reservation.js';
const router = express.Router();

router.post("/send", sendReservation);

// sendReservation is the function run when 
export default router;
import express from "express";
import cors from "cors";
import dotenv from 'dotenv';
import { dbConnection } from "./database/dbConnection.js";
import { errorMiddleware } from "./error/error.js";
import reservationRoute from "./routes/reservationRoute.js";

// Load environment variables before anything else
dotenv.config({ path: "./config/.env" });

// Initialize database connection
dbConnection();

const app = express();

app.use(cors({
  origin: [process.env.FRONTEND_URL],
  methods: ["POST"], // You can add other methods like GET, PUT, DELETE, etc.
  credentials: true, // lowercase "c" here
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/v1/reservation', reservationRoute);

// Error handling middleware
app.use(errorMiddleware);

export default app;

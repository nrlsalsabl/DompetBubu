import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pool from "./config/database.js";

dotenv.config();

const app = express();

app.get("/api/health", async (_req, res) => {
  try {
    const [rows] = await pool.query("SELECT 1 AS result");

    res.json({
      success: true,
      message: "Dompet Bubu API is running!",
      database: rows,
    });
  } catch (error) {
    console.error("Database connection error:", error);

    res.status(500).json({
      success: false,
      message: "Database connection failed.",
    });
  }
});
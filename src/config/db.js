import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

export const db = await mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Probar conexión (opcional)
try {
  const [rows] = await db.query("SELECT 1");
  console.log("📦 Conexión a MySQL exitosa");
} catch (error) {
  console.error("❌ Error conectando a MySQL:", error);
}

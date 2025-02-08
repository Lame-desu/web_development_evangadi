import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();

export const dbConnection = mysql.createPool({
  host: "localhost",
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  connectionLimit: 10,
});

import { config } from "dotenv";
config();

export const PORT = process.env.PORT || 3000;
export const DB_HOST = process.env.DB_HOST || "jny8l.h.filess.io";
export const DB_USER = process.env.DB_USER || "alquilerautos_personhour";
export const DB_DATABASE =
  process.env.DB_DATABASE || "alquilerautos_personhour";
export const DB_PASSWORD =
  process.env.DB_PASSWORD || "c30d18df4dc41f79731c53d498f32573c4593415";
export const DB_PORT = process.env.DB_PORT || 3307;

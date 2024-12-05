import express from "express";
import morgan from "morgan";
import cors from "cors";

import vehiculosRoutes from "./routes/vehiculos.routes.js";
import usuariosRoutes from "./routes/usuarios.routes.js";
import indexRoutes from "./routes/index.routes.js";

const app = express();

app.use(cors());

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/test", indexRoutes);
app.use("/api", [vehiculosRoutes, usuariosRoutes]);

app.use((req, res, next) => {
  res.status(404).json({ message: "Not found" });
});

export default app;

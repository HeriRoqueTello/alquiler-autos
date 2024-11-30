import express from "express";
import morgan from "morgan";

import vehiculosRoutes from "./routes/vehiculos.routes.js";
import indexRoutes from "./routes/index.routes.js";

const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/test", indexRoutes);
app.use("/api", vehiculosRoutes);

app.use((req, res, next) => {
  res.status(404).json({ message: "Not found" });
});

export default app;

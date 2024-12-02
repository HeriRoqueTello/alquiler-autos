import { pool } from "../db.js";

export const getVehiculos = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM Vehiculo");

    return res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const getVehiculo = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query("SELECT * FROM Vehiculo WHERE id = ?", [
      id,
    ]);

    if (rows.length <= 0) {
      return res.status(404).json({ message: "Vehiculo not found" });
    }

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const deleteVehiculo = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query("DELETE FROM Vehiculo WHERE id = ?", [id]);

    if (rows.affectedRows <= 0) {
      return res.status(404).json({ message: "Vehiculo not found" });
    }

    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const createVehiculo = async (req, res) => {
  try {
    const { marca, modelo, estado } = req.body;
    const [rows] = await pool.query(
      "INSERT INTO Vehiculo (marca, modelo, estado) VALUES (?, ?, ?)",
      [marca, modelo, estado]
    );
    res.status(201).json({ id: rows.insertId, marca, modelo, estado });
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const updateVehiculo = async (req, res) => {
  try {
    const { id } = req.params;
    const { marca, modelo, estado } = req.body;

    const [result] = await pool.query(
      "UPDATE Vehiculo SET marca = IFNULL(?, marca), modelo = IFNULL(?, modelo), estado = IFNULL(?, estado) WHERE Vehiculo.id = ?",
      [marca, modelo, estado, id]
    );

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Vehiculo not found" });

    const [rows] = await pool.query("SELECT * FROM Vehiculo WHERE id = ?", [
      id,
    ]);

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

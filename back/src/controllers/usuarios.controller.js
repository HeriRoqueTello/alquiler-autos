import { pool } from "../db.js";

export const getUsuarios = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM Usuario");

    return res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const getUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query("SELECT * FROM Usuario WHERE id = ?", [id]);

    if (rows.length <= 0) {
      return res.status(404).json({ message: "Usuario not found" });
    }

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const deleteUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query("DELETE FROM Usuario WHERE id = ?", [id]);

    if (rows.affectedRows <= 0) {
      return res.status(404).json({ message: "Usuario not found" });
    }

    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const createUsuario = async (req, res) => {
  try {
    const { nombre, email, password, rol } = req.body;
    const [rows] = await pool.query(
      "INSERT INTO Usuario (nombre, email, password, rol) VALUES (?, ?, ?)",
      [nombre, email, password, rol]
    );
    res.status(201).json({ id: rows.insertId, nombre, email, password, rol });
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const updateUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, email, password, rol } = req.body;

    const [result] = await pool.query(
      "UPDATE Usuario SET nombre = IFNULL(?, nombre), email = IFNULL(?, email), password = IFNULL(?, password), rol = (?, rol) WHERE Usuario.id = ?",
      [nombre, email, password, rol, id]
    );

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Usuario not found" });

    const [rows] = await pool.query("SELECT * FROM Usuario WHERE id = ?", [id]);

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

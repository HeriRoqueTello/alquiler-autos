import { Request, RequestHandler, Response } from 'express';
import jwt from 'jsonwebtoken';
import { User } from '../models/Usuario';

export const getUsers = async (req: Request, res: Response) => {

  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createUser = async (req: Request, res: Response) => {

  const { email } = req.body;

  try {

    const user = await User.findOne({ email });
    if (user) {
      res.status(400).json({ message: 'Este correo ya esta utilizado' });
      return;
    }

    const newUser = new User(req.body);
    const savedUser = await newUser.save();
    console.log(savedUser)
    const token = jwt.sign({ id: savedUser._id, nombre: savedUser.nombre, email: savedUser.email, telefono: savedUser.telefono, rol: savedUser.rol }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ message: 'Registro de usuario exitoso', token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


const JWT_SECRET = process.env.JWT_SECRET;

export const loginUser: RequestHandler = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      res.status(400).json({ message: 'Usuario no encontrado' });
      return;
    }

    const isMatch = await user.compararPassword(password);
    if (!isMatch) {
      res.status(400).json({ message: 'Contraseña incorrecta' });
      return;
    }

    // Generar el token JWT
    const token = jwt.sign({ id: user._id, nombre: user.nombre, email: user.email, telefono: user.telefono, rol: user.rol }, JWT_SECRET, { expiresIn: '1h' });

    res.json({ message: 'Inicio de sesión exitoso', token });
  } catch (err) {
    res.status(500).json({ message: 'Error del servidor' });
  }
}


export const getUserById = async (req: Request, res: Response) => {

  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export const updateUser = async (req: Request, res: Response) => {

  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });

    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export const updateRole = async (req: Request, res: Response) => {



  try {



    const updatedUser = await User.findByIdAndUpdate(req.params.id, { rol: req.body.rol }, { new: true });

    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export const deleteUser = async (req: Request, res: Response) => {

  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: 'Usuario eliminado' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export const getUsersByRole = async (req: Request, res: Response) => {

  try {
    const users = await User.find({ rol: req.params.rol });
    console.log(users);
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
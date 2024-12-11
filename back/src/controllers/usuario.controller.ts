import { Request, RequestHandler, Response } from 'express';
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

  try {
    const newUser = new User(req.body);
    const savedUser = await newUser.save();
    res.json(savedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

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

    res.json({ message: 'Inicio de sesión exitoso' });
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
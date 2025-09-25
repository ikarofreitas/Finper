import * as userService from "../services/userService.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export async function register(req, res) {
    try {
        const user = await userService.createUser(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export async function login(req, res) {
    try {
        const { email, password } = req.body;
        const user = await userService.findUserByEmail(email);

        if (!user) return res.status(401).json({ message: "Usuário não encontrado" });

        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) return res.status(401).json({ message: "Senha inválida" });

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "1d" });
        res.json({
            token,
            user: {
                id: user.id,
                name: user.name,
                email: user.email
            }
        });
    } catch (error) {
        console.error('Erro no login:', error);
        res.status(500).json({ message: "Erro interno" });
    }
}

export async function getAllUsers(req, res) {
    try {
        const users = await userService.getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export async function deleteUser(req, res) {
    try {
        const id = req.params.id
        await userService.deleteUser(id);
        res.status(200).json({
            message: 'usuário deletado com sucesso'
        })
    }catch(error) {
        res.status(500).json({ message: error.message });
    }

}

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
        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: "Erro interno" });
    }
}

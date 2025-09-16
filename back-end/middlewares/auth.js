import jwt from "jsonwebtoken";

export function authenticate(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ message: "Token ausente" });

    const [, token] = authHeader.split(" ");
    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        req.user = { id: payload.id };
        next();
    } catch {
        return res.status(401).json({ message: "Token inválido" });
    }
}

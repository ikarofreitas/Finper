import bcrypt from "bcrypt";
import { prisma } from "../lib/prisma.js";

export async function createUser(data) {
    const existingUser = await prisma.user.findUnique({ where: { email: data.email } });
    if (existingUser) throw new Error("E-mail já cadastrado");

    const hashedPassword = await bcrypt.hash(data.password, 10);
    return prisma.user.create({
        data: {
            name: data.fullname,   // mapear fullname para name
            email: data.email,
            password: hashedPassword,
        },
    });
}

export async function findUserByEmail(email) {
    return prisma.user.findUnique({ where: { email } });
}


export async function getAllUsers(){
    return await prisma.user.findMany();
}

export async function deleteUser(id) {
    return await prisma.user.delete({
        where: { id }
    });
}
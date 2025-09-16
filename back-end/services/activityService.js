import { prisma } from "../lib/prisma.js";

export async function createActivity(userId, data) {
    return prisma.activity.create({
        data: {
            title: data.title,
            amount: data.amount,
            type: data.type,
            date: new Date(data.date),
            userId,
        },
    });
}

export async function listActivities(userId) {
    return prisma.activity.findMany({ where: { userId } });
}

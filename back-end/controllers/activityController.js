import * as activityService from "../services/activityService.js";

export async function create(req, res) {
    try {
        const userId = req.user.id;
        const activity = await activityService.createActivity(userId, req.body);
        res.status(201).json(activity);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export async function list(req, res) {
    try {
        const userId = req.user.id;
        const activities = await activityService.listActivities(userId);
        res.json(activities);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

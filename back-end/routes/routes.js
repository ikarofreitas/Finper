import express from "express";
import * as userController from "../controllers/userController.js";
import * as activityController from "../controllers/activityController.js";
import { authenticate } from "../middlewares/auth.js";

const router = express.Router();

router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/users", userController.getAllUsers);
router.delete("/users/:id", userController.deleteUser);

router.get("/activities", authenticate, activityController.list);
router.post("/activities", authenticate, activityController.create);

export default router;

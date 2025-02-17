import { Router } from "express";
import UserController from "../controller/userController.js";

const router = Router();

router.get("/getUser/:id", UserController.getUser);
router.post("/getUsers", UserController.getUsers);

export default router;
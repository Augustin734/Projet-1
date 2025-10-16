import express from "express";
import { createUser, deleteUser, getAllUser, getUser, updateUser } from "../Controllers/userController.js";

const router = express.Router();

router.get ("/user", getAllUser);
router.get ("/user/:id", getUser);
router.post ("/user", createUser);
router.put ("/user/:id", updateUser);
router.delete ("/user/:id", deleteUser);

export default router ;
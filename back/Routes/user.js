import express from "express ";
import { createUser, deleteuser, getalluser, getuser, updateuser } from "../Controllers/userController.js";

const router = express.Router();

router.get ("/user", getalluser);
router.get ("/user/:id", getuser);
router.post ("/user", createUser);
router.put ("/user/:id", updateuser);
router.delete ("/user/:id", deleteuser);

export default router ;
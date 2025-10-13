import express from "express ";
import { createUser, deleteUser, getAllUser, getUser, updateUser } from "../Controllers/userController.js";
import validationUser from "../middleware/Validator.js";

const router = express.Router();

router.get ("/user", getAllUser);
router.get ("/user/:id", getUser);
router.post ("/user", validationUser, createUser);
router.put ("/user/:id",validationUser, updateUser);
router.delete ("/user/:id", deleteUser);

export default router ;
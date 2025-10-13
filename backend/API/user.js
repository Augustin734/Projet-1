import express from "express ";
import {createUser, getAllUser, getUserById, updateUser, deleteUser} from "../controllers/useController.js"
import validationUser from "../../back/middleware/Validator.js";

const router = express.Router();


router.post ("./user",validationUser, createUser);
router.get ("./user", getAllUser);
router.get ("./user/:id", getUserById);
router.put ("./user/:id", validationUser, updateUser);
router.delete ("./user/:id", deleteUser);

export default router ;
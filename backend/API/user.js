import express from "express ";
import {createUser, getAllUser, getUserById, updateUser, deleteUser} from "../controllers/useController.js"

const router = express.router();


router.post ("./user", createUser);
router.get ("./user", getAllUser);
router.get ("./user/:id", getUserById);
router.put ("./user/:id", updateUser);
router.delete ("./user/:id", deleteUser);

export default router ;
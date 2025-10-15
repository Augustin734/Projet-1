import express from "express";
import validationUser from "../Validator/employeurValidate.js";
import { createEmployeur, deleteEmployeur, getAllEmployeur, getEmployeur, updateEmployeur } from "../Controllers/employeurController.js";

const router = express.Router();

router.get ("/employeur", getAllEmployeur);
router.get ("/employeur/:id", getEmployeur);
router.post ("/employeur", validationUser, createEmployeur);
router.put ("/employeur/:id", validationUser, updateEmployeur);
router.delete ("/employeur/:id", deleteEmployeur);

export default router ;
import express from "express";
import validationEmployeur from "../Validator/employeurValidate.js";
import { createEmployeur, deleteEmployeur, getAllEmployeur, getEmployeur, updateEmployeur } from "../Controllers/employeurController.js";

const router = express.Router();

router.get ("/employeur", getAllEmployeur);
router.get ("/employeur/:id", getEmployeur);
router.post ("/employeur", validationEmployeur, createEmployeur);
router.put ("/employeur/:id", validationEmployeur, updateEmployeur);
router.delete ("/employeur/:id", deleteEmployeur);

export default router ;
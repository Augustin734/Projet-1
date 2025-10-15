import express from "express";
import validationUser from "../Validator/candidatureValidate.js";
import { createCandidature, deleteCandidature, getAllCandidature, getCandidature, updateCandidature } from "../Controllers/candidatureController.js";

const router = express.Router();

router.get ("/candidature", getAllCandidature);
router.get ("/candidature/:id", getEmployeur);
router.post ("/candidature", validationUser, createCandidature);
router.put ("/candidature/:id", validationUser, updateCandidature);
router.delete ("/candidature/:id", deleteCandidature);

export default router ;
import express from "express";
import validationUser from "../Validator/ApplicationsValidate.js";
import { createApplications, deleteApplications, getAllApplications, getApplications, updateApplications } from "../Controllers/ApplicationsController.js";

const router = express.Router();

router.get ("/Applications", getAllApplications);
router.get ("/Applications/:id", getEmployeur);
router.post ("/Applications", validationUser, createApplications);
router.put ("/Applications/:id", validationUser, updateApplications);
router.delete ("/Applications/:id", deleteApplications);

export default router ;
import express from "express";
import validationCompanies from "../Validator/CompaniesValidate.js";
import { createCompanies, deleteCompanies, getAllCompanies, getCompanies, updateCompanies } from "../Controllers/CompaniesController.js";

const router = express.Router();

router.get ("/Companies", getAllCompanies);
router.get ("/Companies/:id", getCompanies);
router.post ("/Companies", validationCompanies, createCompanies);
router.put ("/Companies/:id", validationCompanies, updateCompanies);
router.delete ("/Companies/:id", deleteCompanies);

export default router ;
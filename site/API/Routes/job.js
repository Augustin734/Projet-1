import express from "express";
import validationJob from "../Validator/JobValidate.js";
import { createJob, deleteJob, getAllJob, getJob, updateJob } from "../Controllers/JobController.js";

const router = express.Router();

router.get ("/job", getAllJob);
router.get ("/job/:ville", getJob);
router.get ("/job/:secteur_activité", getJob);
router.post ("/job", validationJob, createJob);
router.put ("/job/:id", validationJob, updateJob);
router.delete ("/job/:id", deleteJob);

export default router ;
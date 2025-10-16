import express from "express";
import validationPeople from "../Validator/PeopleValidate.js";
import { createPeople, deletePeople, getAllPeople, getPeople, updatePeople } from "../Controllers/PeopleController.js";

const router = express.Router();

router.get ("/People", getAllPeople);
router.get ("/People/:id", getPeople);
router.post ("/People", createPeople);
router.put ("/People/:id", validationPeople, updatePeople);
router.delete ("/People/:id", deletePeople);

export default router ;
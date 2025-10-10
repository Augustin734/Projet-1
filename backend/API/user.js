import express from "express ";

const router = express.router();


router.post ("./user", createuser);
router.get ("./user", getalluser);
router.get ("./user/:id", getuserbyid);
router.put ("./user/:id", updateuser);
router.delete ("./user/:id", deleteuser);

export default router ;
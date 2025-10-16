import express from "express";
import validationAdvertisements from "../Validator/AdvertisementsValidate.js";
import { createAdvertisements, deleteAdvertisements, getAllAdvertisements, updateAdvertisements, getAdvertisementsByCity, getAdvertisementsByBusinessSector } from "../Controllers/AdvertisementsController.js";

const router = express.Router();

router.get ("/Advertisements", getAllAdvertisements);
router.get ("/Advertisements/:city", getAdvertisementsByCity);
router.get ("/Advertisements/:business_sector", getAdvertisementsByBusinessSector);
router.post ("/Advertisements", validationAdvertisements, createAdvertisements);
router.put ("/Advertisements/:id", validationAdvertisements, updateAdvertisements);
router.delete ("/Advertisements/:id", deleteAdvertisements);

export default router ;
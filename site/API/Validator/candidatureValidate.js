import Joi from "Joi";

export const candidatureSchema = Joi.object({
    nom: Joi.string().required(),
    lettre_motivation: Joi.string().required(),
    date_de_postulation: Joi.date().required(),
    status_candidature: Joi.string().required(),
    //status_candidature: Joi.string().valid("acceptée", "refusée", "en attente").required(),
});
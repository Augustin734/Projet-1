
import Joi from "joi";

const EmployeurSchema = Joi.object({
    nom: Joi.string().min(3).required(),
    Siret: Joi.string().min(3).required(),
    mail: Joi.string().email().required(),
    site_web: Joi.string().uri().optional(),
    secteur_activité: Joi.string().min(3).required(),
    siège_social: Joi.string().min(3).required(),
    descriptif: Joi.string().min(3).required(),

    password: Joi.string()
        .min(8)
        .pattern(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[^a-zA-Z0-9]).+$"))
        .required()
        .messages({
            "string.pattern.base": "Le mot de passe doit contenir au moins une majuscule, une minuscule, un chiffre et un caractère spécial.",
            "string.min": "Le mot de passe doit contenir au moins 8 caractères.",
            "any.required": "Le mot de passe est requis."
        })
});

const validationEmployeur =(req, res, next) => {
    const {error} = EmployeurSchema.validate(req.body,{abortEarly: false});
    if (error) return res.status(400).json({
        status: 400 ,
        message: error.details.map(e => e.message)
    });
    next()
};

export default validationEmployeur;
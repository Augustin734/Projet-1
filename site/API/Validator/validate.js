import Joi from "joi";

const userSchema = Joi.object({
    prénom: Joi.string().min(3).required(),
    nom: Joi.string().min(3).required(),
    mail: Joi.string().email().required(),
    phone_number: Joi.string().pattern(/^\d{10}$/).required(),
    adresse: Joi.string().min(3).required(),
    ville: Joi.string().min(3).required(),
    prétention_salariale: Joi.number().precision(2).min(5).max(1000000).required(),

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

const validationUser =(req, res, next) => {
    const {error} = userSchema.validate(req.body);
    if (error) return res.status(400).json({
        status: 400 ,
        message: error.details[0].message
    });
    next()
};

export default validationUser;
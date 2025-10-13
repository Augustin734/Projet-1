import Joi from "joi";

const userSchema = Joi.object({
    prénom : Joi.string().min(3).required(),
    nom : Joi.string().min(3).required(),
    email : Joi.string().min(3).email().required(),
    phone_number: Joi.string().pattern(/^\d{10}$/).required(),
    addresse : Joi.string().min(3).required(),
    ville : Joi.string().min(3).required(),
    pretention_salarial: Joi.number().precision(2).min(5).max(1000000).required()

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
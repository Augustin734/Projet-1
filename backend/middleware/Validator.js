import Joi from "joi";

const userSchema = Joi.object({
    fisrtname : Joi.string().min(3).required(),
    name : Joi.string().min(3).required(),
    email : Joi.string().min(3).email().required(),
    phone_number: Joi.string().pattern(/^\d{10}$/).required(),
    address : Joi.string().min(3).required(),
    city : Joi.string().min(3).required(),
    salary_claim: Joi.number().precision(2).min(5).max(1000000).required()

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
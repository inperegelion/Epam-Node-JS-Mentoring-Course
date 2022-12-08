import Joi from 'joi';
import { createValidator } from 'express-joi-validation';

const joiValidator = createValidator();

const passwordRegExp = new RegExp(/^(?=.*?\d)(?=.*?[a-zA-Z])[a-zA-Z\d]+$/);

const passwordSchema = Joi.string()
    .required()
    .pattern(passwordRegExp)
    .message(
        'Password should contain both numbers and letters and be longer then 1 symbol'
    );

const ageSchema = Joi.number().min(4).max(130);

const createUserSchema = Joi.object({
    login: Joi.string().required(),
    password: passwordSchema,
    age: ageSchema,
});

const updateUserSchema = Joi.object({
    login: Joi.string(),
    password: passwordSchema,
    age: ageSchema,
});

const validator = {
    createUser: joiValidator.body(createUserSchema),
    updateUser: joiValidator.body(updateUserSchema),
};

export default validator;

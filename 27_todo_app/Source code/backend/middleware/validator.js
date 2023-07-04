import {check} from "express-validator"

export const registerRules = [
    check('name', 'Name is required').notEmpty().trim().escape(),
    check('email', 'Email is not valid').isEmail().normalizeEmail(),
    check('password', 'Password should be 8 or more characters').isLength({min: 8})
]

export const loginRules = [
    check('email', 'Email is not valid').isEmail().normalizeEmail(),
    check('password', 'Password should be 8 or more characters').isLength({min: 8})
]

export const updateUserRules = [
    check('name', 'Name is required').notEmpty().trim().escape(),
]

export const updatePasswordRules = [
    check('password', 'Password should be 8 or more characters').isLength({min: 8}),
    check('newPassword', 'Password should be 8 or more characters').isLength({min: 8})
]

export const createTodoRules = [
    check('title', 'Title is required').notEmpty().trim().escape(),
]

export const updateTodoRules = [
    check('title', 'Title is required').notEmpty().trim().escape(),
    check('completed', 'Completed is required').notEmpty().trim().escape().isBoolean()
]
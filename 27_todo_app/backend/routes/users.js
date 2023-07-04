import express from "express";
import {
    register,
    login,
    logout,
    getMe,
    updateUser,
    updatePassword,
    deleteUser
} from '../controllers/usersController.js'
import authorize from "../middleware/authorize.js";
import {validateResult} from "../middleware/validationResults.js";
import {loginRules, registerRules, updateUserRules, updatePasswordRules} from "../middleware/validator.js";

const router = express.Router();

router.post('/register', registerRules, validateResult, register);

router.post('/login', loginRules, validateResult, login);

router.get('/logout', authorize, logout);

router.get('/me', authorize, getMe);

router.put('/updateUser', authorize, updateUserRules, validateResult, updateUser);

router.put('/updatePassword', authorize, updatePasswordRules, validateResult, updatePassword);

router.delete('/delete', authorize, deleteUser);

export default router;
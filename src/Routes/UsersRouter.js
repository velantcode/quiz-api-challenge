import express from 'express';
import { validateToken } from '../middleware';
import { changeUserPassword, getUserData, updateUserData } from '../Controllers/UsersController';

const UsersRoute = express.Router();

// ===================================================================================

UsersRoute.route('/').get(validateToken, getUserData).put(validateToken, updateUserData);
UsersRoute.put('/change-password', validateToken, changeUserPassword);

// ===================================================================================

export default UsersRoute;

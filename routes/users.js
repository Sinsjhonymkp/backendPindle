// Создаём роут для запросов пользователей 
const usersRouter = require('express').Router();

const { checkAuth } = require('../middlewares/auth');
const { findAllUsers, createUser, findUserById, updateUser, deleteUser, hashPassword, checkEmptyNameAndEmail, checkIsUserExists, checkEmptyNameAndEmailAndPassword } = require('../middlewares/users');
const { sendAllUsers, sendMe, sendUserCreated, sendUsersById, sendUserUpdated, sendUserDeleted } = require('../controllers/users');
const { hash } = require('bcryptjs');

// Обрабатываем GET-запрос с роутом '/users'
usersRouter.get('/users', findAllUsers, sendAllUsers);
usersRouter.post(
    "/users",
    findAllUsers,
    checkIsUserExists,
    checkEmptyNameAndEmailAndPassword,
    checkAuth,
    hashPassword,
    createUser,
    sendUserCreated

);
usersRouter.get("/users/:id", findUserById, sendUsersById);


usersRouter.put(
    "/users/:id",
    checkEmptyNameAndEmail,
    checkAuth,
    updateUser,
    sendUserUpdated
);
usersRouter.delete(
    "/users/:id",
    checkAuth,
    deleteUser,
    sendUserDeleted
);
usersRouter.get("/me",
    checkAuth,
    sendMe);
// Экспортируем роут для использования в приложении — app.js
module.exports = usersRouter; 
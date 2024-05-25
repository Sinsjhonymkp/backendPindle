// Создаём роут для запросов категорий 
const categoriesRouter = require('express').Router();
const { checkAuth } = require('../middlewares/auth');
const { findAllCategories, createCategory, findCategoryById, checkIsCategoryExists, checkEmptyName, updateCategory, deleteCategory } = require('../middlewares/categories');
const { sendAllCategories, sendCategoryCreated, sendCategoryById, sendCategoryUpdated, sendCategoryDeleted } = require('../controllers/categories');

// Обрабатываем GET-запрос с роутом '/categories'
categoriesRouter.get('/categories', findAllCategories, sendAllCategories);
categoriesRouter.post(
    "/categories",
    findAllCategories,
    checkIsCategoryExists,
    checkEmptyName,
    checkAuth,
    createCategory,
    sendCategoryCreated
);


categoriesRouter.get("/categories/:id", findCategoryById, sendCategoryById);


categoriesRouter.put(
    "/categories/:id", // Слушаем запросы по эндпоинту
    checkEmptyName,
    checkAuth,
    updateCategory,
    sendCategoryUpdated
);
categoriesRouter.delete(
    "/categories/:id",
    checkAuth,
    deleteCategory,
    sendCategoryDeleted
);
// Экспортируем роут для использования в приложении — app.js
module.exports = categoriesRouter; 
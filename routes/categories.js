// Создаём роут для запросов категорий 
const categoriesRouter = require('express').Router();

// Импортируем вспомогательные функции
const { findAllCategories, createCategory, findCategoryById, checkIsCategoryExists, checkEmptyName, updateCategory, deleteCategory } = require('../middlewares/categories');
const { sendAllCategories, sendCategoryCreated, sendCategoryById, sendCategoryUpdated, sendCategoryDeleted } = require('../controllers/categories');

// Обрабатываем GET-запрос с роутом '/categories'
categoriesRouter.get('/categories', findAllCategories, sendAllCategories);
categoriesRouter.post(
    "/categories",
    findAllCategories,
    checkIsCategoryExists,
    checkEmptyName,
    createCategory,
    sendCategoryCreated
);


categoriesRouter.get("/categories/:id", findCategoryById, sendCategoryById);


categoriesRouter.put(
    "/categories/:id", // Слушаем запросы по эндпоинту
    checkEmptyName,
    updateCategory,
    sendCategoryUpdated
);
categoriesRouter.delete("/categories/:id", deleteCategory, sendCategoryDeleted);
// Экспортируем роут для использования в приложении — app.js
module.exports = categoriesRouter; 
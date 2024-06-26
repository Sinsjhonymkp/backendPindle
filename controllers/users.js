const sendAllUsers = (req, res) => {
    // Установим заголовок ответа в формате JSON
    res.setHeader('Content-Type', 'application/json');
    // Отправим данные в виде JSON-объекта, 
    // которые подготовим в миддлваре findAllUsers
    res.end(JSON.stringify(req.usersArray));
};

const sendUserCreated = (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(req.user));
};
const sendUsersById = (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(req.user));
};
const sendUserUpdated = (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).send(JSON.stringify({ message: "Игра обновлена" }));
};
const sendUserDeleted = (req, res) => {
    // Объект игры отправляем в формате JSON 
    res.setHeader("Content-Type", "application/json");
    // Отправляем на клиент найденный и удалённый элемент из базы данных
    res.end(JSON.stringify(req.users));
};

const sendMe = (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(req.user));
};
// Экспортируем контроллер
module.exports = { sendAllUsers, sendMe, sendUserCreated, sendUsersById, sendUserUpdated, sendUserDeleted };
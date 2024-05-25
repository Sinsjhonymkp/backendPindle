const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const apiRouter = require('./routes/apiRouter');
const usersRouter = require('./routes/users');
const gamesRouter = require('./routes/games');
const categoriesRouter = require('./routes/categories');

const connectToDatabase = require('./database/connect');
const cors = require('./middlewares/cors');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = 3005;

connectToDatabase();

app.use(
    cors,
    cookieParser(),
    bodyParser.json(),
    apiRouter,
    express.static(path.join(__dirname, 'public')),

);

app.listen(PORT);

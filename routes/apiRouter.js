const usersRouter = require("./users");
const gamesRouter = require("./games")
const categoriesRouter = require("./categories");
const authRouter = require("./auth");

const apiRouter = require('express').Router();
apiRouter.use("/api", authRouter);
apiRouter.use("/api", gamesRouter);
apiRouter.use("/api", usersRouter);
apiRouter.use("/api", categoriesRouter);


module.exports = apiRouter;
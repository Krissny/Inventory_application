const { Router } = require("express");
const indexRouter = Router();
const indexController = require("../controller/indexController");

indexRouter.get("/", indexController.firstload);
indexRouter.get("/:Genre", indexController.getShojo);

module.exports = indexRouter;

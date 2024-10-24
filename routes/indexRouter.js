const { Router } = require("express");
const indexRouter = Router();
const indexController = require("../controller/indexController");

indexRouter.get("/", indexController.firstload);
indexRouter.get("/new", indexController.getForm);
indexRouter.post("/add", indexController.addManga);
indexRouter.post("/delete/:bookid", indexController.deleteManga);
indexRouter.get("/:Genre", indexController.getShojo);

module.exports = indexRouter;

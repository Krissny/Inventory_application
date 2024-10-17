const express = require("express");
const app = express();
require("dotenv").config();

const indexRouter = require("./routes/indexRouter");

const path = require("node:path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));
app.use("/", indexRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});

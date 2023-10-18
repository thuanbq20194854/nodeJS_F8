const path = require("path");

const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars");

const route = require("./routes");
const db = require("./config/db");

//connect to db

db.connect();

// Register `hbs.engine` with the Express app.

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

// HTTP Logger
app.use(morgan("combined"));

//Template engine

app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", "./views");
app.set("views", path.join(__dirname, "resources", "views"));

route(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

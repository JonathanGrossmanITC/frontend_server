// Express setup
const express = require("express");
let cors = require("cors");

const bodyParser = require("body-parser");
let path = require("path");

const database = require("./database.js");

const port = 3000;
const app = express();

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname)));
app.use("/styles", express.static(__dirname));

// Express Routes
app.get("/", (req, res) => {
  try {
    // Get all users from Mongo
    res.send("Hello ITC");
  } catch (err) {
    res.send(
      `We have error: ${err.stack}. Sorry. We appreciate your patience while we work this out.`
    );
  }
});

app.get("/get-dates", (req, res) => {
  try {
    // Get all users from Mongo
    database.getAllDates().then((dates) => {
      res.send(dates);
    });
  } catch (err) {
    res.send(
      `We have error: ${err.stack}. Sorry. We appreciate your patience while we work this out.`
    );
  }
});

app.post("/add-date", (req, res) => {
  try {
    const insertedId = database.addDate(req.body);
    res.send(insertedId);
  } catch (err) {
    res.send(
      `We have error: ${err.stack}. Sorry. We appreciate your patience while we work this out.`
    );
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

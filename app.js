const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.render("home");
});

app.get("/about", function (req, res) {
  res.render("about");
});

app.get("/contact", function (req, res) {
  res.render("contact");
});

app.get("/work", function (req, res) {
  res.render("work");
});

app.get("/game", function (req, res) {
  res.render("game");
});

app.get("/ani", function (req, res) {
  res.render("ani");
});

app.get("/code", function (req, res) {
  res.render("code");
});

app.listen(3000, function () {
  console.log(`Server on port 3000`);
});

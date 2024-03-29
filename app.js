//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

var app = express();

app.use(express.static("public"));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/signup.html");
});

app.listen(3000, function() {
  console.log("Server is running on port 3000");
});

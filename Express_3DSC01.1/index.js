const express = require("express");
const app = express();

const PORT = 3300;

app.use("/public", express.static(__dirname + "/public"));
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/src/views/index.html");
  //res.send(__dirname);
});
app.get("/sobre", function (req, res) {
  res.sendFile(__dirname + "/src/views/about.html");
});

app.get("/404", function (req, res) {
  res.sendFile(__dirname + "/src/views/404.html");
});

app.get("/contato", function (req, res) {
  res.sendFile(__dirname + "/src/views/contato.html");
});

app.listen(PORT, () => {
  console.log("running...");
});

const path = require("path");

const express = require("express");

const proxy = require("../src/setupProxy");

const app = express();

app.use(express.static(path.join(__dirname, "../build")));
proxy(app);
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

app.listen(process.env.PORT || 5000);

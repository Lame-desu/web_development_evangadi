const express = require("express");
const fs = require("fs");

let app = express();

app.listen(7777, (log) => {
  console.log("listening");
});

app.get("/", (req, res) => {
  let path = __dirname + "/index.html";
  fs.readFile(path, (err, data) => {
    if (err) {
      res.writeHead(404);
    } else {
      res.writeHead(200, { "content-type": "text/html" });
      res.end(data);
    }
  });
});

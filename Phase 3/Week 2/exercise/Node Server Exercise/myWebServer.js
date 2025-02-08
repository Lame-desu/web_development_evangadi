let fs = require("fs");
let http = require("http");
let module1 = require("./randomNumber");
let url = require("url");
let randomNum = module1.random();

// let server = http.createServer((req, res) => {
//   res.end(randomNum.toString());
// });

// server.listen(1234, () => {
//   console.log("server running");
// });

//Question number 6 - 8d
// let server = http.createServer((req, res) => {
//   var mainPath = __dirname;
//   var filePath = mainPath + "/static/apple/about.html";

//   fs.readFile(filePath, (err, data) => {
//     if (err) {
//       res.writeHead(404);
//       res.end();
//     } else {
//       res.writeHead(200, { "content-type": "text/html" });
//       res.end(data);
//     }
//   });
// });

// server.listen(1234, () => {
//   console.log("server running");
// });

//Questioin number 8 e
let mimeType = require("mime-types").lookup;
let server = http.createServer((req, res) => {
  var mainPath = __dirname;

  var parsed = url.parse(req.url);
  var file = parsed.path;
  var filePath = mainPath + "/static/apple" + file;

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end();
    } else {
      var mime = mimeType(filePath);
      res.writeHead(200, { "content-type": mime });
      res.end(data);
    }
  });
});

server.listen(1234, () => {
  console.log("server running");
});

//
//
//
//
//
//
//
//
//
//

//Using express

// var path = require("path");
// var express = require("express");
// var randomNumber = require("./randomNumber");

// app = express();
// var random = randomNumber.random();
// var mainPath = __dirname;

// app.listen(1234, () => {
//   console.log("server is listening through port 1234");
// });

// app.use(express.static(mainPath + "/static/apple"));

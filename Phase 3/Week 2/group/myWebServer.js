// Using Express (uncomment it and comment out the http method)

// let express = require("express");
// let app = express();

// let path = __dirname + "/static/apple";

// app.use(express.static(path));

// app.listen(1234, () => {
//   console.log("server is listening");
// });

// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .

// Using HTTP

let mimeType = require("mime-types").lookup;
let http = require("http");
let url = require("url");
let fs = require("fs");

let server = http.createServer((req, res) => {
  let parsed = url.parse(req.url);
  let file = parsed.path;
  let mainPath = __dirname;

  let filePath = mainPath + "/static/apple" + file;

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end();
    } else {
      let mime = mimeType(filePath);
      console.log(mime);
      res.writeHead(200, { "content-type": mime });
      res.end(data);
    }
  });
});
server.listen(1234, () => {
  console.log("server is running");
});

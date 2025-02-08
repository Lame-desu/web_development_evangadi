let http = require("http");
let url = require("url");
let fs = require("fs");
let mimeType = require("mime-types").lookup;

let server = http.createServer((req, res) => {
  let parsed = url.parse(req.url);
  let path = parsed.path;

  if (path == "/index.html") {
    let dirPath = __dirname;
    let htmlPath = dirPath + path;

    fs.readFile(htmlPath, (err, content) => {
      if (err) {
        res.writeHead(404);
        res.end();
      } else {
        res.writeHead(200, { "content-type": "text/html" });
        res.end(content);
      }
    });
  } else {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello user!");
  }
});

server.listen(8080, () => {
  console.log("port 8080 is listening");
});

let http = require("http");
let url = require("url");
let fs = require("fs");
let mimeType = require("mime-types").lookup;

let server = http.createServer((req, res) => {
  let parsed = url.parse(req.url);
  let path = parsed.path;

  let dirPath = __dirname;
  let filePath;
  if (path !== "/lame") {
    if (path == "/") {
      filePath = dirPath + "/index.html";
    } else {
      filePath = dirPath + path;
    }

    let meme = mimeType(filePath);

    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(404);
      } else {
        res.writeHead(200, { "content-type": meme });
        res.end(data);
      }
    });
  } else {
    res.writeHead(404, { "content-type": "text/plain" });
    res.end("File not found");
  }
});

server.listen(8080, () => {
  console.log("SERVER IS LISTENING");
});

//     fs.readFile(htmlPath, (err, content) => {
//       if (err) {
//         res.writeHead(404);
//         res.end();
//       } else {
//         res.writeHead(200, { "content-type": "text/html" });
//         res.end(content);
//       }
//     });
//   } else {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.end("Hello user!");
//   }
// });

// server.listen(8080, () => {
//   console.log("port 8080 is listening");
// });

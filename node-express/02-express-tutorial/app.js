const http = require("http");
const { readFileSync } = require("fs");
const homePage = readFileSync("./navbar-app/index.html");
const homeStyles = readFileSync("./navbar-app/styles.css");
const homeImage = readFileSync("./navbar-app/logo.svg");
const homeLogic = readFileSync("./navbar-app/browser-app.js");
// console.log(homePage);
// const server = http.createServer((req, res) => {
//   console.log("user hit the server");
//   res.end("Good Job!");// end() method is MUST for all responses.
// });

// const server = http.createServer((req, res) => {
//   // console.log("user hit the server");
//   res.writeHead(200, { "content-type": "text/html" });
//   //   res.writeHead(200, { "content-type": "text/plain" });
//   res.write("<h1>Hello World</h1>");
//   res.end(); // end() method is MUST for all responses.
// });

// const server = http.createServer((req, res) => {
//   //   console.log(req);
//   console.log(req.method);
//   console.log(req.url);
//   res.writeHead(200, { "content-type": "text/html" });
//   res.write("<h1>Hello World</h1>");
//   res.end();
// });

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homePage);
    res.end();
  } else if (req.url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>About page</h1>");
    res.end();
  } else if (req.url === "/styles.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(homeStyles);
    res.end();
  } else if (req.url === "/logo.svg") {
    res.writeHead(200, { "content-type": "image/svg+xml" });
    res.write(homeImage);
    res.end();
  } else if (req.url === "/browser-app.js") {
    res.writeHead(200, { "content-type": "text/javascript" });
    res.write(homeLogic);
    res.end();
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>Page not Found</h1>");
    res.end();
  }
});
server.listen(5000);

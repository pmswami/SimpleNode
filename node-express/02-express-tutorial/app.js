// const http = require("http");
// const { readFileSync } = require("fs");
// const homePage = readFileSync("./navbar-app/index.html");
// const homeStyles = readFileSync("./navbar-app/styles.css");
// const homeImage = readFileSync("./navbar-app/logo.svg");
// const homeLogic = readFileSync("./navbar-app/browser-app.js");
// // console.log(homePage);
// // const server = http.createServer((req, res) => {
// //   console.log("user hit the server");
// //   res.end("Good Job!");// end() method is MUST for all responses.
// // });

// // const server = http.createServer((req, res) => {
// //   // console.log("user hit the server");
// //   res.writeHead(200, { "content-type": "text/html" });
// //   //   res.writeHead(200, { "content-type": "text/plain" });
// //   res.write("<h1>Hello World</h1>");
// //   res.end(); // end() method is MUST for all responses.
// // });

// // const server = http.createServer((req, res) => {
// //   //   console.log(req);
// //   console.log(req.method);
// //   console.log(req.url);
// //   res.writeHead(200, { "content-type": "text/html" });
// //   res.write("<h1>Hello World</h1>");
// //   res.end();
// // });

// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.writeHead(200, { "content-type": "text/html" });
//     res.write(homePage);
//     res.end();
//   } else if (req.url === "/about") {
//     res.writeHead(200, { "content-type": "text/html" });
//     res.write("<h1>About page</h1>");
//     res.end();
//   } else if (req.url === "/styles.css") {
//     res.writeHead(200, { "content-type": "text/css" });
//     res.write(homeStyles);
//     res.end();
//   } else if (req.url === "/logo.svg") {
//     res.writeHead(200, { "content-type": "image/svg+xml" });
//     res.write(homeImage);
//     res.end();
//   } else if (req.url === "/browser-app.js") {
//     res.writeHead(200, { "content-type": "text/javascript" });
//     res.write(homeLogic);
//     res.end();
//   } else {
//     res.writeHead(404, { "content-type": "text/html" });
//     res.write("<h1>Page not Found</h1>");
//     res.end();
//   }
// });
// server.listen(5000);

// // Express Basics
// // const app = require("express")();
// const express = require("express");
// const app = express();

// app.get("/", (req, res) => {
//   console.log("user hit the home page resource");
//   res.send("Home Page");
// });

// app.get("/about", (req, res) => {
//   console.log("user hit about page");
//   res.send("About Page");
// });

// app.all("*", (req, res) => {
//   console.log("user hit unknown page");
//   res.status(404).send("resource not found");
// });

// app.listen(5000, () => {
//   console.log("Server is listening on port 5000...");
// });

// //express app
// const express = require("express");
// const app = express();
// const path = require("path");

// //Setup middleware
// app.use(express.static("./public"));

// // app.get("/", (req, res) => {
// //   console.log("User hit root");
// //   res.status(200).sendFile(path.resolve(__dirname, "./navbar-app/index.html "));
// // });

// app.all("*", (req, res) => {
//   console.log("user hit unknown page");
//   res.status(404).send("<h1>Resource Not Found</h1>");
// });

// app.listen(5000, () => {
//   console.log("Server is running on port 5000...");
// });

const app = require("express")();
const { products, people } = require("./data");

app.get("/", (req, res) => {
  // res.status(200).json([{ name: "John" }, { name: "Susan" }]);
  // res.status(200).json(products);
  res.send('<h1>Home Page</h1> <a href="/api/products" >Products</a>');
});

app.get("/api/products", (req, res) => {
  // res.json(products);
  const new_products = products.map((product) => {
    const { name, desc, price } = product;
    return { name, desc, price };
  });
  res.json(new_products);
});

app.get("/api/products/:productId", (req, res) => {
  const { productId } = req.params;
  const singleProduct = products.find(
    (product) => product.id === Number(productId)
  );
  if (singleProduct) res.status(200).json(singleProduct);
  else res.status(404).json({ error: "No product available" });
});

app.get("/api/v1/query", (req, res) => {
  // console.log(req.query);
  const { search, limit } = req.query;
  let sortedProducts = [...products];
  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }
  if (sortedProducts.length < 1) {
    res.status(200).send("No products matches your search criteria");
  }
  res.json(sortedProducts);
  // res.send("Hello World");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});

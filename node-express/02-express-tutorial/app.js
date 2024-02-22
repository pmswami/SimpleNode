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

// //Query search
// const app = require("express")();
// const { products, people } = require("./data");

// app.get("/", (req, res) => {
//   // res.status(200).json([{ name: "John" }, { name: "Susan" }]);
//   // res.status(200).json(products);
//   res.send('<h1>Home Page</h1> <a href="/api/products" >Products</a>');
// });

// app.get("/api/products", (req, res) => {
//   // res.json(products);
//   const new_products = products.map((product) => {
//     const { name, desc, price } = product;
//     return { name, desc, price };
//   });
//   res.json(new_products);
// });

// app.get("/api/products/:productId", (req, res) => {
//   const { productId } = req.params;
//   const singleProduct = products.find(
//     (product) => product.id === Number(productId)
//   );
//   if (singleProduct) res.status(200).json(singleProduct);
//   else res.status(404).json({ error: "No product available" });
// });

// app.get("/api/v1/query", (req, res) => {
//   // console.log(req.query);
//   const { search, limit } = req.query;
//   let sortedProducts = [...products];
//   if (search) {
//     sortedProducts = sortedProducts.filter((product) => {
//       return product.name.startsWith(search);
//     });
//   }
//   if (limit) {
//     sortedProducts = sortedProducts.slice(0, Number(limit));
//   }
//   if (sortedProducts.length < 1) {
//     return res.status(200).send("No products matches your search criteria");
//   }
//   res.json(sortedProducts);
//   // res.send("Hello World");
// });

// app.listen(5000, () => {
//   console.log("Server is listening on port 5000...");
// });

// //More Middlewares
// const app = require("express")();
// const logger = require("./logger");
// const authorize = require("./authorize");
// const morgan = require("morgan");

// //req => middleware => res
// // //middleware
// // const logger = (req, res, next) => {
// //   const method = req.method;
// //   const url = req.url;
// //   const time = new Date().getFullYear();
// //   console.log(method, url, time);
// //   next();
// // };

// // app.get("/", logger, (req, res) => {
// //   console.log("User hit home page");
// //   res.send("Home Pgae");
// // });

// // app.get("/about", logger, (req, res) => {
// //   console.log("User hit about page");
// //   res.send("About page");
// // });

// // app.get("/api/products", logger, (req, res) => {
// //   // console.log("User hit products page");
// //   res.send("Products Page");
// // });

// // app.get("/api/items", logger, (req, res) => {
// //   // console.log("User hit items page");
// //   res.send("items page");
// // });

// // app.use(logger); // will be applied to all routes
// // app.use("/api", logger); // will be applied to only routes with "/api"
// app.use([authorize, logger]); // Order of middlrewares is most important here. They will be executed as per order they have written

// // app.use(express.static("./public"));
// app.use(morgan("tiny"));

// app.get("/", (req, res) => {
//   console.log("User hit home page");
//   res.send("Home Pgae");
// });

// app.get("/about", (req, res) => {
//   console.log("User hit about page");
//   res.send("About page");
// });

// app.get("/api/products", (req, res) => {
//   // console.log("User hit products page");
//   res.send("Products Page");
// });

// app.get("/api/items", (req, res) => {
//   // console.log("User hit items page");
//   console.log(req.user);
//   res.send("items page");
// });

// // //passing multiple middlewares
// // app.get("/api/items", [authorize, logger], (req, res) => {
// //   // console.log("User hit items page");
// //   // console.log(req.user);
// //   res.send("items page");
// // });

// app.listen(5000, () => {
//   console.log("Server is listening on port 5000...");
// });

// //Dynamic responses
// const express = require("express");
// const app = express();
// let { people } = require("./data");
// app.use(express.static("./methods-public"));
// // app.use(express.static("./public"));
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

// app.post("/login", (req, res) => {
//   // console.log("user hit post method");
//   console.log(req.body);
//   if (req.body?.name) return res.status(200).send(`Hi ${req.body.name}`);
//   else return res.status(401).send(`Please provide credential`);
// });

// app.get("/api/people", (req, res) => {
//   res.status(200).json({ success: true, data: people });
// });

// app.post("/api/people", (req, res) => {
//   const { name } = req.body;
//   if (name) return res.status(201).json({ success: true, person: name });
//   else
//     return res
//       .status(400)
//       .json({ success: false, msg: "please provide name value" });
// });

// app.post("/api/people/postman", (req, res) => {
//   const { name } = req.body;
//   if (!name) {
//     return res
//       .status(400)
//       .json({ success: false, msg: "please provide name value" });
//   }
//   res
//     .status(201)
//     .json({ success: true, person: [...people, { name: name, id: 10 }] });
// });

// app.put("/api/people/:id", (req, res) => {
//   const { id } = req.params;
//   const { name } = req.body;
//   // console.log(id, name);
//   const person = people.find((person) => {
//     return person.id === Number(id);
//   });
//   if (!person) {
//     return res.status(404).json({ success: false, msg: "no person with ID" });
//   }
//   const newPeople = people.map((person) => {
//     if (person.id === Number(id)) {
//       person.name = name;
//     }
//     return person;
//   });
//   res.status(200).json({ success: true, data: newPeople });
// });

// app.delete("/api/people/:id", (req, res) => {
//   const { id } = req.params;
//   const person = people.find((person) => {
//     return person.id === Number(id);
//   });
//   if (!person) {
//     return res.status(404).json({ success: false, msg: "no person with ID" });
//   }
//   const newPeople = people.filter((person) => person.id !== Number(id));
//   res.status(200).json({ success: true, data: newPeople });
// });

// app.listen(5000, () => {
//   console.log("Server is listening on port 5000...");
// });

//Express Routers
const express = require("express");
const app = express();
// let { people } = require("./data");
app.use(express.static("./methods-public"));
// // app.use(express.static("./public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const people = require("./routes/people");
const auth = require("./routes/auth");

app.use("/api/people", people);

app.use("/login", auth);

app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});

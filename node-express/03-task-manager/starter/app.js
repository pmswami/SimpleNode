const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
app.use(express.json());
require("dotenv").config();
const port = process.env.PORT || 3000;
app.use(express.static("./public"));
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

//routes
// app.get("/hello", (req, res) => {
//   res.send("Task Manager App");
// });

app.use("/api/v1/tasks", tasks);

app.use("*", notFound);
app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL)
      .then(() => {
        console.log("CONNECTED TO MONGO DB...");
        app.listen(port, () => {
          console.log("App is listening on port " + port);
        });
      })
      .catch((err) => console.log(err));
  } catch (error) {
    console.log(error);
    return;
  }
};
start();

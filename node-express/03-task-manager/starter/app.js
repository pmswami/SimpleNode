const express = require("express");
const app = express();
const port = 3000;
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
app.use(express.json());
require("dotenv").config();
app.use(express.static("./public"));

//routes
// app.get("/hello", (req, res) => {
//   res.send("Task Manager App");
// });

app.use("/api/v1/tasks", tasks);

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

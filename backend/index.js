// imports
const express = require("express");
const bodyParser = require("body-parser");
const imageRoute= require("./routes/image")
const chatRoute = require("./routes/chat")

// Handle uncaught exceptions and unhandled rejections
process.on("uncaughtException", (err, origin) => {
    console.log("Uncaught Exception:", err, "Origin", origin);
});

process.on("unhandledRejection", (reason, promise) => {
    console.log("Unhandled Rejection at:", promise, "reason:", reason);
});

const app = express();

// Parse requests of content-type - application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Home page just returns a message
app.get("/", (req, res) => { 
    res.send("Relax");
});

// Routes
app.use("/image", imageRoute);
app.use("/chat", chatRoute);

// Set port, listen for requests
const port = process.env.PORT || 3005;
app.listen(port, () => {
  console.log("Server is running on port " + port);
});
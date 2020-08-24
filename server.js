const express = require("express");

const connectDB = require("./config/db");

const app = express();

const path = require("path");

// Connect to DB
connectDB();

// Init middleware
// This helps to pass the request body to the controllers
app.use(express.json({ extended: false }));

app.use("/api/users", require("./api/controllers/users"));
app.use("/api/todo", require("./api/controllers/todo"));

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.use("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Started at port ${PORT}`));

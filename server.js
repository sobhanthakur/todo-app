const express = require("express");

const connectDB = require("./config/db")

const app = express();

// Connect to DB
connectDB()

// Init middleware
// This helps to pass the request body to the controllers
app.use(express.json({extended:false}))

app.use('/api/users', require('./api/controllers/users'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Started at port ${PORT}`));

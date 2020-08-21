const express = require("express");
const app = express();

// Init middleware
// This helps to pass the request body to the controllers
app.use(express.json({extended:false}))

// Define Routes
app.use('/', (req,res) => {
    res.json({msg:"Initial Code Setup"})
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Started at port ${PORT}`));

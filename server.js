const express = require("express");
require("./database") // Inportimi i database.js ne server.js

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("MongoDB connect with Mongose");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running ne porten ${PORT}`));
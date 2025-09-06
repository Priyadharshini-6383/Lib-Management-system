const express = require("express");
const app = express();
const PORT = 5000;

app.get("/" , (req , res ) => {
res.send(" Welcome to Library Management System");
});

app.listen(PORT , () => {
    console.log(`The server will be run on http://localhost:${PORT}`);
});
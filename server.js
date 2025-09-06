const express = require("express");
const app = express();
const PORT = 5000;

const Accessrouter = require("./routes/lib.router.js");
const connectdB = require("./Database/DB.js");

app.use(express.json());

app.use(express.urlencoded({extended : true}));
connectdB();

app.use("/library" , Accessrouter);




connectdB();

app.get("/" , (req , res ) => {
res.send(" Welcome to Library Management System");
});

app.listen(PORT , () => {
    console.log(`The server will be run on http://localhost:${PORT}`);
});
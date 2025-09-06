const mongoose = require("mongoose");
const connectdB = async () =>{
try {
    
    await mongoose.connect("mongodb+srv://Priyadharshini:rqwDjFcCZa3ncgxw@cluster0.xtnbh5o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");


    console.log("Database connected Successfully ....");
}

catch (error) {
    console.error(error.message);
    process.exit(1);
}

};
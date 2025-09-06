const mongoose = require("mongoose");
const connectdB = async () =>{
try {
    
    await mongoose.connect(process.env.MONGODB_URI);


    console.log("Database connected Successfully ....");
}

catch (error) {
    console.error(error.message);
    process.exit(1);
}

};
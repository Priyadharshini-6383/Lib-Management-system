const mongoose  = require("mongoose");

const schema = new mongoose.Schema({
  
    Booktitle: { 
    type: String, 
    required: true 
    },
  Author: {
     type: String,
     required: true
     },
  
     PublishedYear: {
     type: Number,
     required: true
     },
  
  description: String,
});


const Library = mongoose.model("Library" , schema);

module.exports = Library;
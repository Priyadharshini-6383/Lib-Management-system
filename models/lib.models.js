const mongoose  = require("mongoose");

const schema = new mongoose.Schema ( {
    Booktitle : String,
    Author : String,
    PublishedYear : Number,
    description : String
} );

const Library = mongoose.model("Library" , schema);

module.exports = Library;
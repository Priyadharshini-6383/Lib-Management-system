const Library = require("../models/lib.models.js");



const BooksRead = (req , res) => {
res.send("Books fetched Successfully");
    

};

const BooksCreate = async (req , res ) => {
const Books = new Library ({
    Booktitle : req.body.Booktitle,
    Author : req.body.Author,
    PublishedYear : req.body.PublishedYear,
    description : req.body.description,
});

try {
    const savedBook = await Books.save();
    return res.status(201).json(savedBook);
}
catch (error) {
    return res.status(400).json({message : "Error found"});
}
};

const BooksUpdate = (req , res) =>{
res.send("Books updated successfully");
};

const BooksDelete = (req , res) => {
res.send("Books deleted successfully");
};

module.exports = {BooksRead , BooksCreate , BooksUpdate , BooksDelete};
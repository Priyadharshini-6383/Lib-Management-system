const Library = require("../models/lib.models.js");



const BooksRead = async (req , res) => {
try {
    const book = await Library.find();
    res.json(book);
} catch (error) {
    res.status(500).json({message : "Book not found"});
}

};
 const BookReadById = async (req,res) => {
    try {
const book = await Library.findById(req.params.id);
if (book == null) {
    res.status(404) .json({message : "There is no book found for this id"});

} else {
    res.status(200).json(book);
}
    }
    catch (error) {
        res.status(500).json({message : "Error found"});
    }
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

const BooksUpdate = async (req , res) =>{
const updateresult = await Library.findOneAndUpdate(
    {
        _id : req.params.id
    },
    {
    Booktitle : req.body.Booktitle,
    Author : req.body.Author,
    PublishedYear : req.body.PublishedYear,
    description : req.body.description,
    },
    {
        new : true
    }
);

try {
    res.status(200) . json(updateresult);
} catch (error) {
    res.status(500).json({message : "Error found"});
}
};

const BooksDelete = async (req , res) => {
  const Bookid = req.params.id;

  const Bookfound = Library.findOne({_id : Bookid});

  try {
 await Library. deleteOne({_id : Bookid });

 res.json({message : "Book deleted"});

  } catch (error) {
res.status(500).json({message : "Error found"});
  }
};

module.exports = {BooksRead , BookReadById ,BooksCreate , BooksUpdate , BooksDelete};
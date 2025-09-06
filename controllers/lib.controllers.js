const BooksRead = (req , res) => {
res.send("Books updated successfully");
    

};

const BooksCreate = (req , res ) => {
 console.log(req.body);

    return res.json(req.body);
};

const BooksUpdate = (req , res) =>{
res.send("Books updated successfully");
};

const BooksDelete = (req , res) => {
res.send("Books deleted successfully");
};

module.exports = {BooksRead , BooksCreate , BooksUpdate , BooksDelete};
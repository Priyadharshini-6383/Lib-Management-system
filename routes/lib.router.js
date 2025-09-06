const express = require("express");

const router = express.Router();

router.get("/" ,BooksRead);

router.post("/",BooksCreate);

router.put("/:id" , BooksUpdate);

router.delete("/:id" , BooksDelete);
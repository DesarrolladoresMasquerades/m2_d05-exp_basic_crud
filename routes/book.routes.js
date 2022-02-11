// ROUTES FILE NEEDS TO BE REQUIRED IN THE APP.JS IN ORDER NOT TO GIVE 404
// APP NEEDS TO KNOW YOU CREATED A NEW ROUTE FILE, THAT'S THE ONLY WAY FOR IT TO KNOW WHICH ROUTES YOU WANT TO HIT

const express = require("express");
const app = require("../app");
const router = express.Router();

const Book = require("../models/Book.model");

// ****************************************************************************************
// GET route to display all the books
// ****************************************************************************************

// this corresponds to the app.get()
router.get("/books", (req, res) => {
  Book.find()
  .then((books) => {
    console.log(`Found ${books.length} books form the DB`);
    res.render("books-list", { books });
  })
  .catch(err=>console.log("DBerror reading '/books'"))
});


// ****************************************************************************************
// GET route for querying a specific book from the database
// ****************************************************************************************



module.exports = router;

const Books = require('../models/books')

const getAllBooks = async (req, res) => {
  try {
    const books = await Books.find();
    res.status(200).json(books)
  } catch (error) {
    res.status(500).send(`No se encontro nigun libro :c`)
  }
}

const getBookCategory = async (req, res) => {
  try {
    
  } catch (error) {
    
  }
}

const createBook = async (req, res) => {
  try {
    const bookData = req.body
    const books = await new Books(bookData).save();
    console.log(books);
    res.status(201).json(books);
  } catch (error) {
    res.status(500).send(`No se pudo registrar el libro :c`)
  }
}

module.exports = {
  getAllBooks,
  createBook
}
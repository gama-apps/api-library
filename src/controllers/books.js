const Books = require('../models/books')

const getAllBooks = async (req, res) => {
  try {
    const books = await Books.find();
    res.status(200).json(books)
  } catch (error) {
    res.status(500).send(`No se encontro nigun libro :c`)
  }
}

const createBook = async (req, res) => {
  try {
    const bookData = req.body
    const books = await new Books(bookData).save();
    res.status(201).json(books)
  } catch (error) {
    res.status(500).send(`No se pudo registrar un nuevo libro :c`)
  }
}

module.exports = {
  getAllBooks,
  createBook
}
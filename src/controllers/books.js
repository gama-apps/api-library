const books = require('../models/books')

const getAllBooks = async (req, res) => {
  try {
    books.find()
    .then((books) => {
      res.status(200).json(books)
    })

    return await books;
  } catch (error) {
    res.status(500).send(`No se encontro nigun libro :c`)
  }
}

const createBook = async (req, res) => {}

module.exports = {
  getAllBooks,
  createBook
}
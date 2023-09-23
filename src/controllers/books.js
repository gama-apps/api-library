const Books = require('../models/Books')
const {v4: uuid} = require('uuid')

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
    const bookCategory = req.params.categoryId;
    const books = await Books.find({ bookCategory });
    res.status(200).json(books)
  } catch (error) {
    res.status(500).send(`No se encontro nigun libro :c`)
  }
}

const createBook = async (req, res) => {
  try {
    const bookData = req.body
    bookData._id = uuid()
    const books = await new Books(bookData).save();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).send(`No se pudo registrar el libro :c`)

  }
}

const updateBook = async (req, res) => {
  try {
    const updateBookId = req.params._id;
    const bookData = req.body;
    const updatedBook = await Books.findByIdAndUpdate(updateBookId, bookData, { new: true });

    if (!updatedBook) {
      return res.status(404).send('Libro no encontrado');
    }
    res.status(200).json(updatedBook);
  } catch (error) {
    res.status(500).send(`Error al actualizar el libro: ${error.message}`);
  }
};

const deleteBook = async () => {
  try {
    const deleteBookId = req.params._id;
    const deleteBook = await Books.findByIdAndRemove(deleteBookId)
    res.status(200).json(deleteBook);
  } catch (error) {
    es.status(500).send(`Error al eliminar el libro: ${error.message}`);
  }
}

module.exports = {
  getAllBooks,
  createBook,
  updateBook,
  getBookCategory,
  deleteBook
}

//crear el upload para subir imagenes
//sisas

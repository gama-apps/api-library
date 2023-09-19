const express = require('express');
const booksRouter = express.Router();
const {
        getAllBooks, 
        createBook,
        updateBook,
        getBookCategory,
        deleteBook 
      } = require('../controllers/books') 

//middleware
booksRouter.use(express.json());

//endpoints
booksRouter.route('/').get(getAllBooks);
booksRouter.route('/:category').get(getBookCategory );
booksRouter.route('/newBook').post(createBook);
booksRouter.route('/update').put(updateBook);
booksRouter.route('/delete').delete(deleteBook);
module.exports = booksRouter;
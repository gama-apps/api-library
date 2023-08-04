const express = require('express');
const booksRouter = express.Router();
const {
        getAllBooks, 
        createBook,
        updateBook,
        getBookCategory 
      } = require('../controllers/books') 

//middleware
booksRouter.use(express.json());

//endpoints
booksRouter.route('/').get(getAllBooks);
booksRouter.route('/:category').get(getBookCategory );
booksRouter.route('/register').post(createBook);
booksRouter.route('/update').put(updateBook);

module.exports = booksRouter;
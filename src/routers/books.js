const express = require('express');
const booksRouter = express.Router();
const {
        getAllBooks, 
        createBook
      } = require('../controllers/books') 

//middleware
booksRouter.use(express.json());

//endpoints
booksRouter.route('/').get(getAllBooks);
booksRouter.route('/:category').get();
booksRouter.route('/:name').get();
booksRouter.route('/register').post(createBook).save;

module.exports = booksRouter;
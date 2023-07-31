const express = require('express');
const booksRouter = express.Router();
const {getAllBooks} = require('../controllers/books') 

//middleware
booksRouter.use(express.json());

//endpoints
booksRouter.route('/').get(getAllBooks);

module.exports = booksRouter;
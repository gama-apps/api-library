const express = require('express');
const categoryRouter = express.Router();
const { getCategory,
        createCategory,
        getCategoryBook 
      } = require('../controllers/category');

//middleware
categoryRouter.use(express.json());

//endpoints
categoryRouter.route('/').get(getCategory);
categoryRouter.route('/:categoryId/books').get(getCategoryBook);
categoryRouter.route('/newCategory').post(createCategory);
categoryRouter.route('/update').put();

module.exports = categoryRouter
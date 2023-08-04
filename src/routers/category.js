const express = require('express');
const categoryRouter = express.Router();

//middleware
categoryRouter.use(express.json());

//endpoints
categoryRouter.route('/').get()

module.exports = categoryRouter
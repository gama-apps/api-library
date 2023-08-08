const Category = require('../models/Category');
const {v4: uuid} = require('uuid');

const getCategory = async (req, res) => {
  try {
    const category = await Category.find();
    res.status(200).json(category);
  } catch (error) {
    res.status(500).send('No se encontro ninguna categoría :c')
  }
}

const getCategoryBook = async (req, res) => {
  try {
    const category = await Category.aggregate([
      {
        $lookup: {
          from: 's_books', // Nombre de la colección de libros en tu base de datos
          localField: '_id',
          foreignField: 'categoryId',
          as: 'books'
        }
      }
      ]);
    res.status(200).json(category);
  } catch (error) {
    res.status(500).send('No se encontro ninguna categoría :c')
  }
}

const createCategory = async (req, res) => {
  try {
    const categoryData = req.body;
    categoryData._id = uuid();
    categoryData.key = "S-" + key.trim().slice(0, 3).toUpperCase();
    const newCategory = await new Category(categoryData).save();
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(500).send('No se puso registrar el libro :c')
  }
}

const updateCategory = async (req, res) => {
  try {
    
  } catch (error) {
    res.status(500).send('No se pudo actualizar el libro :c')
  }
}

module.exports = {
  getCategory,
  createCategory,
  getCategoryBook
}
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
          from: 's_books',
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
    categoryData.key = categoryData.name.trim().toLowerCase().replaceAll(" ", "_");
    const newCategory = await new Category(categoryData).save();
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(500).send('No se puso registrar el libro :c')
  }
}

const updateCategory = async (req, res) => {
  try {
    const updateCategoryId = req.params._id;
    const categoryData = req.body;
    const updatedCategory = await Category.findByIdAndUpdate(updateCategoryId, categoryData, { new: true });

    if (!updatedCategory) {
      return res.status(404).send('categoria no encontrada');
    }
    res.status(200).json(updatedCategory);
  } catch (error) {
    res.status(500).send('No se pudo actualizar la categoria :c')
  }
}

module.exports = {
  getCategory,
  createCategory,
  getCategoryBook
}
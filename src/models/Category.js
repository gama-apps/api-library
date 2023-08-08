const { Schema, model } = require('mongoose');
const collectionName = 's_category';

const schema = Schema({
  _id: { type: String, require: true },
  name: { type: String },
  key: { type: String, unique: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  isRemove: { type: Boolean, default: false },
}, {
  strict: true,
  collection: collectionName,
  _id: false
})

module.exports = model(collectionName, schema)
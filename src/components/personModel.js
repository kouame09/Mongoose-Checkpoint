const mongoose = require('mongoose');
const { Schema } = mongoose;

const personneSchema = new Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String]
});

const Personne = mongoose.model('Personne', personneSchema);

module.exports = Personne;

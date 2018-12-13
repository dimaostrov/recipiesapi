const mongoose = require('mongoose')

var schema = new mongoose.Schema({
    name: 'string', 
    size: 'string' 
});

const Recipe = mongoose.model('Recipe', schema);

module.exports = Recipe
const mongoose = require('mongoose')

var schema = new mongoose.Schema({
    name: {type: String, unique: true} 
});

const Seed = mongoose.model('Seed', schema);

module.exports = Seed
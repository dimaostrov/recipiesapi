const fs = require("fs");
var path = require("path");
const readline = require("readline");
const {Seed} = require('../models');

function convert(input_file_path) {
  const lineReader = readline.createInterface({
    input: fs.createReadStream(input_file_path, "utf8")
  });
  lineReader.on("line", function(line) {
    let food = new Seed({ name: line})
    food.save((err, success) => {
        if(err) return console.error(err)
        console.log(success, ' saved!')
    })
  });
}


const file = path.join(__dirname, "../data", "foodlist.txt");
console.log(file);
convert(file);

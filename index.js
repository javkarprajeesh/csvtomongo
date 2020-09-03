const mongoose = require("mongoose");
const csv = require('csvtojson');

mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});

const MovieSchema = new mongoose.Schema({
    name : "string",
    rating : "string",
    description : "string",
})

const Movie  = mongoose.model("Movies",MovieSchema)

csv().fromFile("movies.csv").then((jsonObj) => { jsonObj.map(index => {Movie.create(index)}) });






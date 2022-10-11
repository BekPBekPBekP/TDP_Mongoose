const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/movies_db", {
    useNewUrlParser: true 
});

const movieSchema = new mongoose.Schema({
    title: {
    type: String,
    require: true
},
    description: {
    type: String,
},
    releaseDate: {
    type: String,
},
    ageRating: {
    type: String
}
});

const movieModel = mongoose.model("movie", movieSchema);

module.exports = {
    movieModel
}


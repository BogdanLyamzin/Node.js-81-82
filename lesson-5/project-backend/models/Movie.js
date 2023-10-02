import {Schema, model} from "mongoose";

const movieSchema = new Schema({
    title: String,
    director: String,
})

const Movie = model("movie", movieSchema);
// categories => category
// mice => mouse

export default Movie;
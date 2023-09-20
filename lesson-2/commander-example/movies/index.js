import fs from "fs/promises";
import path from "path";
import { nanoid } from "nanoid";

const moviesPath = path.resolve("movies", "movies.json");
// const moviesPath = path.join(__dirname, "movies.json");

const updateMovie = movies => fs.writeFile(moviesPath, JSON.stringify(movies, null, 2));

export const getAllMovies = async()=> {
    const buffer = await fs.readFile(moviesPath);
    return JSON.parse(buffer);
}

export const getMovieById = async id => {
    const movies = await getAllMovies();
    const result = movies.find(item => item.id === id);
    return result || null;
}

export const addMovie = async({title, director}) => {
    const movies = await getAllMovies();
    const newMovie = {
        id: nanoid(),
        title,
        director,
    };
    movies.push(newMovie);
    await updateMovie(movies);
    return newMovie;
}

export const updateMovieById = async(id, {title, director}) => {
    const movies = await getAllMovies();
    const index = movies.findIndex(item => item.id === id);
    if(index === -1) {
        return null;
    }
    movies[index] = {id, title, director};
    await updateMovie(movies);
    return movies[index];
}

export const deleteMovieById = async id => {
    const movies = await getAllMovies();
    const index = movies.findIndex(item => item.id === id);
    if(index === -1) {
        return null;
    }
    
    const [result] = movies.splice(index, 1);
    await updateMovie(movies);
    return result;
}
import * as movieService from "./movies/index.js";

const invokeAction = async ({action, id, title, director})=> {
    try {
        switch(action) {
            case "list":
                const movieList = await movieService.getAllMovies();
                return console.log(movieList);
            case "getById":
                const oneMovie = await movieService.getMovieById(id);
                return console.log(oneMovie);
            case "add":
                const newMovie = await movieService.addMovie({title, director});
                return console.log(newMovie);
            case "updateById":
                const updateMovie = await movieService.updateMovieById(id, {title, director});
                return console.log(updateMovie);
            case "deleteById":
                const deleteMovie = await movieService.deleteMovieById(id);
                return console.log(deleteMovie);
            default:
                console.log("Unknown action");
        }
    }
    catch(error) {
        console.log(error.message);
        throw error;
    }
}

// invokeAction({action: "list"})
// invokeAction({action: "getById", id: "u9kgwNWGi3uUUwh0b8V48"})
// invokeAction({action: "add", title: "Avatar: way of water", director: "James Cameron"})
// invokeAction({action: "updateById", id: "AhsOHPiiweMwtEMUFHsP2", title: "Avatar: Way of water", director: "James Cameron"})
// invokeAction({action: "deleteById", id: "AhsOHPiiweMwtEMUFHsP2"})
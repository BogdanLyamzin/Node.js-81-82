import express from "express";

import movies from "./movies.js";

const app = express();

app.get("/movies", (req, res)=> {
    const databaseResponse = null;
    // res.json(databaseResponse);
    // res.send(databaseResponse);
    res.json(movies);
    // res.send(movies); // JSON.stringify(movies);
})

app.listen(3000, ()=> console.log(`Server running at 3000 PORT`));
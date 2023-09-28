import express from "express";

import moviesController from "../../controllers/movies-controller.js";

import {isEmptyBody} from "../../middlewares/index.js";

import {validateBody} from "../../decorators/index.js";

import {movieAddSchema} from "../../schemas/movie-schemas.js";

const movieAddValidate = validateBody(movieAddSchema)

const moviesRouter = express.Router();

moviesRouter.get("/", moviesController.getAll);

moviesRouter.get("/:id", moviesController.getById);

moviesRouter.post("/", isEmptyBody, movieAddValidate, moviesController.add);

moviesRouter.put("/:id", isEmptyBody, movieAddValidate, moviesController.updateById);

moviesRouter.delete("/:id", moviesController.deleteById);

export default moviesRouter;
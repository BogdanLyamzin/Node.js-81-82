import express from "express";

import moviesController from "../../controllers/movies-controller.js";

import { authenticate, upload, isEmptyBody, isValidId } from "../../middlewares/index.js";

import { validateBody } from "../../decorators/index.js";

import { movieAddSchema, movieUpdateFavoriteSchema } from "../../models/Movie.js";

const movieAddValidate = validateBody(movieAddSchema)
const moviUpdateFavoriteValidate = validateBody(movieUpdateFavoriteSchema)

const moviesRouter = express.Router();

moviesRouter.use(authenticate);

moviesRouter.get("/", moviesController.getAll);

moviesRouter.get("/:id", isValidId, moviesController.getById);

// upload.fields([{name: "poster", maxCount: 1}])
// upload.array("poster", 8)
moviesRouter.post("/", upload.single("poster"), isEmptyBody, movieAddValidate, moviesController.add);

moviesRouter.put("/:id", isValidId, isEmptyBody, movieAddValidate, moviesController.updateById);

moviesRouter.patch("/:id/favorite", isValidId, isEmptyBody, moviUpdateFavoriteValidate, moviesController.updateFavorite);

moviesRouter.delete("/:id", isValidId, moviesController.deleteById);

export default moviesRouter;
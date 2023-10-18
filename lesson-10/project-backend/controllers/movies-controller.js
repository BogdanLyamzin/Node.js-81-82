import fs from "fs/promises";
import path from "path";

import Movie from "../models/Movie.js";

import { HttpError } from "../helpers/index.js";

import { ctrlWrapper } from "../decorators/index.js";

const postersPath = path.resolve("public", "posters");

const getAll = async (req, res) => {
    const {_id: owner} = req.user;
    const {page = 1, limit = 10} = req.query;
    const skip = (page - 1) * limit;
    const result = await Movie.find({owner}, "-createdAt -updatedAt", {skip, limit}).populate("owner", "username email");
    res.json(result);
}

const getById = async (req, res) => {
    const {_id: owner} = req.user;
    const { id } = req.params;
    const result = await Movie.findOne({_id: id, owner});
    // const result = await Movie.findById(id);
    if (!result) {
        throw HttpError(404, `Movie with ${id} not found`);
    }
    res.json(result);
}

const add = async (req, res) => {
    const {_id: owner} = req.user;
    const {path: oldPath, filename} = req.file;
    const newPath = path.join(postersPath, filename);
    await fs.rename(oldPath, newPath);
    const poster = path.join("posters", filename);
    const result = await Movie.create({...req.body, poster, owner});
    res.status(201).json(result);
}

const updateById = async (req, res) => {
    const { id } = req.params;
    const {_id: owner} = req.user;

    // const result = await Movie.findByIdAndUpdate(id, req.body);
    const result = await Movie.findOneAndUpdate({_id: id, owner}, req.body);
    if (!result) {
        throw HttpError(404, `Movie with ${id} not found`);
    }

    res.json(result);
}

const updateFavorite = async (req, res) => {
    const { id } = req.params;
    const {_id: owner} = req.user;

    // const result = await Movie.findByIdAndUpdate(id, req.body);
    const result = await Movie.findOneAndUpdate({_id: id, owner}, req.body);
    if (!result) {
        throw HttpError(404, `Movie with ${id} not found`);
    }

    res.json(result);
}

const deleteById = async (req, res) => {
    const { id } = req.params;
    const {_id: owner} = req.user;

    const result = await Movie.findOneAndDelete({_id: id});
    if (!result) {
        throw HttpError(404, `Movie with ${id} not found`);
    }

    res.json({
        message: "Delete success"
    })
}

export default {
    getAll: ctrlWrapper(getAll),
    getById: ctrlWrapper(getById),
    add: ctrlWrapper(add),
    updateById: ctrlWrapper(updateById),
    updateFavorite: ctrlWrapper(updateFavorite),
    deleteById: ctrlWrapper(deleteById),
}
import express from "express";

import authController from "../../controllers/auth-controller.js";

import {authenticate, isEmptyBody} from "../../middlewares/index.js";

import {validateBody} from "../../decorators/index.js";

import { userSignupSchema, userSigninSchema } from "../../models/User.js";

const userSignupValidate = validateBody(userSignupSchema);
const userSigninValidate = validateBody(userSigninSchema);

const authRouter = express.Router();

authRouter.post("/signup", isEmptyBody, userSignupValidate, authController.signup);

authRouter.post("/signin", isEmptyBody, userSigninValidate, authController.signin);

authRouter.get("/current", authenticate, authController.getCurrent);

authRouter.post("/signout", authenticate, authController.signout);

export default authRouter;
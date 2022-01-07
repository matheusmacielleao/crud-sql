import { Router } from "express";
import { CategoryController } from "../app/controllers/CategoryController";

const routes = Router();

routes.post("/categories", new CategoryController().handle);

export{routes}
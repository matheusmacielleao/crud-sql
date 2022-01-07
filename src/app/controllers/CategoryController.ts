import {Request, Response} from "express";
import { CategoryService} from "../services/CategoryService";

const categoryService = new CategoryService();

export class CategoryController{
    async handle(request: Request, response: Response){
        try{
            const result = await categoryService.create(request.body);
            return response.status(201).json(result);
        } catch(err){
            return response.status(400).json(err);
        }


    }

}
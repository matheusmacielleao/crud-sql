import { getRepository } from "typeorm";
import  {Category} from "../entities/Category";

type CategoryRequest ={
    name: string;
    description: string;
}

export class CategoryRepository {
    
    async create(payload) : Promise<Category | Error > {
        const{name,description} = payload;
        const repo = getRepository(Category);
        const category = repo.create({name, description});
        await repo.save(category);
        return category;
        
    }
}
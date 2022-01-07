import { CategoryRepository } from "../repository/CategoryRepository";
import  {Category} from "../entities/Category";
const categoryRepository = new CategoryRepository();
type CategoryRequest ={
    name: string;
    description: string;
}

export class CategoryService {
    async create(payload) : Promise<Category | Error> {

        const category = categoryRepository.create(payload);

        return category;
        
    }
}
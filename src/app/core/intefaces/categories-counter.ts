import { Categories } from "../enums/categories";

export interface CategoriesCounter {
    category: Categories,
    counter: number,
    selected: boolean
}
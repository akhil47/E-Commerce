import { Category } from '../Modals/Product/category.modal';
import { Product } from '../Modals/Product/product.modal';

export class DummyDataService{
    categories: Category[] = []
    constructor(){
        this.categories.push(new Category('CLOTHING', [
            'Polos & Tees',
            'Casual Shirts',
            'Jeans',
            'Casual Trousers',
            'Formal Shirts',
            'Formal Trousers',
            'Suits & Blazers',
            'Track Wear',
            'Shorts & 3/4ths',
            'Ethnic Wear',
            'Winter Wear'
        ]))
        this.categories.push(new Category('WATCHES', [
            'Analog',
            'Chronograph',
            'Digital',
            'Watch Cases'
        ]))
        this.categories.push(new Category('FOOTWEAR', [
            'Sports Shoes',
            'Sneakers',
            'Casual Shoes',
            'Loafers',
            'Formal Shoes',
            'Boots',
            'Outdoor & Hiking',
            'Floaters'
        ]))
        this.categories.push(new Category('BAGS', [
            'Backpacks',
            'Wallets',
            'Laptop Bags',
            'Travel Bags',
            'Messenger Bags'
        ]))
        this.categories.push(new Category('TOP PICKS', [
            'Winter Wonderland',
            'Work In Progress',
            'Party On',
            'Casual Affairs',
            'Sports Central'
        ]))
    }


    getCategories(){
        return this.categories
    }


}
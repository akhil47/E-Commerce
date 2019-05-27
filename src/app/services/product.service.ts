import { Product } from '../Modals/Product/product.modal';
import { Size } from '../Modals/Product/size.modal';

export class ProductService{
    products: Product[]
    constructor(){
        this.products = []
        this.createProducts()
    }
    createProducts(){
        //Dummy Function
        var sizeNames = ['S', 'M', 'L', 'XL', 'XXL', 'XXXL']
        var sizeList: Size[] = []
        for(let i = 0; i < 20; i++){
            this.products.push(new Product())
        }
        for(let i = 0; i < 6; i++){
            sizeList.push(new Size('27-05-2019'))
        }
        for(let i = 0; i < 6; i++){
            sizeList[i].sizeName = sizeNames[i % sizeNames.length]
            sizeList[i].availableQuantity = (i % 2) + 1
            sizeList[i].oldPrice = 4999
            sizeList[i].newPrice = 3999
            sizeList[i].discount = 20
            sizeList[i].dateModified = '27-05-2019'
            sizeList[i].status = true
        }
        for(let i = 0; i < 20; i++){
            this.products[i].setName('Tommy Hilfiger White Regular Fit Solid Casual Shirt')
            this.products[i].setId(i)
            this.products[i].setDescription('100% Cotton')
            this.products[i].setImages([
                'https://snow-commerce.imgix.net/aetv/history/products/the_curse_of_oak_island/apparel/merch//COOI-tShirt-Men-Cotton-Charcoal.jpg?auto=compress&fm=pjpg&q=80&cs=strip&h=200&w=200'
            ])
            this.products[i].setBrand('Tommy Hilfiger')
            this.products[i].setCategory('Men')
            this.products[i].setSubCategory('Causal Shirts')
            this.products[i].setSizeList(sizeList)
            this.products[i].setStatus(true)
        }
    }
}
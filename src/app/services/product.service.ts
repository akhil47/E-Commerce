import { Product } from '../Modals/Product/product.modal';
import { Size } from '../Modals/Product/size.modal';
import { Subject } from 'rxjs';
import { Injectable } from "@angular/core";

@Injectable()
export class ProductService{

    // Only for <app-size> & <app-sizes-container> component
    sizeSelected = new Subject<string>() 
    sizeActive: string = 'none'

    products: Product[]
    constructor(){
        this.products = []
        this.createProducts()
    }
    createProducts(){
        //Dummy Function
        var sizeNames = ['S', 'M', 'L', 'XL', 'XXL', '3XL']
        var sizeList: Size[] = []
        for(let i = 0; i < 20; i++){
            this.products.push(new Product())
        }
        for(let i = 0; i < 6; i++){
            sizeList.push(new Size('27-05-2019'))
        }
        for(let i = 0; i < 6; i++){
            sizeList[i].sizeName = sizeNames[i % sizeNames.length]
            sizeList[i].availableQuantity = (i % 2) + 6
            sizeList[i].price = 4999
            sizeList[i].discount = 20
            sizeList[i].dateModified = '27-05-2019'
            sizeList[i].status = true
        }
        for(let i = 0; i < 20; i++){
            this.products[i].setName(i + 'Tommy Hilfiger White Regular Fit Solid Casual Shirt')
            this.products[i].setId(i)
            this.products[i].setDescription('100% Cotton')
            this.products[i].setImages([
                'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1700944/2019/6/8/c3d336e4-8c86-4434-94b2-c9b28b6dd6471559989322777-HRX-by-Hrithik-Roshan-Men-Yellow-Printed-Round-Neck-T-Shirt--2.jpg',
                'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1700944/2019/6/8/20153ade-f325-4613-a851-f79f8dc00c571559989322759-HRX-by-Hrithik-Roshan-Men-Yellow-Printed-Round-Neck-T-Shirt--3.jpg',
                'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1700944/2019/6/8/67f8fc06-3131-4ae9-a869-2b485f0aca3c1559989322742-HRX-by-Hrithik-Roshan-Men-Yellow-Printed-Round-Neck-T-Shirt--4.jpg',
                'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1700944/2019/6/8/ec064f55-1640-4bdb-92f2-b1b22cb190391559989322722-HRX-by-Hrithik-Roshan-Men-Yellow-Printed-Round-Neck-T-Shirt--5.jpg',
                'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1700944/2019/6/8/6afd4244-8211-4d49-b708-1e92ff0d1bf11559989322708-HRX-by-Hrithik-Roshan-Men-Yellow-Printed-Round-Neck-T-Shirt--6.jpg'
            ])
            this.products[i].setBrand('Tommy Hilfiger')
            this.products[i].setCategory('Men')
            this.products[i].setSubCategory('Causal Shirts')
            this.products[i].setSizeList(sizeList)
            this.products[i].setStatus(true)
        }
    }
    getWishListItems(wishListProductId: number[]){
        let products: Product[] = []
        for(let product of this.products){
            for(let id of wishListProductId){
                if(id == product.getId()){
                    products.push(product)
                }
            }
        }
        return products
    }



    // Product Quantity Updating Methods

    increaseProductQuantity(productId: number, size: string, quantity: number){
        for(let product of this.products){
            if(productId == product.getId()){
                product.increaseSizeQuantity(size, quantity)
            }
        }
        // have a case when product not found
    }
    decreaseProductQuantity(productId: number, size: string, quantity: number){
        for(let product of this.products){
            if(productId == product.getId()){
                product.decreaseSizeQuantity(size, quantity)
            }
        }
        // have a case when product not found
    }



    // Product Filter Methods

    getProduct(id: number){
        for(let product of this.products){
            if(id == product.getId()){
                return product
            }
        }
        // have a case when product not found
    }
    getProductsBySize(size: string, productList: Product[]){
        let products: Product[] = []
        for(let product of productList){
            if(product.checkSize(size)) products.push(product)
        }
        return products
    }
    getProductsByPrice(minPrice: number, maxPrice: number, productList: Product[]){
        let products: Product[] = []
        for(let product of productList){
            if(product.checkPrice(minPrice, maxPrice)) products.push(product)
        }
        return products
    }
    getProductsByCategory(categoryName: string, productList: Product[], subCategoryName?: string){
        let products: Product[] = []

        if(typeof subCategoryName !== 'undefined'){
            for(let product of productList){
                if(product.getCategory() == categoryName && 
                    product.getSubCategory() == subCategoryName) products.push(product)
            }
        }
        else{
            for(let product of productList){
                if(product.getCategory() == categoryName) products.push(product)
            }
        }
        return products
    }
    getProductsByBrand(brand: string, productList: Product[]){
        let products: Product[] = []
        for(let product of productList){
            if(product.getBrand() == brand) products.push(product)
        }
        return products
    }
    filterProducts(size?: string, price?: { minPrice: number, maxPrice: number},
        category?: string, subCategory?: string, brand?: string){
            let result: Product[]

            let startFlag = false

            if(typeof size !== 'undefined'){
                startFlag = true
                result = this.getProductsBySize(size, this.products)
            }
            if(typeof price !== 'undefined'){
                if(startFlag){
                    result = this.getProductsByPrice(price.minPrice, price.maxPrice, result)
                }
                else{
                    startFlag = true
                    result = this.getProductsByPrice(price.minPrice, price.maxPrice, this.products)
                }
            }
            if(typeof category !== 'undefined'){
                if(typeof subCategory !== 'undefined'){
                    if(startFlag){
                        result = this.getProductsByCategory(category, result, subCategory)
                    }
                    else{
                        startFlag = true
                        result = this.getProductsByCategory(category, this.products, subCategory)
                    }
                }
                else{
                    if(startFlag){
                        result = this.getProductsByCategory(category, result)
                    }
                    else{
                        startFlag = true
                        result = this.getProductsByCategory(category, this.products)
                    }
                }
                
            }
            if(typeof brand !== 'undefined'){
                if(startFlag){
                    result = this.getProductsByBrand(brand, result)
                }
                else{
                    startFlag = true
                    result = this.getProductsByBrand(brand, this.products)
                }
            }
            return result
    }

}
import { Size } from './size.modal';

export class Product{
    private name: string
    private id: number
    private description: string
    private images: string[]
    private brand: string
    private category: string
    private subCategory: string
    private sizeList: Size[]
    private status: boolean
    constructor(){
        this.sizeList = []
    }

    // Get Methods
    getName(){ return this.name }
    getId(){ return this.id }
    getDescription(){ return this.description }
    getImages(){ return this.images }
    getBrand(){ return this.brand }
    getCategory(){ return this.category }
    getSubCategory(){ return this.subCategory }
    getStatus(){ return this.status }

    // Set Methods
    setName(name: string){
        this.name = name
    }
    setId(id: number){
        this.id = id
    }
    setDescription(description: string){
        this.description = description
    }
    setImages(images: string[]){
        this.images = images
    }
    setBrand(brand: string){
        this.brand = brand
    }
    setCategory(category: string){
        this.category = category
    }
    setSubCategory(subCategory: string){
        this.subCategory = subCategory
    }
    setStatus(status: boolean){
        this.status = status
    }



    // sizeList property related methods

    getSizeList(){ return this.sizeList }
    setSizeList(sizeList: Size[]){
        this.sizeList = sizeList
    }
    getSizeNamesList(){
        let sizes = []
        for(let size of this.sizeList){
            sizes.push(size.sizeName)
        }
        return sizes
    }
    getSize(size: string): Size{
        for(let s of this.sizeList){
            if(s.sizeName == size) return s
        }
    }
    checkSize(size: string): boolean{
        for(let s of this.sizeList){
            if(s.sizeName == size && s.availableQuantity > 0) return true
        }
        return false
    }
    checkPrice(minPrice: number, maxPrice: number): boolean{
        for(let s of this.sizeList){
            if(minPrice <= s.price && s.price >= maxPrice) return true
        }
        return false
    }
    sizesToString(){
        var sizeString: string = ''
        for(let size of this.sizeList){
            sizeString += (size.sizeName + ' ')
        }
        return sizeString
    }
    increaseSizeQuantity(size: string, quantity: number){
        for(let s of this.sizeList){
            if(s.sizeName == size){
                s.availableQuantity += quantity
            }
        }
    }
    decreaseSizeQuantity(size: string, quantity: number){
        for(let s of this.sizeList){
            if(s.sizeName == size){
                s.availableQuantity -= quantity
            }
        }
    }
}
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
    getSizeList(){ return this.sizeList }
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
    setSizeList(sizeList: Size[]){
        this.sizeList = sizeList
    }
    setStatus(status: boolean){
        this.status = status
    }

    // Add - on methods
    sizesToString(){
        var sizeString: string = ''
        for(let size of this.sizeList){
            sizeString += (size.sizeName + ' ')
        }
        return sizeString
    }
}
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
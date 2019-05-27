export class ProductDisplay{

    imageUrl: string
    name: string
    oldPrice: number
    newPrice: number
    discount: string
    sizes: string[]

    constructor(){
    }

    sizesToString(){
        let sizes = ''
        for(let size of this.sizes){
            sizes += size + ' '
        }
        return sizes
    }
}
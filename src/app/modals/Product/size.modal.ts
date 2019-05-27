export class Size{
    sizeName: string
    availableQuantity: number
    oldPrice: number
    newPrice: number
    discount: number //percent eg: 20% = 20
    readonly dateAdded: string
    dateModified: string
    status: boolean
    constructor(date: string){
        this.dateAdded = date
    }
}
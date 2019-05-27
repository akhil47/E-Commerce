export class Size{
    sizeName: string
    availableQuantity: number
    oldPrice: number
    newPrice: number
    discount: number
    readonly dateAdded: string
    dateModified: string
    status: boolean
    constructor(date: string){
        this.dateAdded = date
    }
}
import { Subject } from 'rxjs';
import { Customer } from '../Modals/Customer/customer.modal';
import { Address } from '../Modals/Customer/address.modal';

export class AccountService{

    customer: Customer

    mobileMenuStateChanged = new Subject<boolean>();
    mobileMenuItemSelectedState = new Subject<boolean>();
    addressEditStatus = new Subject<boolean>();

    addressUpdates = new Subject<Address[]>()
    addressEdit = new Subject<{address: Address, index: number, title: string, editMode: boolean}>()

    profileEdit = new Subject<Object>()

    wishListUpdates = new Subject<number[]>()
    
    constructor(){
        this.customer = new Customer()
        this.initCustomer()
        this.addressUpdates.next(this.customer.getAddresses())
    }
    initCustomer(){
        this.customer.setName('Akhilesh Lingala')
        this.customer.setMobileNo('91xxx xxxxx')
        this.customer.setMail('akhil@gmail.com')
        this.customer.setGender('Male')
        this.customer.setStatus(true)
        this.customer.setJoinedOn('27-05-2019')

        var addrs = [new Address(), new Address(), new Address(), new Address()]
        for(let i = 0; i < 4; i++){
            addrs[i].name = "Akhilesh Lingala"
            addrs[i].mobile = '91XXXXXXXX'
            addrs[i].doorNo = '12/Z, Sector - 10'
            addrs[i].area = 'Ukkunagaram'
            addrs[i].city = 'Visakhapatnam'
            addrs[i].state = 'Andhra Pradesh'
            addrs[i].pincode = '530036'
        }
        this.customer.setAddresses(addrs)
        this.customer.setWishlist([10, 1]) // set it dynamically
    }
    pushProfileEditData(data: Object){
        // Solution function after major headache :)
        setTimeout(()=>{
            this.profileEdit.next(data)
            //Timeout will be applied only to the code placed inside this anonymous function
        }, 50)
    }
    pushEditAddressData(addr: Address, i: number, header: string){
        // Solution function after major headache :)
        setTimeout(()=>{
            this.addressEdit.next({address: addr, index: i, title: header, editMode: true})
            //Timeout will be applied only to the code placed inside this anonymous function
        }, 50)
        
    }
    pushNewAddressData(header: string){
        // Solution function after major headache :)
        setTimeout(()=>{
            this.addressEdit.next({address: new Address(), index: 0, title: header, editMode: false})
            //Timeout will be applied only to the code placed inside this anonymous function
        }, 30)
    }
    updateAddress(address: Address, index: number){
        this.customer.updateAddress(address, index)
        this.addressUpdates.next(this.customer.getAddresses())
    }
    updateProfile(data: Object){
        this.customer.setName(data['name'])
        this.customer.setGender(data['gender'])
        this.customer.setMobileNo(data['mobileNo'])
        this.customer.setMail(data['mail'])
    }
    removeAddress(index: number){
        this.customer.removeAddress(index)
        this.addressUpdates.next(this.customer.getAddresses())
    }

    addItemToWishList(id: number){
        this.customer.addProductToWishlist(id)
        this.wishListUpdates.next(this.customer.getWishlist())
    }
    removeItemFromWishList(id: number){
        this.customer.removeProductFromWishlist(id)
        this.wishListUpdates.next(this.customer.getWishlist())
    }
}
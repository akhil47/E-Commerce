import { Subject } from 'rxjs';

export class DummyServer{
    private username: string = 'akhil@gmail.com'
    private password: string = '9177721444'

    private userLoggedIn: boolean = false  //Dummy

    authUpdates = new Subject<boolean>()

    signIn(id: string, pass: string){
        if(id == this.username && this.password == pass){
            this.userLoggedIn = true;
            this.authUpdates.next(true)
        }
        else{
            this.userLoggedIn =  false;
            this.authUpdates.next(false)
        }
        
    }
    signOut(){
        this.userLoggedIn  = false;
        this.authUpdates.next(false)
    }
    isLoggedIn(): boolean{
        console.log(this.userLoggedIn)
        return this.userLoggedIn
    }

}
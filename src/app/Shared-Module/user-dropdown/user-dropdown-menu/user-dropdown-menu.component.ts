import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DummyServer } from 'src/app/services/dummy-server.service';

@Component({
  selector: 'app-user-dropdown-menu',
  templateUrl: './user-dropdown-menu.component.html',
  styleUrls: ['./user-dropdown-menu.component.css']
})
export class UserDropdownMenuComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private server: DummyServer) { }

  ngOnInit() {
  }

  goToOrders(){
    this.router.navigate(['/account', 'my-orders', 'orders-list'])
  }
  goToWishlist(){
    this.router.navigate(['/wishlist'])
  }
  goToMyAddresses(){
    this.router.navigate(['/account', 'my-addresses', 'address-display'])
  }
  goToChangePassword(){
    this.router.navigate(['/account', 'change-password'])
  }
  onLogout(){
    this.server.signOut()
    this.router.navigate(['/login'])
  }
}

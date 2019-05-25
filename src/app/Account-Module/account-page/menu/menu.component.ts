import { Component, OnInit, Input } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  
  constructor(private accountService: AccountService) { }

  ngOnInit() {
  }

  onSelect(){
    this.accountService.mobileMenuStateChanged.next(true)
  }

}

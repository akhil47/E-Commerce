import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }
  onSave(){
    this.router.navigate(['profile-display'], { relativeTo: this.route.parent })
  }
  onCancel(){
    this.router.navigate(['profile-display'], { relativeTo: this.route.parent })
  }
}

import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  @Output() popupClosed = new EventEmitter<boolean>()

  constructor() { }

  ngOnInit() {
  }
}

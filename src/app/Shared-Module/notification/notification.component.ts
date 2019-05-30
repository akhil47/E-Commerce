import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  @Input() text: string = ''
  @Output() messageRead = new EventEmitter<boolean>()
  
  constructor() { }

  ngOnInit() {
  }
  done(){
    this.messageRead.emit(true)
  }
}

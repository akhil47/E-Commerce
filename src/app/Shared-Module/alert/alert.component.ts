import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  @Input() text: string = ''
  @Output() alertChoice = new EventEmitter<boolean>()

  constructor() { }

  ngOnInit() {
  }
  accept(){
    this.alertChoice.emit(true)
  }
  decline(){
    this.alertChoice.emit(false)
  }
}

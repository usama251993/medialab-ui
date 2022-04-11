import { Component, OnInit, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-cd-navbar',
  templateUrl: './cd-navbar.component.html',
  styleUrls: ['./cd-navbar.component.scss']
})
export class CdNavbarComponent implements OnInit {

  @Output() triggerNavigate$: EventEmitter<void>

  constructor() {
    this.triggerNavigate$ = new EventEmitter<void>()
  }

  ngOnInit(): void { }

  navigate() {
    this.triggerNavigate$.emit()
  }

}

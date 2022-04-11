import { Component, OnInit, EventEmitter, Output } from '@angular/core'
import { APP_ROUTES } from 'src/app/app.routes'

@Component({
  selector: 'app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.scss']
})
export class AppHomeComponent implements OnInit {

  @Output() triggerNavigate$: EventEmitter<{ path: string }>

  sMediaLab: string
  sDeduplication: string

  constructor() {
    this.triggerNavigate$ = new EventEmitter<{ path: string }>()
    this.sMediaLab = APP_ROUTES.MEDIALAB
    this.sDeduplication = APP_ROUTES.DEDUPLICATION
  }

  ngOnInit(): void { }

  navigate(_: { path: string }) {
    this.triggerNavigate$.emit(_)
  }

}

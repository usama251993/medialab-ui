import { Component, OnInit } from '@angular/core'
import { APP_ROUTES } from 'src/app/app.routes'
import { Router } from '@angular/router'

@Component({
  selector: 'app-cd-navbar-container',
  template: `<app-cd-navbar (triggerNavigate$) = "triggerNavigate()"></app-cd-navbar>`
})
export class CdNavbarContainerComponent implements OnInit {

  constructor(
    private _router: Router
  ) { }

  ngOnInit(): void { }

  triggerNavigate() {
    this._router.navigate([APP_ROUTES.DEDUPLICATION])
  }

}

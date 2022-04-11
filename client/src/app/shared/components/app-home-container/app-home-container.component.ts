import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-home-container',
  template: `<app-home (triggerNavigate$) = "triggerNavigate($event)"></app-home>`
})
export class AppHomeContainerComponent implements OnInit {

  constructor(
    private _router: Router
  ) { }

  ngOnInit(): void { }

  triggerNavigate(_: { path: string }) {
    this._router.navigate([_.path])
  }

}

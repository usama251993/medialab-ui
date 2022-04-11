import { Component, OnInit } from '@angular/core'

import { AppStyleService } from '@shared/services/app-style/app-style.service'

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`
})
export class AppComponent implements OnInit {
  title: string = 'lti-medialabs-ui'

  constructor(
    private _colorService: AppStyleService
  ) { }

  ngOnInit(): void {
    this._colorService.load()
  }

}

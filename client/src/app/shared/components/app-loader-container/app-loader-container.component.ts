import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-loader-container',
  template: `<app-loader [size]="loaderSize"></app-loader>`
})
export class AppLoaderContainerComponent implements OnInit {

  @Input() size: 'small' | 'medium' | 'large' | 'default'
  loaderSize: string

  constructor() { }

  ngOnInit(): void {
    if (!this.size) this.loaderSize = 'loader-default'
    else this.loaderSize = `loader-${this.size}`
  }
}

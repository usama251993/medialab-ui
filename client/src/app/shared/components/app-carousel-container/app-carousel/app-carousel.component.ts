import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core'
import { NavigationExtras } from '@angular/router'

import { AppCarouselAssetsModel, AppCarouselConfig } from '@shared/models/components/carousel/app-carousel.model'

@Component({
  selector: 'app-carousel',
  templateUrl: './app-carousel.component.html',
  styleUrls: ['./app-carousel.component.scss']
})
export class AppCarouselComponent implements OnInit {

  @Input() assets: AppCarouselAssetsModel
  @Input() config: AppCarouselConfig

  @Output() triggerNavigate$: EventEmitter<{ path: string[], extras: NavigationExtras }> = new EventEmitter<{ path: string[], extras: NavigationExtras }>()

  constructor() { }

  ngOnInit(): void { }

  triggerNavigate(): void {
    this.triggerNavigate$.emit()
  }

}

import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-loader',
  templateUrl: './app-loader.component.html',
  styleUrls: ['./app-loader.component.scss']
})
export class AppLoaderComponent implements OnInit {

  @Input() size: string

  constructor() { }

  ngOnInit(): void { }

}

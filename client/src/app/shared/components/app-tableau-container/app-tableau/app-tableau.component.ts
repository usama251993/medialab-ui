import { Component, ElementRef, OnInit, ViewChild } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

declare const tableau: any

@Component({
  selector: 'app-tableau',
  template: `<div class="d-flex justify-content-center" #tableauViz></div>
`
})
export class AppTableauComponent implements OnInit {

  private _viz: any
  private _vizOptions: { [key: string]: any }
  private _url: string


  private _vizElement$: BehaviorSubject<HTMLDivElement> = new BehaviorSubject<HTMLDivElement>(null)

  @ViewChild('tableauViz', { static: false })
  private set _vizRef(_: ElementRef) { this._vizElement$.next(<HTMLDivElement>_.nativeElement) }

  constructor() { }

  ngOnInit(): void {
    // this._url = 'https://public.tableau.com/views/TestData_16056214805340/Sheet1'
    this._url = 'https://public.tableau.com/views/PerceptualHashing/SimilarityDashbaord'

    this._vizOptions = {
      onFirstInteractive: () => { }
    }

    if (!!this._viz) this._viz.dispose()

    this._vizElement$.subscribe(_ => {
      if (!!_) this._viz = new tableau.Viz(_, this._url, { ...this._vizOptions })
    })
  }

}

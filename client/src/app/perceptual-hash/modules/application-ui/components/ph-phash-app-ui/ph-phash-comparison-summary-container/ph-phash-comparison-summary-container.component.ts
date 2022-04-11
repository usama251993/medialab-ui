import { Component, Input, OnInit } from '@angular/core'

import { PhComparisonDataPointModel, PhMatrixDataPointModel } from '@ph-app/models/ph-phash-app-ui/phash.model'

@Component({
  selector: 'app-ph-phash-comparison-summary-container',
  template: `<app-ph-phash-comparison-summary [chartData] = "chartData"></app-ph-phash-comparison-summary>`
})
export class PhPhashComparisonSummaryContainerComponent implements OnInit {

  // @Input() chartData: PhComparisonDataPointModel
  @Input() chartData: PhMatrixDataPointModel

  constructor() { }

  ngOnInit(): void {
  }

}

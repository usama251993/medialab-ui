import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core'
import { BehaviorSubject, timer } from 'rxjs'

import { PhMatrixDataModel, PhMatrixDataPointModel } from '@ph-app/models/ph-phash-app-ui/ph-phash-overview/ph-phash-matrix.model'
import * as fromD3 from 'd3'

type _PHashMouseEvent = MouseEvent | any
type _PhMatrixDataPointEvent = _PhMatrixDataPoint | any
type _PhMatrixDataPoint = {
  x: number
  y: number
  data: {
    meanHammingDistance: number
    similarityPercentage: number
    inference: string
  }
}
type _PhDimension = {
  width: number
  height: number
  margin: {
    top: number
    right: number
    bottom: number
    left: number
  }
}

type _PhMatrixDimensions = {
  graph: _PhDimension,
  legend: _PhDimension
}

@Component({
  selector: 'app-ph-matrix',
  templateUrl: './ph-matrix.component.html',
  styleUrls: ['./ph-matrix.component.scss']
})
export class PhMatrixComponent implements OnInit {

  @Input() matrixData: PhMatrixDataModel

  figureContainer$: BehaviorSubject<HTMLDivElement>

  @ViewChild('figureContainer', { static: false }) private set _graph(_: HTMLDivElement) {
    this.figureContainer$.next(_)
  }

  inferences: string[] = ['Exact Match', 'Very Close Perceptibility', 'Close Perceptibility', 'Less Perceptibility']

  private _dimensions: _PhMatrixDimensions = {
    graph: {
      margin: { top: 96, right: 24, bottom: 24, left: 96 },
      width: 808,
      height: 808
    },
    legend: {
      margin: { top: 96, right: 24, bottom: 24, left: 12 },
      width: 196,
      height: 808
    }
  }

  @Output() triggerDataPointUpdate$: EventEmitter<PhMatrixDataPointModel>

  constructor() {
    this.figureContainer$ = new BehaviorSubject<HTMLDivElement>(null)
    this.triggerDataPointUpdate$ = new EventEmitter<PhMatrixDataPointModel>()
  }

  ngOnInit(): void {
    // this.figureContainer$.subscribe(_ => { if (!!_) this._matrix(this.matrixData) })
    timer(1000).subscribe(_ => this._matrix(this.matrixData))
  }

  private _createSVG(
    _figure: fromD3.Selection<HTMLElement, unknown, HTMLElement, any>,
    _dimensions: _PhDimension
  ): fromD3.Selection<SVGGElement, unknown, HTMLElement, any> {
    const _svg: fromD3.Selection<SVGGElement, unknown, HTMLElement, any> = _figure
      .append('svg')
      .attr('id', 'divergence-svg')
      .attr('width', _dimensions.width)
      .attr('height', _dimensions.height)
      .append('g')
      .style('transform', `translate(${_dimensions.margin.left}px, ${_dimensions.margin.top}px)`)
    return _svg
  }

  private _matrix(matrixData: PhMatrixDataModel): void {

    const _graphDimensions: _PhDimension = { ...this._dimensions.graph }
    const _legendDimensions: _PhDimension = { ...this._dimensions.legend }
    let _matrix: _PhMatrixDataPoint[][] = []

    const _maxMHD: number = Math.max(...matrixData.comparisons.map(_ => _.meanHammingDistance))
    const _domain: number = 16

    const _graphFigure: fromD3.Selection<HTMLElement, unknown, HTMLElement, any> = fromD3.select('figure#graph')
    const _graph: fromD3.Selection<SVGGElement, unknown, HTMLElement, any> = this._createSVG(_graphFigure, _graphDimensions)

    matrixData.videos.forEach((_, i) => { _matrix[i] = fromD3.range(matrixData.videos.length).map(__ => ({ x: __, y: i, data: null })) })
    matrixData.comparisons.forEach(_ => {
      _matrix[_.inspectedVideoIndex][_.referenceVideoIndex].data = {
        meanHammingDistance: _.meanHammingDistance,
        similarityPercentage: _.similarityPercentage,
        inference: _.inference
      }
    })

    const _matrixScale = fromD3.scaleBand<number>()
      .domain(fromD3.range(matrixData.videos.length))
      .range([0, (_graphDimensions.width - _graphDimensions.margin.left)])
      .padding(0.01)


    const _colorScale: fromD3.ScaleSequential<string> = fromD3.scaleSequential(fromD3.interpolateRdYlGn)
      .domain([_domain, 0])

    const _rows = _graph.selectAll('g.ph-matrix-row')
      .data(_matrix)
      .enter().append('g')
      .attr('class', 'ph-matrix-row')

    const _columns = _graph.selectAll('g.ph-matrix-column')
      .data(_matrix)
      .enter().append('g')
      .attr('class', 'ph-matrix-column')

    const _rowLabelsFo = _rows.append('foreignObject')
      .attr('class', 'ph-row-label')
      .attr('x', (_graphDimensions.margin.left * -1))
      .attr('y', (_, i) => _matrixScale(i))
      .attr('width', _graphDimensions.margin.left)
      .attr('height', _matrixScale.bandwidth())

    _rowLabelsFo
      .append('xhtml:div')
      .attr('xmlns', 'http://www.w3.org/1999/xhtml')
      .attr('class', 'd-flex align-items-center h-100 w-100 py-1')
      .append('xhtml:p')
      .attr('class', 'd-flex align-items-center w-100 h-100 m-0 text-break')
      .attr('xmlns', 'http://www.w3.org/1999/xhtml')
      .html((_, i) => matrixData.videos.find(__ => __.inspectedVideoIndex === _[i].x).title)

    const _columnLabelsFo = _columns.append('foreignObject')
      .attr('class', 'ph-column-label')
      .attr('x', 8)
      .attr('y', (_, i) => _matrixScale(i))
      .attr('transform', `rotate(-90)`)
      .attr('width', _graphDimensions.margin.top)
      .attr('height', _matrixScale.bandwidth())

    _columnLabelsFo
      .append('xhtml:div')
      .attr('xmlns', 'http://www.w3.org/1999/xhtml')
      .attr('class', 'd-flex align-items-center h-100 w-100 py-1')
      .append('xhtml:p')
      .attr('class', 'd-flex align-items-center w-100 h-100 m-0 text-break')
      .attr('xmlns', 'http://www.w3.org/1999/xhtml')
      .html((_, i) => matrixData.videos.find(__ => __.inspectedVideoIndex === _[i].y).title)

    const _graphTooltip = _graphFigure
      .append('div')
      .attr('id', 'chart-tooltip')
      .style('position', 'fixed')
      .style('display', 'none')
      .style('justify-content', 'center')
      .style('background-color', '#616161e6')
      .style('color', '#fafafa')
      .style('border-radius', '4px')
      .style('padding', '4px 8px')
      .style('font-size', '16px')
      .style('z-index', '2')
      .style('box-shadow', '0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12)')

    const _squares = _rows.selectAll('rect.ph-matrix-cell')
      .data(_ => _)
      .enter().append('rect')
      .attr('class', 'ph-matrix-cell')

      .attr('x', _ => _matrixScale(_.x))
      .attr('y', _ => _matrixScale(_.y))
      .attr('width', _matrixScale.bandwidth())
      .attr('height', _matrixScale.bandwidth())

      .style('fill', _ => _colorScale(_.data.meanHammingDistance))

      .on('mouseenter', ($: _PHashMouseEvent, _: _PhMatrixDataPointEvent) => {
        _graphTooltip.style('display', 'flex')
        const _inspectedVideo: string = matrixData.videos.find(__ => __.inspectedVideoIndex === (<_PhMatrixDataPoint>_).x).title
        const _referenceVideo: string = matrixData.videos.find(__ => __.inspectedVideoIndex === (<_PhMatrixDataPoint>_).y).title
        const _meanHammingDistance: number = (<_PhMatrixDataPoint>_).data.meanHammingDistance
        const _htmlString = `<div class='d-flex flex-column'>
        <p class='m-0'>${_inspectedVideo} compared with ${_referenceVideo}</p>
        <p class='m-0'>Mean Hamming Distance: ${_meanHammingDistance}</p>
        </div>`
        // const _boundingRect: DOMRect = (<SVGRectElement>((<MouseEvent>$).currentTarget)).getBoundingClientRect()
        // _graphTooltip.style('top', `${(_boundingRect.top - _graphDimensions.margin.bottom)}px`)
        // _graphTooltip.style('left', `${_boundingRect.x}px`)
        _graphTooltip.html(_htmlString)

      })

      .on('mousemove', ($: _PHashMouseEvent) => {
        _graphTooltip
          .style('left', ($.clientX + 20) + 'px')
          .style('top', ($.clientY) + 20 + 'px')
      })

      .on('mouseleave', _ => { _graphTooltip.style('display', 'none') })

      .on('click', ($: _PHashMouseEvent, _: _PhMatrixDataPointEvent) => {
        _squares
          .style('stroke', '#00000000')
          .style('stroke-width', 0);

        (<SVGRectElement>(<MouseEvent>$).target).style.stroke = `#121212`;
        (<SVGRectElement>(<MouseEvent>$).target).style.strokeWidth = `2.5`

        this.triggerNavigate(_)
      })

    const _legendFigure: fromD3.Selection<HTMLElement, unknown, HTMLElement, any> = fromD3.select('figure#legend')
    const _legend = this._createSVG(_legendFigure, _legendDimensions)

    const _legendTooltip = _legendFigure
      .append('div')
      .attr('id', 'chart-tooltip')
      .style('position', 'fixed')
      .style('display', 'none')
      .style('justify-content', 'center')
      .style('background-color', '#616161e6')
      .style('color', '#fafafa')
      .style('border-radius', '4px')
      .style('padding', '4px 8px')
      .style('font-size', '16px')
      .style('z-index', '2')
      .style('box-shadow', '0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12)')

    const _legendGroup = _legend.append('g')
      .attr('class', 'ph-graph-legend')

    const _legendScale = _legendGroup.append('g')
      .attr('class', 'ph-legend-point-group')

    _legendScale.selectAll('rect.ph-legend-point')
      .data(fromD3.range(_domain))
      .enter().append('rect')
      .attr('class', 'ph-legend-point')
      .attr('x', 0)
      .attr('y', (_, i) => i * (_legendDimensions.height - _legendDimensions.margin.top) / _domain)
      .attr('width', _legendDimensions.margin.right)
      .attr('height', _legendDimensions.height / _domain)
      .attr('fill', _ => _colorScale(_))
      .attr('stroke', '#00000000')
      .attr('stroke-width', '0px')

      .on('mouseenter', ($: _PHashMouseEvent, _: number) => {
        _legendTooltip.style('display', 'flex')
        const _htmlString = `<div class='d-flex flex-column justify-content-center align-items-center'>
        <p class='m-0'>Mean Hamming Distance Range</p>
        <p class='m-0 text-monospace'>[${_.toFixed(2)} - ${(_ + 1).toFixed(2)}]</p>
        </div>`
        const _boundingRect: DOMRect = (<SVGRectElement>((<MouseEvent>$).currentTarget)).getBoundingClientRect()
        _legendTooltip.style('height', `${_boundingRect.height}px`)
        _legendTooltip.style('top', `${_boundingRect.top}px`)
        _legendTooltip.style('left', `${_boundingRect.right + _legendDimensions.margin.left}px`)
        _legendTooltip.html(_htmlString)

      })

      .on('mouseleave', _ => { _legendTooltip.style('display', 'none') })
  }

  triggerNavigate(_: _PhMatrixDataPoint) {
    this.triggerDataPointUpdate$.emit({
      index: this.matrixData.comparisons.findIndex(__ => ((__.inspectedVideoIndex === _.x) && (__.referenceVideoIndex === _.y))),
      inspectedVideo: this.matrixData.videos.find(__ => __.inspectedVideoIndex === _.x),
      referenceVideo: this.matrixData.videos.find(__ => __.inspectedVideoIndex === _.y),
      meanHammingDistance: _.data.meanHammingDistance,
      similarityPercentage: _.data.similarityPercentage,
      inference: _.data.inference
    })
  }
}

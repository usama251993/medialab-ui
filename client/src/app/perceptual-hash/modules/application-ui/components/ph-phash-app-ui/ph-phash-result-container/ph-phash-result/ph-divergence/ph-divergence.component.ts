import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core'
import { BehaviorSubject, timer } from 'rxjs'

import { PhComparisonDataPointModel } from '@ph-app/models/ph-phash-app-ui/phash.model'
import * as fromD3 from 'd3'

type _PHashMouseEvent = MouseEvent | any

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

type _PhDivergenceDimensions = {
  graph: _PhDimension,
  legend: _PhDimension
}

@Component({
  selector: 'app-ph-divergence',
  templateUrl: './ph-divergence.component.html',
  styleUrls: ['./ph-divergence.component.scss']
})
export class PhDivergenceComponent implements OnInit {

  private _chartData$: BehaviorSubject<PhComparisonDataPointModel>

  // @ViewChild('divergenceFigue') divergenceFigure: ElementRef

  @Input()
  set chartData(value: PhComparisonDataPointModel) { this._chartData$.next(value) }
  get chartData(): PhComparisonDataPointModel { return this._chartData$.getValue() }

  hammingDistance: number = 0
  frameNumber: number = 0

  // private _margin = 20;
  // private _width = 808 - (this._margin * 2);
  // private _height = 296 - (this._margin * 2);

  private _dimensions: _PhDivergenceDimensions = {
    graph: {
      margin: { top: 20, right: 20, bottom: 36, left: 20 },
      width: 800,
      height: 256
    },
    legend: {
      margin: { top: 20, right: 20, bottom: 80, left: 20 },
      width: 400,
      height: 100
    }
  }

  constructor(
    private _renderer: Renderer2
  ) {
    this._chartData$ = new BehaviorSubject<PhComparisonDataPointModel>(null)
  }

  ngOnInit(): void {
    timer(1000).subscribe(_ => { this._divergeCanvas(this.chartData) })
  }

  // private _createSVG(_figure: fromD3.Selection<HTMLElement, unknown, HTMLElement, any>): fromD3.Selection<SVGGElement, unknown, HTMLElement, any> {
  //   const _svg: fromD3.Selection<SVGGElement, unknown, HTMLElement, any> = _figure
  //     .append('svg')
  //     .attr('id', 'divergence-svg')
  //     .attr('width', this._width + (this._margin * 2))
  //     .attr('height', this._height + (this._margin * 2))
  //     .append('g')
  //     .style('transform', `translate(${this._margin}px, ${this._margin}px)`)

  //   return _svg
  // }

  private _createSVG(
    _figure: fromD3.Selection<HTMLElement, unknown, HTMLElement, any>,
    _dimensions: _PhDimension
  ): fromD3.Selection<SVGGElement, unknown, HTMLElement, any> {
    const _svg: fromD3.Selection<SVGGElement, unknown, HTMLElement, any> = _figure
      .append('svg')
      // .attr('id', 'divergence-svg')
      .attr('width', _dimensions.width)
      .attr('height', _dimensions.height)
    // .append('g')
    // .style('transform', `translate(${_dimensions.margin.left}px, ${_dimensions.margin.top}px)`)
    return _svg
  }

  private _divergeCanvas(divergeData: PhComparisonDataPointModel) {

    // Graph Starts

    // const _figure: fromD3.Selection<HTMLElement, unknown, HTMLElement, any> = fromD3.select('figure#graph')
    // const _svg: fromD3.Selection<SVGGElement, unknown, HTMLElement, any> = this._createSVG(_figure)
    // const _maxYMagnitude = Math.max(...divergeData.hammingDistances)
    // const _dimensions: { width: number; height: number; margin: number } = { width: this._width, height: this._height, margin: this._margin }

    const _graphDimensions: _PhDimension = { ...this._dimensions.graph }

    // const _maxMHD: number = Math.max(...chartData.comparisons.map(_ => _.meanHammingDistance))
    const _maxYMagnitude = Math.max(...divergeData.hammingDistances) || 16
    const _domain: number = 16

    const _graphFigure: fromD3.Selection<HTMLElement, unknown, HTMLElement, any> = fromD3.select('figure#graph')
    const _graph: fromD3.Selection<SVGGElement, unknown, HTMLElement, any> = this._createSVG(_graphFigure, _graphDimensions)
      .attr('id', 'divergence-svg')
      // .style('position', 'relative')
      .append('g')
      .attr('id', 'svg-content-group')
      .attr('transform', `translate(${_graphDimensions.margin.left}, ${_graphDimensions.margin.top})`)

    const _graphCanvas: fromD3.Selection<HTMLCanvasElement, unknown, HTMLElement, any> = _graphFigure
      .append('canvas')
      .attr('id', 'data-point-canvas')
      .attr('width', `${_graphDimensions.width - (_graphDimensions.margin.left + _graphDimensions.margin.right)}px`)
      // .attr('width', `${_graphDimensions.width}`)
      .attr('height', `${_graphDimensions.height - (_graphDimensions.margin.top + _graphDimensions.margin.bottom)}px`)
      // .attr('height', `${_graphDimensions.height}`)
      .style('position', 'absolute')
      .style('top', `${_graphDimensions.margin.top}px`)
      .style('left', `${_graphDimensions.margin.left}px`)

    const _context: CanvasRenderingContext2D = _graphCanvas.node().getContext('2d')
    const _templateBase: Element = this._renderer.createElement('diverge-data-holder')
    const _template: fromD3.Selection<Element, unknown, null, undefined> = fromD3.select(_templateBase)

    // const _legendCanvas: fromD3.Selection<HTMLCanvasElement, unknown, HTMLElement, any> = fromD3.select('figure#graph')
    //   .append('canvas')
    //   .attr('id', 'data-point-canvas')
    //   .attr('width', `${_graphDimensions.width / 3}px`)
    //   .attr('height', `48px`)
    //   .style('position', 'absolute')
    //   .style('top', `${_graphDimensions.margin}px`)
    //   .style('right', `${_graphDimensions.margin}px`)
    //   .style('imageRendering', 'pixelated')

    // const _legendContext: CanvasRenderingContext2D = _legendCanvas.node().getContext('2d')

    // function _legend(color, n: number = 512) {
    //   _legendContext.fillStyle = '#616161e6'
    //   _legendContext.font = '13px sans-serif'
    //   _legendContext.textAlign = 'center'
    //   _legendContext.fillRect(0, 0, _graphDimensions.width / 3, 64)

    //   for (let i = 0; i < n; ++i) {
    //     _legendContext.fillStyle = color(i / (n - 1))
    //     _legendContext.fillRect(_graphDimensions.width / (3 * n) * i, 4, _graphDimensions.width / (3 * n), 12)
    //     _legendContext.fillStyle = '#fafafa'
    //     _legendContext.fillText(`${i}`, (_graphDimensions.width / (3 * n)) * (i + 0.5), 30)
    //   }

    //   _legendContext.fillText('Hamming Distance', _graphDimensions.width / 6, 44)
    // }

    // _legend(fromD3.scaleSequential(fromD3.interpolateRdYlGn).domain([1, 0]), 16)

    const _colorScale: fromD3.ScaleSequential<string> = fromD3.scaleSequential(fromD3.interpolateRdYlGn)
      .domain([_domain, 0])

    const xBand = fromD3.scaleBand<number>()
      .domain(divergeData.hammingDistances.map((_, i) => i + 1))
      .range([0, _graphDimensions.width - (_graphDimensions.margin.left + _graphDimensions.margin.right)])

    const xScale = fromD3.scaleLinear()
      .domain([0, divergeData.hammingDistances.length + 1])
      .range([0, _graphDimensions.width - (_graphDimensions.margin.left + _graphDimensions.margin.right)])

    const xAxis = _graph
      .append('g')
      .attr('id', 'x-axis')
      .style('font', '16px sans-serif')
      // .style('font-weight', 'bold')
      // .attr('transform', `translate(0, ${_graphDimensions.height - _graphDimensions.margin.bottom})`)
      .attr('transform', `translate(0, ${_graphDimensions.height - (_graphDimensions.margin.top + _graphDimensions.margin.bottom)})`)
      .call(fromD3.axisBottom(xScale))

    const yScale = fromD3.scaleLinear<number>()
      .range([_graphDimensions.height, 0])
      .domain([0, _domain])

    _graphFigure.call(fromD3.zoom()
      .scaleExtent([1, divergeData.hammingDistances.length / divergeData.inspectedVideo.fps])
      .translateExtent([
        [0, 0],
        [_graphDimensions.width - (_graphDimensions.margin.left + _graphDimensions.margin.right), _graphDimensions.height],
      ])
      .extent([
        [0, 0],
        [_graphDimensions.width - (_graphDimensions.margin.left + _graphDimensions.margin.right), _graphDimensions.height],
      ])
      .on('zoom', zoom))

    // _canvas.on('mousemove', ($, _, i) => { })

    // function draw(clearCanvas: boolean): void {
    function draw(): void {
      // if (clearCanvas) _context.clearRect(0, 0, _graphDimensions.width, _graphDimensions.height)
      _context.clearRect(0, 0, _graphDimensions.width - (_graphDimensions.margin.left + _graphDimensions.margin.right), _graphDimensions.height - (_graphDimensions.margin.top + _graphDimensions.margin.bottom))

      const _dataPoints = _template.selectAll('diverge-data.data-point')

      _dataPoints.each((_, i, d) => {
        const _node: fromD3.Selection<any, unknown, null, undefined> = fromD3.select(d[i])

        _context.fillStyle = _node.attr('fillStyle')
        _context.strokeStyle = _node.attr('fillStyle')

        _context.fillRect(
          (+_node.attr('x')),
          (+_node.attr('y')),
          (+_node.attr('width')),
          (+_node.attr('height'))
        )

        /* Uncomment if haze is required to be removed */
        // _context.lineWidth = _dimensions.width / d.length
        // _context.strokeRect(
        //   (+_node.attr('x')),
        //   (+_node.attr('y')),
        //   (+_node.attr('width')),
        //   (+_node.attr('height'))
        // )
      })
    }

    // function chunkData(dataSection: PhComparisonDataPointModel, chunkSize: number): number[][] {
    //   const _: number[][] = []
    //   for (var i = 0; i < dataSection.hammingDistances.length; i += chunkSize) {
    //     _.push(dataSection.hammingDistances.slice(i, i + chunkSize))
    //   }
    //   return _
    // }

    // const _chunkSize: number = 100
    // const _dataPool = chunkData(divergeData, _chunkSize)
    // let _poolPosition: number = 0
    // let _iterator: number

    function dataBind(divergeData: number[]) {
      // function dataBind(dataPool: number[][], chunkSize: number) {
      // _template.selectAll('diverge-data.data-point')
      //   .data(dataPool[_poolPosition])
      //   .join('diverge-data')
      //   .attr('class', 'data-point')
      //   .attr('x', (_, i, d) => xScale((_poolPosition * chunkSize) + (i + 1)))
      //   .attr('y', _ => yScale(_maxYMagnitude))
      //   .attr('width', xBand.bandwidth())
      //   .attr('height', (_, i, d) => yScale(0) - yScale(_maxYMagnitude))
      //   .attr('fillStyle', _ => _colorScale(_))
      _template.selectAll('diverge-data.data-point')
        .data(divergeData)
        .join('diverge-data')
        .attr('class', 'data-point')
        .attr('x', (_, i, d) => xScale((i)))
        .attr('y', _ => yScale(_domain))
        .attr('width', xBand.bandwidth())
        .attr('height', (_, i, d) => yScale(0) - yScale(_domain))
        .attr('fillStyle', _ => _colorScale(_))

      // draw(false)
      draw()

      // _poolPosition += 1
      // if (_poolPosition >= _dataPool.length) {
      //   _template.selectAll('diverge-data.data-point')
      //     .data(divergeData.hammingDistances)
      //     .join('diverge-data')
      //     .attr('class', 'data-point')
      //     .attr('x', (_, i, d) => xScale((_poolPosition * chunkSize) + (i + 1)))
      //     .attr('y', _ => yScale(_maxYMagnitude))
      //     .attr('width', xBand.bandwidth())
      //     .attr('height', (_, i, d) => yScale(0) - yScale(_maxYMagnitude))
      //     .attr('fillStyle', _ => _colorScale(_))
      //   clearInterval(_iterator)
      // }

    }

    dataBind(divergeData.hammingDistances)
    // _iterator = setInterval(() => { dataBind(_dataPool, _chunkSize) }, 250)

    function zoom($: fromD3.D3ZoomEvent<HTMLCanvasElement, { hammingDistance: number; frameNumber: number }>) {
      xAxis.call(fromD3.axisBottom($.transform.rescaleX(xScale)))

      _context.save()
      _context.clearRect(0, 0, _graphDimensions.width, _graphDimensions.height)
      _context.translate($.transform.x, 0)
      _context.scale($.transform.k, 1)
      // draw(true)
      draw()
      _context.restore()
    }

    // Graph Ends

    // Legend starts

    const _legendDimensions: _PhDimension = { ...this._dimensions.legend }

    const _legendFigure: fromD3.Selection<HTMLElement, unknown, HTMLElement, any> = fromD3.select('figure#legend')
    const _legend = this._createSVG(_legendFigure, _legendDimensions)
      .attr('id', 'legend-svg')


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
      .style('font-size', '12px')
      .style('z-index', '2')
      .style('box-shadow', '0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12)')

    const _legendGroup = _legend.append('g')
      .attr('class', 'ph-graph-legend')
    // .attr('transform', `translate(${_legendDimensions.margin.top}, ${_legendDimensions.margin.left})`)

    const _legendScale = _legendGroup.append('g')
      .attr('class', 'ph-legend-point-group')

    _legendScale.selectAll('rect.ph-legend-point')
      .data(fromD3.range(_domain + 1))
      .enter().append('rect')
      .attr('class', 'ph-legend-point')
      .attr('x', (_, i) => i * (_legendDimensions.width - (_legendDimensions.margin.right + _legendDimensions.margin.left)) / _domain)
      .attr('y', _legendDimensions.margin.top)
      .attr('width', (_, i) => (_legendDimensions.width - (_legendDimensions.margin.right + _legendDimensions.margin.left)) / _domain)
      .attr('height', _legendDimensions.height - _legendDimensions.margin.bottom)
      .attr('fill', _ => _colorScale(_))
      .attr('stroke', '#00000000')
      .attr('stroke-width', '0px')

    // .on('mouseenter', ($: _PHashMouseEvent, _: number) => {
    //   _legendTooltip.style('display', 'flex')
    //   const _htmlString = `<div class='d-flex flex-column justify-content-center align-items-center'>
    //   <p class='m-0'>Mean Hamming Distance Range</p>
    //   <p class='m-0 text-monospace'>[${_.toFixed(2)} - ${(_ + 1).toFixed(2)}]</p>
    //   </div>`
    //   const _boundingRect: DOMRect = (<SVGRectElement>((<MouseEvent>$).currentTarget)).getBoundingClientRect()
    //   _legendTooltip.style('height', `${_boundingRect.height}px`)
    //   _legendTooltip.style('top', `${_boundingRect.top}px`)
    //   _legendTooltip.style('left', `${_boundingRect.right + _legendDimensions.margin.left}px`)
    //   _legendTooltip.html(_htmlString)

    // })

    // .on('mouseleave', _ => { _legendTooltip.style('display', 'none') })

    const _legendLabel = _legendGroup.append('g')
      .attr('class', 'ph-legend-label-group')

    _legendLabel.selectAll('text.ph-legend-point-label')
      .data(fromD3.range(_domain + 1))
      .enter().append('text')
      .attr('class', 'ph-legend-point-label')
      .style('font', '16px sans-serif')
      .attr('x', (_, i) => (i + 0.25) * (_legendDimensions.width - (_legendDimensions.margin.right + _legendDimensions.margin.left)) / _domain)
      .attr('y', _legendDimensions.margin.bottom - _legendDimensions.margin.top)
      .text(_ => _)

    _legendLabel.append('text')
      .attr('x', (_legendDimensions.width - (_legendDimensions.margin.right + _legendDimensions.margin.left)) / 2)
      .attr('y', _legendDimensions.margin.bottom)
      .attr('text-anchor', 'middle')
      .text('Hamming Distance Values')

  }

}

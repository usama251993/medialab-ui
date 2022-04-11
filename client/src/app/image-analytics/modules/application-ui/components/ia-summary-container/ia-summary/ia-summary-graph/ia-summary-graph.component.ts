import { Component, Input, OnInit } from '@angular/core'
import { BehaviorSubject, timer } from 'rxjs'

import * as fromD3 from 'd3'

type _IaMouseEvent = MouseEvent | any
type _IaPieData = { name: string; value: number } | any

@Component({
  selector: 'app-ia-summary-graph',
  templateUrl: './ia-summary-graph.component.html',
  styleUrls: ['./ia-summary-graph.component.scss']
})
export class IaSummaryGraphComponent implements OnInit {

  private _chartData$: BehaviorSubject<{ name: string; value: number }[]>

  @Input()
  set chartData(value: { name: string; value: number }[]) { this._chartData$.next(value) }
  get chartData(): { name: string; value: number }[] { return this._chartData$.getValue() }

  private _svg: fromD3.Selection<SVGGElement, unknown, HTMLElement, any>
  private _margin = 20;
  private _width = 320 - (this._margin * 2);
  private _height = 320 - (this._margin * 2);

  constructor() {
    this._chartData$ = new BehaviorSubject<{ name: string; value: number }[]>([])
  }

  ngOnInit(): void {
    timer(1000).subscribe(_ => { this._pie(this.chartData) })
  }

  private _createSVG(_figure: fromD3.Selection<HTMLElement, unknown, HTMLElement, any>): fromD3.Selection<SVGGElement, unknown, HTMLElement, any> {
    const _svg: fromD3.Selection<SVGGElement, unknown, HTMLElement, any> = _figure
      .append('svg')
      .attr('id', 'pie-svg')
      .attr('width', this._width + (this._margin * 2))
      .attr('height', this._height + (this._margin * 2))
      .attr('viewBox', `${this._width / -2} ${this._height / -2} ${this._width} ${this._height}`)
    return _svg
  }

  private _pie(pieData: { name: string; value: number }[]) {

    const _figure: fromD3.Selection<HTMLElement, unknown, HTMLElement, any> = fromD3.select('figure#graph')
    const _svg: fromD3.Selection<SVGGElement, unknown, HTMLElement, any> = this._createSVG(_figure)
    const _dimensions: { width: number; height: number; margin: number } = { width: this._width, height: this._height, margin: this._margin }

    const _totalSamples: number = pieData.reduce((acc: number, _: { name: string; value: number }) => { acc += _.value; return acc }, 0)

    const _colorScale: fromD3.ScaleSequential<string> = fromD3.scaleSequential(fromD3.interpolateReds).domain([_totalSamples, 0])

    const _tooltip = fromD3.select('figure#graph')
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
      .style('box-shadow', '0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12)')

    const _arc = fromD3.arc()
      .innerRadius(_dimensions.width / 2 - _dimensions.margin * 3)
      .outerRadius(_dimensions.width / 2 - _dimensions.margin)

    const _arcs = _svg.append('g')
      .attr('class', 'pie-arc-container')
      .selectAll('arc')
      .data(fromD3.pie()
        .value((_: any) => (<{ name: string; value: number }>_).value)(<any>pieData)) // `any` rescues, find a work around
      .enter()
      .append('g')
      .attr('class', 'pie-arc')

    _arcs.append('path')
      .attr('fill', _ => _colorScale(_.value))
      .attr('d', (_: any) => _arc(_)) // `any` rescues, find a work around
      .on('mouseenter', ($: _IaMouseEvent, _: _IaPieData) => {
        _tooltip.style('display', 'flex')
        _tooltip.html(`<p class="m-0">${_.data.name}: ${_.value}</p>`)
      })
      .on('mousemove', ($: _IaMouseEvent, _) => {
        _tooltip
          .style('left', ($.clientX + 20) + 'px')
          .style('top', ($.clientY) + 20 + 'px')
      })
      .on('mouseleave', _ => { _tooltip.style('display', 'none') })

    _svg.selectAll('g.pie-arc')
      .data(pieData)
      .join('g')
      .append('rect')
      .attr('transform', (d, i) => `translate(-50,${(i - (pieData.length - 1) / 2) * _dimensions.margin})`)
      .attr('width', 18)
      .attr('height', 18)
      .attr('fill', _ => _colorScale(_.value))

    _svg.selectAll('g.pie-arc')
      .append('text')
      .attr('x', -28)
      .attr('y', (_, i) => i * _dimensions.margin)
      .attr('dy', 4)
      .text((_: _IaPieData) => _.name)
  }

}

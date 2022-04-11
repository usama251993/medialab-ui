import { Component, Input, OnInit } from '@angular/core'
import { timer } from 'rxjs'
import * as fromD3 from 'd3'

import { PhCircularPackDataModel } from '@ph-app/models/ph-phash-app-ui/phash.model'

type _PHashMouseEvent = MouseEvent | any
type _PHashHierarchy = fromD3.HierarchyCircularNode<unknown> | any
type _PHashDimension = {
  x: number
  y: number
  width: number
  height: number
}

@Component({
  selector: 'app-ph-circular-packed-chart',
  templateUrl: './ph-circular-packed-chart.component.html',
  styleUrls: ['./ph-circular-packed-chart.component.scss']
})
export class PhCircularPackedChartComponent implements OnInit {

  @Input() chartData: PhCircularPackDataModel

  private _svg: fromD3.Selection<SVGGElement, unknown, HTMLElement, any>
  private _margin = 20;
  private _width = 808 - (this._margin * 2);
  private _height = 808 - (this._margin * 2);

  constructor() { }

  ngOnInit(): void {
    timer(1000).subscribe(_ => { this._bubble(this.chartData) })
  }

  private _createSVG(_?: _PHashDimension): void {
    if (!fromD3.select('figure#graph svg').empty()) fromD3.select('figure#graph svg').remove()

    this._svg = fromD3.select('figure#graph')
      .append('svg')
    if (!!_) this._svg.attr('viewBox', `${_.x} ${_.y} ${_.width} ${_.height}`)

    this._svg.attr('width', this._width + (this._margin * 2))
      .attr('height', this._height + (this._margin * 2))

  }

  private _bubble(chartData: PhCircularPackDataModel): void {

    // https://observablehq.com/@d3/zoomable-circle-packing?collection=@d3/d3-hierarchy
    // https://fabiofranchino.com/blog/the-new-d3.js-join-method-is-awesome-for-t/

    let focus: fromD3.HierarchyCircularNode<unknown>
    let view: { x: number, y: number, d: number }
    const _dimensions: { width: number, height: number; margin: number } = { width: this._width, height: this._height, margin: this._margin }

    this._createSVG({
      x: _dimensions.width / -2,
      y: _dimensions.height / -2,
      width: _dimensions.width,
      height: _dimensions.height
    })

    this._svg.on('click', ($: _PHashMouseEvent) => zoom({ event: <_PHashMouseEvent>$, __: root, svgEl: this._svg }))

    const bubblePack = (_: PhCircularPackDataModel) => fromD3.pack()
      .size([_dimensions.width, _dimensions.height])
      .padding(5)
      (fromD3.hierarchy(_)
        .sum(__ => (!!__.data) ? __.data.radius : 0))

    const root = bubblePack(chartData)

    const _maxMeanHamingDistance: number = 16 // hardcoded since this is confirmed figure form data team

    const _colorScale: fromD3.ScaleSequential<string> = fromD3.scaleSequential(fromD3.interpolateRdYlGn)
      .domain([_maxMeanHamingDistance, 0])

    const _alternateScale: fromD3.ScaleSequential<string> = fromD3.scaleSequential(fromD3.interpolateBlues)
      .domain([_maxMeanHamingDistance / 4, 0])

    const _defs = this._svg.append('defs')

    const _canvas: fromD3.Selection<HTMLCanvasElement, unknown, HTMLElement, any> = fromD3.select('figure#graph')
      .append('canvas')
      .attr('id', 'data-point-canvas')
      .attr('width', `${_dimensions.width / 3}px`)
      .attr('height', `48px`)
      .style('position', 'absolute')
      .style('top', `${_dimensions.margin}px`)
      .style('right', `${_dimensions.margin}px`)
      .style('imageRendering', 'pixelated')

    const _context: CanvasRenderingContext2D = _canvas.node().getContext('2d')

    function _legend(color, n: number = 512) {
      _context.fillStyle = '#616161e6'
      _context.font = '12px sans-serif'
      _context.textAlign = 'center'
      _context.fillRect(0, 0, _dimensions.width / 3, 64)

      for (let i = 0; i < n; ++i) {
        _context.fillStyle = color(i / (n - 1))
        _context.fillRect(_dimensions.width / (3 * n) * i, 4, _dimensions.width / (3 * n), 12)
        _context.fillStyle = '#fafafa'
        _context.fillText(`${i}`, (_dimensions.width / (3 * n)) * (i + 0.5), 30)
      }

      _context.fillText('Mean Hamming Distance', _dimensions.width / 6, 44)
    }

    _legend(fromD3.scaleSequential(fromD3.interpolateRdYlGn).domain([1, 0]), _maxMeanHamingDistance)

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

    const _nodeGroup = this._svg.append('g')
      .attr('class', 'data-point-group')
      .attr('pointer-events', 'all')
      .selectAll('g')
      .data(root.descendants())
      .join('g')
      .attr('transform', _ => `translate(${_.x},${_.y})`)
      .on('click', ($, _) => focus !== <_PHashMouseEvent>_ && (zoom({ event: <_PHashMouseEvent>$, __: <_PHashHierarchy>_, svgEl: this._svg }), (<_PHashMouseEvent>$).stopPropagation()))

    const _nodeCircle = _nodeGroup.append('circle')
      .attr('r', _ => _.r)
      .attr('fill', _ => (!!(<PhCircularPackDataModel>_.descendants()[0].data).data) ? _colorScale((<PhCircularPackDataModel>_.descendants()[0].data).data.meanHammingDistance) : _alternateScale(_.depth))
      .on('mouseenter', ($: _PHashMouseEvent, _: _PHashHierarchy) => {
        _tooltip.style('display', 'flex')
        let _htmlString: string = ''

        if (!!(<PhCircularPackDataModel>(<fromD3.HierarchyCircularNode<unknown>>_).data).data) {
          const _inspectedVideo: string = (<PhCircularPackDataModel>(<fromD3.HierarchyCircularNode<unknown>>_).data).data.inspectedVideo.title
          const _referenceVideo: string = (<PhCircularPackDataModel>(<fromD3.HierarchyCircularNode<unknown>>_).data).data.referenceVideo.title
          const _meanHammingDistance: number = (<PhCircularPackDataModel>(<fromD3.HierarchyCircularNode<unknown>>_).data).data.meanHammingDistance
          // +-------------------------------+
          // | Video 1 compared with Video 2 |
          // | Mean Hamming Distance: x      |
          // +-------------------------------+
          _htmlString += `<div class="d-flex flex-column">
          <p class="m-0">${_inspectedVideo} compared with ${_referenceVideo}</p>
          <p class="m-0">Mean Hamming Distance: ${_meanHammingDistance}</p>
          </div>`
          _tooltip.html(_htmlString)
        } else {
          const _tagName: string = (<PhCircularPackDataModel>(<fromD3.HierarchyCircularNode<unknown>>_).data).tag
          if (!(<fromD3.HierarchyCircularNode<unknown>>_).depth) _htmlString += `<p class="m-0">Cluster: ${_tagName}</p>` // | Cluster: bucket | for level 0 node
          else _htmlString += `<p class="m-0">Reference Video: ${_tagName}</p>` // | Reference Video: Video 1 | for non-leaf nodes
          _tooltip.html(_htmlString)
        }

      })
      .on('mousemove', ($: _PHashMouseEvent) => {
        _tooltip
          .style('left', ((<MouseEvent>$).clientX + 20) + 'px')
          .style('top', ((<MouseEvent>$).clientY) + 20 + 'px')
      })
      .on('mouseleave', _ => { _tooltip.style('display', 'none') })

    zoomTo([root.x, root.y, root.r * 2])

    function zoomTo(v: [number, number, number] = [0, 0, 0]) {
      view = { x: v[0], y: v[1], d: v[2] }
      const zoomFactor: number = _dimensions.width / view.d

      _nodeGroup.style('transform', _ => `translate(${(_.x - view.x) * zoomFactor}px,${(_.y - view.y) * zoomFactor}px)`)
      _nodeCircle.attr('r', _ => _.r * zoomFactor)
    }

    function zoom(_: { event: MouseEvent, __: fromD3.HierarchyCircularNode<unknown>, svgEl: fromD3.Selection<SVGGElement, unknown, HTMLElement, any> }) {
      focus = { ..._.__ }

      const transition: fromD3.Transition<SVGGElement, unknown, HTMLElement, any> = _.svgEl.transition()
        .duration(_.event.altKey ? 2500 : 750)
        .tween('zoom', d => {
          const i = fromD3.interpolateZoom([view.x, view.y, view.d], [focus.x, focus.y, focus.r * 2])
          return t => zoomTo(i(t))
        })
    }
  }
}

import { Component, Input, OnInit } from '@angular/core'
import { timer } from 'rxjs'

import { PhSankeyDataModel, PhSankeyDataPointModel, PhSankeyNodeModel, PhSankeyLinkModel } from '@ph-app/models/ph-phash-app-ui/phash.model'
import * as fromD3 from 'd3'
import * as fromD3Sankey from 'd3-sankey'

type _PhSankeyNodeModel = PhSankeyNodeModel[] | fromD3Sankey.SankeyNodeMinimal<{}, {}> | any
type _PhSankeyLinkModel = PhSankeyLinkModel[] | fromD3Sankey.SankeyLinkMinimal<{}, {}> | any
type _PhMouseEvent = MouseEvent | any

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

@Component({
  selector: 'app-ph-sankey',
  templateUrl: './ph-sankey.component.html',
  styleUrls: ['./ph-sankey.component.scss']
})
export class PhSankeyComponent implements OnInit {

  @Input() chartData: PhSankeyDataModel

  private _margin = { top: 20, right: 20, bottom: 20, left: 20 };
  private _width: number = 808 - (this._margin.left + this._margin.right);
  private _height: number = 808 - (this._margin.top + this._margin.bottom);
  uniqueScenes: string[] = []
  colorScale: fromD3.ScaleOrdinal<string, unknown>

  constructor() { }

  ngOnInit(): void {
    const _sankeyData = this._preprocessData(this.chartData)
    timer(1000).subscribe(_ => { this._sankey(_sankeyData) })

    // const _parallelData = this._preprocessParallelData(this.chartData)
    // timer(1000).subscribe(_ => { this._parallelGraph({ points: _parallelData, keys: ['inspectedVideo', 'referenceVideo'] }) })
  }

  private _createSVG(_figure: fromD3.Selection<HTMLElement, unknown, HTMLElement, any>): fromD3.Selection<SVGGElement, unknown, HTMLElement, any> {
    const _svg: fromD3.Selection<SVGGElement, unknown, HTMLElement, any> = _figure
      .append('svg')
      .attr('id', 'divergence-svg')
      .attr('width', this._width + (this._margin.left + this._margin.right))
      .attr('height', this._height + (this._margin.left + this._margin.right))
      .append('g')
      .style('transform', `translate(${this._margin.top}px, ${this._margin.left}px)`)
    return _svg
  }

  private _preprocessParallelData(_: PhSankeyDataModel): { inspectedVideo: number; referenceVideo: number }[] {
    const _parallelData = []
    _.inspectedVideo.scenes.forEach(__ => {
      _.referenceVideo.scenes.forEach(___ => {
        if (__.sceneID === ___.sceneID) {
          _parallelData.push({
            inspectedVideo: __.index,
            referenceVideo: ___.index
          })
        }
      })
    })
    return _parallelData
  }

  private _parallelGraph(_: { points: { inspectedVideo: any; referenceVideo: any }[]; keys: any[] }) {

    // https://observablehq.com/@d3/brushable-parallel-coordinates

    const _dimensions: _PhDimension = { width: this._width, height: this._height, margin: { ...this._margin } }

    const _figure: fromD3.Selection<HTMLElement, unknown, HTMLElement, any> = fromD3.select('figure#graph')
    const _svg: fromD3.Selection<SVGGElement, unknown, HTMLElement, any> = this._createSVG(_figure)

    const _xMap = new Map(Array.from(_.keys, key => [key, fromD3.scaleLinear(fromD3.extent(_.points, _ => _[key]), [_dimensions.margin.left, _dimensions.width - _dimensions.margin.right])]))

    const _yScale = fromD3.scalePoint(_.keys, [_dimensions.margin.top, _dimensions.height - _dimensions.margin.bottom])

    const _colorScale = fromD3.scaleSequential(_ => fromD3.interpolateWarm(1 - _))

    const _lineD = fromD3.line()
      .x(([key, value]) => _xMap.get(`${key}`)(value))
      .y(([key]) => _yScale(`${key}`))

    _svg.append('g')
      .attr('fill', 'none')
      .attr('stroke-width', 2)
      .selectAll('path')
      .data(_.points)
      .join('path')
      .attr('d', d => _lineD(fromD3.cross(_.keys, [d], (key, d) => [key, d[key]])))
      .attr('stroke', _ => _colorScale(+_.inspectedVideo))

    _svg.append('g')
      .selectAll('g')
      .data(_.keys)
      .join('g')
      .attr('transform', _ => `translate(0,${_yScale(_)})`)
      .each(function (_) { fromD3.select(<any>this).call(fromD3.axisBottom(_xMap.get(_))) })
      .call(g => g.append('text')
        .attr('x', _dimensions.margin.left)
        .attr('y', -6)
        .attr('text-anchor', 'start')
        .attr('fill', 'currentColor')
        .text(_ => `${_.toString().toUpperCase()} Scenes`))
      .call(g => g.selectAll('text')
        .clone(true).lower()
        .attr('fill', 'none')
        .attr('stroke-width', 5)
        .attr('stroke-linejoin', 'round')
        .attr('stroke', 'white'))
  }

  private _preprocessData(_: PhSankeyDataModel): PhSankeyDataPointModel {

    this.uniqueScenes = [...new Set([..._.inspectedVideo.scenes.map(__ => __.sceneID), ..._.referenceVideo.scenes.map(__ => __.sceneID)])]

    this.colorScale = fromD3.scaleOrdinal()
      .domain([...this.uniqueScenes])
      .range([
        ...fromD3.schemeCategory10,
        ...fromD3.schemeSet2,
        ...fromD3.schemeSet3,
        ...fromD3.schemePastel1,
        ...fromD3.schemePastel2

        // ...fromD3.schemeBlues,
        // ...fromD3.schemeGreens,
        // ...fromD3.schemeGreys,
        // ...fromD3.schemeOranges,
        // ...fromD3.schemePurples,
        // ...fromD3.schemeReds

        // ...fromD3.schemeAccent,
        // ...fromD3.schemePaired,
        // ...fromD3.schemeSpectral,
        // ...fromD3.schemeTableau10
      ])

    const _sankeyData: PhSankeyDataPointModel = { nodes: [], links: [] }

    _.inspectedVideo.scenes.forEach(__ => {
      _sankeyData.nodes.push({
        nodeData: {
          name: `${_.inspectedVideo.title}-${__.sceneID}`,
          timeCode: { start: __.start, end: __.end, duration: __.duration }
        }
      })
    })
    _.referenceVideo.scenes.forEach(__ => {
      _sankeyData.nodes.push({
        nodeData: {
          name: `${_.referenceVideo.title}-${__.sceneID}`,
          timeCode: { start: __.start, end: __.end, duration: __.duration }
        }
      })
    })

    _.inspectedVideo.scenes.forEach(__ => {
      _.referenceVideo.scenes.forEach(___ => {
        if (__.sceneID === ___.sceneID) {
          _sankeyData.links.push({
            source: `${_.inspectedVideo.title}-${__.sceneID}`,
            target: `${_.referenceVideo.title}-${___.sceneID}`,
            // value: (__.duration * ___.duration) / (__.duration + ___.duration)
            // value: __.duration
            // value: ___.duration,
            // value: __.duration && ___.duration
            value: 1
          })
        }
      })
    })

    // console.log(_sankeyData)

    return _sankeyData
  }

  private _sankey(sankeyData: PhSankeyDataPointModel) {

    // https://observablehq.com/@d3/sankey-diagram?collection=@d3/d3-sankey
    // https://jsfiddle.net/saneep/bqpy6f4c/20/ -> Refer after code :298
    // https://jarrettmeyer.com/2018/05/31/creating-a-d3-sankey-graph

    // console.log(sankeyData) // <- to check if sankey data is properly formatted
    const _dimensions: _PhDimension = { width: this._width, height: this._height, margin: { ...this._margin } }

    const _figure: fromD3.Selection<HTMLElement, unknown, HTMLElement, any> = fromD3.select('figure#graph')
    const _svg: fromD3.Selection<SVGGElement, unknown, HTMLElement, any> = this._createSVG(_figure)

    const _sankeyGraphFn = fromD3Sankey.sankey()
      .size([_dimensions.width, _dimensions.height])
      .nodeId(_ => (<_PhSankeyNodeModel>_).nodeData.name)
      .nodeSort(null) // to preserve order of scenes
      .nodeAlign(fromD3Sankey.sankeyJustify)

    const _sankeyGraph = _sankeyGraphFn({
      nodes: [...(<_PhSankeyNodeModel>sankeyData.nodes)],
      links: [...(<_PhSankeyLinkModel>sankeyData.links)]
    })

    const _nodesData: fromD3Sankey.SankeyNodeMinimal<{}, {}>[] = _sankeyGraph.nodes
    const _linksData: fromD3Sankey.SankeyLinkMinimal<{}, {}>[] = _sankeyGraph.links

    // const _colorScale = fromD3.scaleOrdinal(fromD3.schemeTableau10)

    const _tooltip = _figure
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

    const _filteredNodes = _nodesData.filter(__ => [..._linksData.map(___ => ___.source), ..._linksData.map(___ => ___.target)].includes(__))
    this.uniqueScenes = [...new Set(_filteredNodes.map((__: _PhSankeyNodeModel) => (<PhSankeyNodeModel>__).nodeData.name.split('-')[1]))]

    const _node = _svg.append('g')
      .attr('class', 'ph-sankey-node-group')
      .selectAll('rect.ph-sankey-node')
      .data(_filteredNodes)
      // .data(_nodesData)
      .join('rect')
      .attr('class', 'ph-sankey-node')
      .attr('x', d => d.x0)
      .attr('y', d => d.y0)
      .attr('width', d => d.x1 - d.x0)
      .attr('height', d => d.y1 - d.y0)
      .attr('fill', (_: _PhSankeyNodeModel) => {
        return `${this.colorScale((<PhSankeyNodeModel>_).nodeData.name.split('-')[1])}`
      })
      .on('mouseenter', ($: _PhMouseEvent, _: _PhSankeyNodeModel) => {
        _tooltip.style('display', 'flex')
        const _htmlString: string = `<div class="d-flex flex-column">
        <p class="m-0">Scene ID: ${(<PhSankeyNodeModel>_).nodeData.name}</p>
        <p class="m-0">Scene Start Time: ${(<PhSankeyNodeModel>_).nodeData.timeCode.start} sec</p>
        <p class="m-0">Scene End Time: ${(<PhSankeyNodeModel>_).nodeData.timeCode.end} sec</p>
        </div>`
        _tooltip.html(_htmlString)
      })
      .on('mousemove', ($: _PhMouseEvent) => {
        _tooltip
          .style('left', ((<MouseEvent>$).clientX + 20) + 'px')
          .style('top', ((<MouseEvent>$).clientY) + 20 + 'px')
      })
      .on('mouseleave', _ => { _tooltip.style('display', 'none') })

    const _link = _svg
      .append('g')
      .attr('class', 'ph-sankey-link-group')
      .selectAll('g.ph-sankey-link')
      // .data(_linksData.filter((_: _PhSankeyLinkModel) => {
      //   const _sourceScene: string = (<PhSankeyNodeModel>(<fromD3Sankey.SankeyLink<{}, {}>>_).source).nodeData.name.split('-')[1]
      //   const _targetScene: string = (<PhSankeyNodeModel>(<fromD3Sankey.SankeyLink<{}, {}>>_).target).nodeData.name.split('-')[1]
      //   return _sourceScene === _targetScene
      // }))
      .data(_linksData)
      .join('g')
      .attr('class', 'ph-sankey-link')
      .style('mix-blend-mode', 'multiply')

    _link.append('path')
      .attr('stroke-width', _ => Math.max(15, _.width))
      .attr('d', fromD3Sankey.sankeyLinkHorizontal())
      .attr('fill', _ => { return `${this.colorScale((<PhSankeyNodeModel>(<fromD3Sankey.SankeyLink<{}, {}>>_).source).nodeData.name.split('-')[1])}` })
      .attr('stroke', _ => { return `${this.colorScale((<PhSankeyNodeModel>(<fromD3Sankey.SankeyLink<{}, {}>>_).source).nodeData.name.split('-')[1])}` })
      .style('opacity', 0.5)
      .style('transition', '250ms')
      .on('mouseenter', function () { this.style.opacity = `1` })
      .on('mouseleave', function () { this.style.opacity = `0.5` })

    // const _textNodes = _svg.append('g')
    //   .style('font', '10px sans-serif')
    //   .selectAll('text')
    //   .data(_filteredNodes)
    //   .join('text')
    //   .attr('x', d => d.x0 < _dimensions.width / 2 ? d.x1 + 6 : d.x0 - 6)
    //   .attr('y', d => (d.y1 + d.y0) / 2)
    //   .attr('dy', '0.35em')
    //   .attr('text-anchor', d => d.x0 < _dimensions.width / 2 ? 'start' : 'end')
    //   .style('cursor', 'default')
    //   .text((_: _PhSankeyNodeModel) => (<PhSankeyNodeModel>_).nodeData.name.split('-')[1])
    //   .attr('fill', (_: _PhSankeyNodeModel) => {
    //     return `${this.colorScale((<PhSankeyNodeModel>_).nodeData.name.split('-')[1])}`
    //   })
    //   .append('tspan')
    //   .text((_: _PhSankeyNodeModel) => ` ${(<PhSankeyNodeModel>_).nodeData.timeCode.duration}`)
  }
}

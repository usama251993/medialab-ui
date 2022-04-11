import { Component, OnInit, SimpleChanges, Input, EventEmitter, Output } from '@angular/core'
import { BehaviorSubject, timer } from 'rxjs'
import * as fromD3 from 'd3'
import { PhSceneBarDataModel } from '@ph-app/models/ph-phash-app-ui/phash.model'

@Component({
  selector: 'app-ph-scenebar-chart',
  templateUrl: './ph-scenebar-chart.component.html',
  styleUrls: ['./ph-scenebar-chart.component.scss']
})
export class PhScenebarChartComponent implements OnInit {

  private _chartData$: BehaviorSubject<PhSceneBarDataModel>

  @Output() playVideo$: EventEmitter<{ inspectedVideoTimeCode: number; referenceVideoTimeCode: number }>

  @Input()
  set bChartData(value: PhSceneBarDataModel) { this._chartData$.next(value) };
  get bChartData(): PhSceneBarDataModel { return this._chartData$.getValue() };

  private _svg: fromD3.Selection<SVGGElement, unknown, HTMLElement, any>
  private _margin = 20;
  private _svg2: fromD3.Selection<SVGGElement, unknown, HTMLElement, any>
  private _width = 880 - (this._margin * 2);
  private _bins = []
  private _height = 180 - (this._margin * 2);
  sceneId: string[] = [];
  colorScal: fromD3.ScaleOrdinal<string, any>

  constructor() {
    this._chartData$ = new BehaviorSubject<any>(null)
    this.playVideo$ = new EventEmitter<{ inspectedVideoTimeCode: number; referenceVideoTimeCode: number }>()
  }

  ngOnInit(): void {
    timer(1000).subscribe(_ => {
      // if (!!_)
      this._triggerGraph(this.bChartData)

    })
  }

  private hmsToSecondsOnly(str) {
    var x = str.split('.')[1]
    var p = str.split('.')[0].split(':'),
      s = 0, m = 1

    while (p.length > 0) {
      s += m * parseInt(p.pop(), 10)
      m *= 60
    }
    return +(s + '.' + x)
  }

  noMs(str) {
    var p = str.split('.')[0].split(':'),
      s = 0, m = 1

    while (p.length > 0) {
      s += m * parseInt(p.pop(), 10)
      m *= 60
    }
    return s
  }

  _createSVG(_?: { x: number, y: number, width: number, height: number }): void {
    if (!fromD3.select('figure#graph1 svg').empty()) fromD3.select('figure#graph1 svg').remove()
    if (!fromD3.select('figure#graph2 svg').empty()) fromD3.select('figure#graph2 svg').remove()

    this._svg = fromD3.select('figure#graph1')
      .append('svg')
    if (!!_) this._svg.attr('viewBox', `${_.x} ${_.y} ${_.width} ${_.height}`)

    this._svg2 = fromD3.select('figure#graph2')
      .append('svg')
    if (!!_) this._svg2.attr('viewBox', `${_.x} ${_.y} ${_.width} ${_.height}`)

    this._svg.attr('width', this._width + (this._margin * 2))
      .attr('height', this._height + (this._margin * 2))
    this._svg2.attr('width', this._width + (this._margin * 2))
      .attr('height', this._height + (this._margin * 2))

  }

  colorScale(_?: any) {
    if (_ != undefined) {
      return this.colorScal(_)
    } else {
      this.colorScal = fromD3.scaleOrdinal().domain([...this.sceneId]).range([...fromD3.schemeCategory10, ...fromD3.schemeSet2, ...fromD3.schemeSet3, ...fromD3.schemePastel1, ...fromD3.schemePastel2])
    }
  }

  _triggerGraph(_: PhSceneBarDataModel) {
    this._createSVG()
    const xTotal1 = this.hmsToSecondsOnly(_['inspectedVideo']['duration'])
    const xTotal2 = this.hmsToSecondsOnly(_['referenceVideo']['duration'])

    // Formatters for counts and times (converting numbers to Dates).
    var formatMinutes1 = function (totalSecs) {
      var sec_num = parseInt(totalSecs, 10) // don't forget the second param
      var hours: any = Math.floor(sec_num / 3600)
      var minutes: any = Math.floor((sec_num - (hours * 3600)) / 60)
      var seconds: any = sec_num - (hours * 3600) - (minutes * 60)

      if (hours < 10) { hours = '0' + hours }
      if (minutes < 10) { minutes = '0' + minutes }
      if (seconds < 10) { seconds = '0' + seconds }
      if (xTotal1 <= 300) {
        return minutes + ':' + seconds
      }
      return hours + ':' + minutes + ':' + seconds
    },
      formatMinutes2 = function (totalSecs) {
        var sec_num = parseInt(totalSecs, 10) // don't forget the second param
        var hours: any = Math.floor(sec_num / 3600)
        var minutes: any = Math.floor((sec_num - (hours * 3600)) / 60)
        var seconds: any = sec_num - (hours * 3600) - (minutes * 60)

        if (hours < 10) { hours = '0' + hours }
        if (minutes < 10) { minutes = '0' + minutes }
        if (seconds < 10) { seconds = '0' + seconds }
        if (xTotal2 <= 300) {
          return minutes + ':' + seconds
        }
        return hours + ':' + minutes + ':' + seconds
      }

    var x1 = fromD3.scaleLinear()
      .domain([0, xTotal1])
      .range([0, this._width])

    var x2 = fromD3.scaleLinear()
      .domain([0, xTotal2])
      .range([0, this._width])

    this.sceneId = [...new Set([..._.referenceVideo.scenes.map(__ => __.sceneID), ..._.inspectedVideo.scenes.map(__ => __.sceneID)])]

    this.colorScale()

    this._svg.append('g')
      .attr('transform', 'translate(35,' + this._height + ')')
      .call(fromD3.axisBottom(x1).tickFormat(formatMinutes1))
      .selectAll('text')
      .attr('x', '20px')
      // .style('font', '12px times')
      .style('font', '16px sans-serif')
      .attr('transform', 'rotate(0)')
      // .style('font-weight', 'bold')
      .style('text-anchor', 'end')

    this._svg2.append('g')
      // .style('font', '12px times')
      .style('font', '16px sans-serif')
      // .style('font-weight', 'bold')
      .attr('transform', 'translate(35,' + this._height + ')')
      .call(fromD3.axisBottom(x2).tickFormat(formatMinutes2))
      .selectAll('text')
      .attr('x', '20px')
      .attr('transform', 'rotate(0)')
      .style('text-anchor', 'end')

    var c1 = []
    for (let i = 0; i < xTotal1; i++) {
      c1.push(i)
    }

    var c2 = []
    for (let i = 0; i < xTotal2; i++) {
      c2.push(i)
    }

    var histogram1 = fromD3.histogram()
      .value(function (d) { return d })   // I need to give the vector of value
      .domain([0, xTotal1])  // then the domain of the graphic
      .thresholds(x1.ticks(xTotal1)) // then the numbers of bins

    var histogram2 = fromD3.histogram()
      .value(function (d) { return d })   // I need to give the vector of value
      .domain([0, xTotal2])  // then the domain of the graphic
      .thresholds(x2.ticks(xTotal2)) // then the numbers of bins

    var bins1 = histogram1(c1)
    var bins2 = histogram2(c1)

    function noMs(str) {
      var p = str.split('.')[0].split(':'),
        s = 0, m = 1

      while (p.length > 0) {
        s += m * parseInt(p.pop(), 10)
        m *= 60
      }
      return s
    }

    var _tooltip2 = fromD3.select('figure#graph2')
      .append('div')
      .style('opacity', 0)
      .attr('class', '_tooltip')
      .style('justify-content', 'center')
      .style('background-color', '#616161e6')
      .style('color', '#fafafa')
      .style('border-radius', '4px')
      .style('padding', '4px 8px')
      .style('font-size', '16px')
      .style('box-shadow', '0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12)')
      .style('position', 'fixed')
      .style('z-index', 2)

    // Three function that change the _tooltip when user hover / move / leave a cell
    var mouseover1 = function (d) {
      _tooltip2
        .style('opacity', 1)
      fromD3.select(this)
        .style('opacity', 1)
    }
    var mousemove1 = function (d, a) {
      var a, b
      _['referenceVideo']['scenes'].forEach(data => {
        if (a.x0 >= noMs(data.start) && a.x1 <= noMs(data.end)) {
          _tooltip2
            .html('The Scene ID is ' + data.sceneID + '<br> The Duration is ' + (data.start) + ' - ' + (data.end))
            .style('left', (d['clientX'] + 20) + 'px')
            .style('top', (d['clientY'] + 20) + 'px')
        }
      })
    }
    var mouseleave1 = function (d) {
      _tooltip2
        .style('opacity', 0)
      fromD3.select(this)
        .style('stroke', 'none')
    }

    var _tooltip = fromD3.select('figure#graph1')
      .append('div')
      .style('opacity', 0)
      .attr('class', '_tooltip')
      .style('justify-content', 'center')
      .style('background-color', '#616161e6')
      .style('color', '#fafafa')
      .style('border-radius', '4px')
      .style('padding', '4px 8px')
      .style('font-size', '16px')
      .style('box-shadow', '0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12)')
      .style('position', 'fixed')
      .style('z-index', 2)

    // Three function that change the Tooltip when user hover / move / leave a cell
    var mouseover2 = function (d) {
      _tooltip
        .style('opacity', 1)
      fromD3.select(this)
        .style('opacity', 1)
    }
    var mousemove2 = function (d, a) {
      var a, b
      _['inspectedVideo']['scenes'].forEach(data => {
        if (a.x0 >= noMs(data.start) && a.x1 <= noMs(data.end)) {
          _tooltip
            .html('The Scene ID is ' + data.sceneID + '<br> The Duration is ' + (data.start) + ' - ' + (data.end))
            .style('left', (d['clientX'] + 20) + 'px')
            .style('top', (d['clientY'] + 20) + 'px')
        }
      })
    }
    var mouseleave2 = function (d) {
      _tooltip
        .style('opacity', 0)
      fromD3.select(this)
        .style('stroke', 'none')
    }

    this._svg.selectAll('rect')
      .data(bins1)
      .enter()
      .append('rect')
      .attr('x', 36)
      .attr('y', -181)
      .attr('transform', function (d) { return 'translate(' + x1(d.x0) + ',201)' })
      .attr('width', function (d) { return (x1(d.x1) - x1(d.x0) + 1) })
      .attr('height', function (d) {
        return 120
      })
      .style('fill', (a, b, c) => {
        var z = 'white'
        _['inspectedVideo']['scenes'].forEach(data => {
          if (a.x0 >= this.noMs(data.start) && a.x1 <= this.noMs(data.end)) {
            z = this.colorScal(data.sceneID)
          }
        })
        return z.toString()
      })
      .on('mouseover', mouseover2)
      .on('mousemove', mousemove2)
      .on('mouseleave', mouseleave2)
      .on('click', (data, $) => this.playVideo(data, $, 'graph2'))

    this._svg2.selectAll('rect')
      .data(bins2)
      .enter()
      .append('rect')
      .attr('x', 36)
      .attr('y', -181)
      .attr('transform', function (d) { return 'translate(' + x2(d.x0) + ',201)' })
      .attr('width', function (d) { return (x2(d.x1) - x2(d.x0) + 1) })
      .attr('height', function (d) {
        return 120
      })
      .style('fill', (a, b, c) => {
        var z = 'white'
        _['referenceVideo']['scenes'].forEach(data => {
          if (a.x0 >= this.noMs(data.start) && a.x1 <= this.noMs(data.end)) {
            z = this.colorScal(data.sceneID)
          }
        })
        return z.toString()
      })
      .on('mouseover', mouseover1)
      .on('mousemove', mousemove1)
      .on('mouseleave', mouseleave1)
      .on('click', (data, $) => this.playVideo(data, $, 'graph1'))

  }

  playVideo(d, $, graph) {
    let _timeCode: number = 0

    const _graphIndex: number = (graph === 'graph1') ? 0 : 1

    if (!_graphIndex) {
      for (let index = 0; index < this.bChartData.referenceVideo.scenes.length; index++) {
        const _element = this.bChartData.referenceVideo.scenes[index]
        if ($.x0 >= this.noMs(_element.start) && $.x1 <= this.noMs(_element.end)) {
          _timeCode = this.noMs(_element.start)
          break
        }
      }
    } else {
      for (let index = 0; index < this.bChartData.inspectedVideo.scenes.length; index++) {
        const _element = this.bChartData.inspectedVideo.scenes[index]
        if ($.x0 >= this.noMs(_element.start) && $.x1 <= this.noMs(_element.end)) {
          _timeCode = this.noMs(_element.start)
          break
        }
      }
    }

    this.playVideo$.emit({
      inspectedVideoTimeCode: _timeCode,
      referenceVideoTimeCode: _timeCode
    })

    // if (graph === 'graph1') {
    //   this.bChartData['referenceVideo']['scenes'].forEach(data => {
    //     if ($.x0 >= this.noMs(data.start) && $.x1 <= this.noMs(data.end)) {
    //       this.playVideo$.emit(this.noMs(data.start))
    //     }
    //   })
    // } else if (graph === 'graph2') {
    //   this.bChartData['inspectedVideo']['scenes'].forEach(data => {
    //     if ($.x0 >= this.noMs(data.start) && $.x1 <= this.noMs(data.end)) {
    //       this.playVideo$.emit(this.noMs(data.start))
    //     }
    //   })
    // }

  }
}

import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core'

import { BehaviorSubject } from 'rxjs'

import * as fromD3 from 'd3'

import { INITIAL_AUDIO_COMPARISON_DATA, PhAudioComparisonDataModel } from '@ph-core/modules/application-ui/models/ph-audio-app-ui/ph-audio/ph-audio.model'

@Component({
  selector: 'app-ph-audio-chart',
  templateUrl: './ph-audio-chart.component.html',
  styleUrls: ['./ph-audio-chart.component.scss']
})
export class PhAudioChartComponent implements OnInit {

  private _chartData$: BehaviorSubject<PhAudioComparisonDataModel> = new BehaviorSubject<PhAudioComparisonDataModel>(INITIAL_AUDIO_COMPARISON_DATA)

  @Input()
  set chartData(value: PhAudioComparisonDataModel) { this._chartData$.next(value) };
  get chartData(): PhAudioComparisonDataModel { return this._chartData$.getValue() };

  @Output() updateTime$: EventEmitter<number> = new EventEmitter<number>()

  private _svg: fromD3.Selection<SVGGElement, unknown, HTMLElement, any>
  private _margin = { top: 10, right: 30, bottom: 30, left: 60 }
  private _width = 840 - this._margin.left - this._margin.right
  private _height = 360 - this._margin.top - this._margin.bottom

  constructor() { }

  ngOnInit(): void { }

  ngOnChanges() {
    this._triggerGraph(this.chartData)
  }

  private _createSVG(_?: { x: number, y: number, width: number, height: number }): void {
    if (!fromD3.select('figure#graph1 svg').empty()) fromD3.select('figure#graph1 svg').remove()

    this._svg = fromD3.select('figure#graph1')
      .append('svg')
    if (!!_) this._svg.attr('viewBox', `${_.x} ${_.y} ${_.width} ${_.height}`)

    this._svg.attr('width', this._width + (this._margin.right + this._margin.left))
      .attr('height', this._height + (this._margin.top + this._margin.bottom))
      .append('g')
      .attr('transform', 'translate(' + this._margin.left + ',' + this._margin.top + ')')
      .attr('class', 'canvas')

  }

  _triggerGraph(_: PhAudioComparisonDataModel) {

    this._createSVG()

    const xTotal: number = Math.max(+_.inspectedVideo.duration, +_.referenceVideo.duration)

    var data = []

    for (let i = 0; i < _.comparisons.length * 3; i++) {
      var z = i / 3
      data.push({
        value: _.comparisons[Math.floor(z)]['similarity'],
        xValue: i
      })
    }

    // Formatters for counts and times (converting numbers to Dates).
    var formatMinutes = function (totalSecs: number) {
      const sec_num: number = parseInt(`${totalSecs}`, 10) // don't forget the second param
      let hours: string = `${Math.floor(sec_num / 3600)}`
      let minutes: string = `${Math.floor((sec_num - (+hours * 3600)) / 60)}`
      let seconds: string = `${sec_num - (+hours * 3600) - (+minutes * 60)}`

      if (+hours < 10) { hours = '0' + hours }
      if (+minutes < 10) { minutes = '0' + minutes }
      if (+seconds < 10) { seconds = '0' + seconds }
      if (xTotal <= 300) {
        return minutes + ':' + seconds
      }
      return hours + ':' + minutes + ':' + seconds
    }

    var xScale = fromD3.scaleLinear()
      .domain([0, xTotal])
      .range([0, this._width])

    this._svg
      .select('g.canvas')
      .append('g')
      .attr('transform', 'translate(0,' + this._height + ')')
      .call(fromD3.axisBottom(xScale).tickFormat(formatMinutes))
      .selectAll('text')
      .attr('x', '20px')
      .attr('transform', 'rotate(0)')
      .style('font-size', 12)
      .style('text-anchor', 'end')

    this._svg
      .append('text')
      .attr('text-anchor', 'middle')
      .attr('transform', 'translate(10,180) rotate(-90)')
      .style('font-size', 14)
      .text('Similarity Percentage')

    var yScale = fromD3.scaleLinear()
      .domain([0, 100])
      .range([this._height, 0])

    this._svg
      .select('g.canvas')
      .append('g')
      .attr('transform', 'translate( 0,0)')
      .call(fromD3.axisLeft(yScale))
      .style('font-size', 12)

    var _tooltip = fromD3.select('figure#graph1')
      .append('div')
      .style('opacity', 0)
      .attr('class', '_tooltip')
      .style('justify-content', 'center')
      .style('background-color', '#616161e6')
      .style('color', '#fafafa')
      .style('border-radius', '4px')
      .style('padding', '4px 8px')
      .style('font-size', '12px')
      .style('box-shadow', '0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12)')
      .style('position', 'fixed')

    // Three function that change the tooltip when user hover / move / leave a cell
    var mouseover = function (d) {
      _tooltip
        .style('opacity', 1)
    }

    var mousemove = function (d, $) {
      _tooltip
        .html('The Similarity Percentage at ' + formatMinutes($.xValue) + ' is ' + $['value'] + '%')
        .style('left', function (c) {
          return (d['clientX'] + 20) + 'px'
        })
        .style('top', (d['clientY'] + 20) + 'px')
    }

    var mouseleave = function (d) {
      _tooltip
        .style('opacity', 0)
    }

    // Add the line
    this._svg.select('g.canvas').append('g')
      .attr('class', 'lineClass')
      .append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', 'steelblue')
      .attr('stroke-width', 6)
      .attr('d', fromD3.line()
        .x(function (d) { return xScale(d['xValue']) })
        .y(function (d) { return yScale(d['value']) })
      )


    this._svg.select('g.canvas').selectAll('circle')
      .data(data)
      .enter().append('circle')
      .style('fill', 'steelblue')
      .attr('r', 3)
      .attr('cx', function (obj) {
        return xScale(obj.xValue)
      })
      .attr('cy', function (obj) {
        return yScale(obj.value)
      })
      .on('mouseover', mouseover)
      .on('mousemove', mousemove)
      .on('mouseleave', mouseleave)
      .on('click', (data, $) => this.playVideo(data, $))
  }

  playVideo = function ($: MouseEvent, d: { value: number; xValue: number }) {
    this.updateTime$.emit(d.xValue)
  }

  toTimeCode(totalSecs) {
    var ms = <number>(totalSecs.toFixed(2).toString().split('.')[1])
    var sec_num = parseInt(totalSecs, 10) // don't forget the second param
    var hours: any = Math.floor(sec_num / 3600)
    var minutes: any = Math.floor((sec_num - (hours * 3600)) / 60)
    var seconds: any = sec_num - (hours * 3600) - (minutes * 60)

    if (hours < 10) { hours = '0' + hours }
    if (minutes < 10) { minutes = '0' + minutes }
    if (seconds < 10) { seconds = '0' + seconds }
    return hours + ':' + minutes + ':' + seconds + '.' + ms
  }
}

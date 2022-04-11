import { Component, OnInit, Input, SimpleChanges, Directive, HostListener, EventEmitter, Output } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import * as fromD3 from 'd3'
import { PhAppCoreService } from '@ph-app/services/ph-app-core.service'
import { AppTHEOplayerModel } from '@shared/models/app-theoplayer.model'
import { BarChartData } from '@ph-app/models/ph-phash-app-ui/phash.model'


@Component({
  selector: 'app-ph-colorbar-chart',
  templateUrl: './ph-colorbar-chart.component.html',
  styleUrls: ['./ph-colorbar-chart.component.scss']
})
export class PhColorbarChartComponent implements OnInit {

  private _chartData$: BehaviorSubject<BarChartData>

  @Input()
  set bChartData(value: any) { this._chartData$.next(value) };
  get bChartData(): any { return this._chartData$.getValue() };

  @Output() playVideo$: EventEmitter<any>

  private _svg: fromD3.Selection<SVGGElement, unknown, HTMLElement, any>
  private _margin = 20;
  private _width = 580 - (this._margin * 2);
  private _bins = []
  private _height = 180 - (this._margin * 2);
  selectedVideo: any = {};

  constructor(
    private _coreService: PhAppCoreService
  ) {
    this._chartData$ = new BehaviorSubject<BarChartData>(null)
    this.playVideo$ = new EventEmitter<any>()
  }

  ngOnInit(): void {

  }

  selectVideo(_, $) {
    this.playVideo$.emit($)
    for (let x of this.bChartData["duration_of_color"]) {
      if ($.x0 >= x.start && $.x0 <= x.end) {
        this.selectedVideo["time"] = this.toTimeCode(x.start)
      }
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    this._triggerGraph(this.bChartData)
  }


  private hmsToSecondsOnly(str) {
    var x = str.split(".")[1]
    var p = str.split(':'),
      s = 0, m = 1

    while (p.length > 0) {
      s += m * parseInt(p.pop(), 10)
      m *= 60
    }
    return +(s + "." + x)
  }

  _createSVG(_?: { x: number, y: number, width: number, height: number }): void {
    if (!fromD3.select('figure#graph svg').empty()) fromD3.select('figure#graph svg').remove()

    this._svg = fromD3.select('figure#graph')
      .append('svg')
    if (!!_) this._svg.attr('viewBox', `${_.x} ${_.y} ${_.width} ${_.height}`)

    this._svg.attr('width', this._width + (this._margin * 2))
      .attr('height', this._height + (this._margin * 2))

  }

  _triggerGraph(_: BarChartData[]) {
    this._createSVG()
    var color = ["yellow", "cyan", "darkgreen", "pink", "red", "blue"]
    var count = 0
    const xTotal = this.hmsToSecondsOnly(_['total_duration'])

    // Formatters for counts and times (converting numbers to Dates).
    var formatMinutes = function (totalSecs) {
      var sec_num = parseInt(totalSecs, 10) // don't forget the second param
      var hours: any = Math.floor(sec_num / 3600)
      var minutes: any = Math.floor((sec_num - (hours * 3600)) / 60)
      var seconds: any = sec_num - (hours * 3600) - (minutes * 60)

      if (hours < 10) { hours = "0" + hours }
      if (minutes < 10) { minutes = "0" + minutes }
      if (seconds < 10) { seconds = "0" + seconds }
      if (xTotal <= 17) {
        return minutes + ':' + seconds
      }
      return hours + ':' + minutes + ':' + seconds
    }

    function toTimeCode(totalSecs) {
      var ms = <number>(totalSecs.toFixed(2).toString().split(".")[1])
      var sec_num = parseInt(totalSecs, 10) // don't forget the second param
      var hours: any = Math.floor(sec_num / 3600)
      var minutes: any = Math.floor((sec_num - (hours * 3600)) / 60)
      var seconds: any = sec_num - (hours * 3600) - (minutes * 60)

      if (hours < 10) { hours = "0" + hours }
      if (minutes < 10) { minutes = "0" + minutes }
      if (seconds < 10) { seconds = "0" + seconds }
      return hours + ':' + minutes + ':' + seconds + "." + ms
    }

    var x = fromD3.scaleLinear()
      .domain([0, xTotal])
      .range([0, this._width])

    this._svg.append('g')
      .attr('transform', 'translate(35,' + this._height + ')')
      .call(fromD3.axisBottom(x).tickFormat(formatMinutes))
      .selectAll('text')
      .attr("x", "20px")
      .attr('transform', 'rotate(0)')
      .style('text-anchor', 'end')
      .style("font", "12px times")
      .style("font-weight", "bold")


    var c = []
    _['duration_of_color'].forEach(data => {
      var q = data.start
      var e = true
      while (e) {
        c.push(q)
        if (data.end >= q) {
          q += 0.1
        } else {
          e = false
        }
      }
    })

    var histogram = fromD3.histogram()
      .value(function (d) { return d })   // I need to give the vector of value
      .domain([0, xTotal])  // then the domain of the graphic
      .thresholds(x.ticks(xTotal * 3)) // then the numbers of bins

    var bins = histogram(c)

    var Tooltip = fromD3.select("figure#graph")
      .append("div")
      .style("opacity", 0)
      .attr("class", "tooltip")
      .style('justify-content', 'center')
      .style('background-color', '#616161e6')
      .style('color', '#fafafa')
      .style('border-radius', '4px')
      .style('padding', '4px 8px')
      .style('font-size', '12px')
      .style('box-shadow', '0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12)')
      .style("position", "fixed")

    // Three function that change the tooltip when user hover / move / leave a cell
    var mouseover = function (d) {
      Tooltip
        .style("opacity", 1)
      fromD3.select(this)
        .style("opacity", 1)
    }
    var mousemove = function (d, $) {
      var a, b
      for (let x of _["duration_of_color"]) {
        if ($.x0 >= x.start && $.x0 <= x.end) {
          Tooltip
            .html("The Start Time is " + toTimeCode(x.start) + '<br> The End time is ' + toTimeCode(x.end))
            .style('left', (d['clientX'] + 20) + 'px')
            .style('top', (d['clientY'] + 20) + 'px')
        }
      }
    }
    var mouseleave = function (d) {
      Tooltip
        .style("opacity", 0)
      fromD3.select(this)
        .style("stroke", "none")
    }

    this._svg.selectAll("rect")
      .data(bins)
      .enter()
      .append("rect")
      .attr("x", 36)
      .attr("y", -181)
      .attr("transform", function (d) { return "translate(" + x(d.x0) + ",201)" })
      .attr("width", function (d) { return (x(d.x1) - x(d.x0) + 1) })
      .attr("height", function (d) { if (d.length > 2) return 120 })
      .style("fill", function (d) {
        if (d.length > 2) {
          if (count >= 7) { count = 0 }
          else { count += 1 }
          return color[count]
        }
      })
      .on("mouseover", mouseover)
      .on("mousemove", mousemove)
      .on("mouseleave", mouseleave)
      .on("click", (data, $) => this.playVideo(data, $))

  }

  playVideo = function (d, $) {
    for (let x of this.bChartData["duration_of_color"]) {
      if ($.x0 >= x.start && $.x0 <= x.end) {
        this.playVideo$.emit(x.start)
      }
    }
    this.selectedVideo = d
  }

  toTimeCode(totalSecs) {
    var ms = <number>(totalSecs.toFixed(2).toString().split(".")[1])
    var sec_num = parseInt(totalSecs, 10) // don't forget the second param
    var hours: any = Math.floor(sec_num / 3600)
    var minutes: any = Math.floor((sec_num - (hours * 3600)) / 60)
    var seconds: any = sec_num - (hours * 3600) - (minutes * 60)

    if (hours < 10) { hours = "0" + hours }
    if (minutes < 10) { minutes = "0" + minutes }
    if (seconds < 10) { seconds = "0" + seconds }
    return hours + ':' + minutes + ':' + seconds + "." + ms
  }

}

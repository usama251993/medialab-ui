import { Component, OnInit, Input, SimpleChanges, EventEmitter, Output, Inject, LOCALE_ID } from '@angular/core'
import { formatDate } from '@angular/common'
import { BehaviorSubject } from 'rxjs'
import { StApplicationModel, StAppModel, StAggregatedResult, StAppConfig } from '@st-core/models/st-app.model'
import { StTestResult, StTestScenario } from '@st-core/models/st-test.model'
import { StTestPack, StRunTestPack } from '@st-core/models/st-test-pack.model'
import { StCoreRoutingModule } from '@st-core/st-core-routing.module'
import { StDeviceInfo } from '@st-core/models/st-device.model'

@Component({
  selector: 'app-st-dashboard',
  templateUrl: './st-dashboard.component.html',
  styleUrls: ['./st-dashboard.component.scss']
})
export class StDashboardComponent implements OnInit {

  _appList$: BehaviorSubject<StApplicationModel[]>
  _finishedTestList$: BehaviorSubject<StAggregatedResult[]>
  _testList$: BehaviorSubject<StTestResult[]>
  _testPackList$: BehaviorSubject<StTestPack[]>
  _currentApp$: BehaviorSubject<StApplicationModel>
  _configList$: BehaviorSubject<StAppConfig[]>
  _devices$: BehaviorSubject<any[]>
  displayedColumns = ['parameter', 'value']
  fTestPackQuickLinks = [];
  testPackQuickLinks = []
  testQuickLinks = []
  configQuickLinks = []
  deviceQuickLinks = []
  finishedTestPackData: { parameter: string; value: string | number }[]
  testPackData: { parameter: string; value: string | number }[]
  testData: { parameter: string; value: string | number }[]
  deviceData: { parameter: string; value: string | number }[]
  configData: { parameter: string; value: string | number }[]
  selectTab: any
  appName: StAppModel = {
    title: "",
    appId: "",
    versions: [{
      access: "",
      clean: false,
      id: "",
      isDefault: false,
      name: ""
    }]
  }
  testPackResult: StAggregatedResult = {
    testPackId: null,
    testPackName: "",
    testPackRunId: null,
    round: null,
    overallResult: "",
    initiatedBy: {
      name: "",
      type: "",
      email: ""
    },
    created: "",
    duration: null,
    executionStatus: "",
    numberOfResults: null
  };

  testPack: StTestPack = {
    name: "",
    models: [{
      modelId: "",
      firmware: ""
    }],
    devices: [{
      deviceId: "",
    }],
    id: null,
    active: false,
    configId: "",
    tests: {
      byTags: [],
    },
    planning: {
      daysOfWeek: [],
      hours: [],
      minutes: []
    },
    meta: {
      plannerType: ""
    },
    screenshots: "",
    notifications: {
      reportFirstErrorForDevice: false,
      reportSummary: false,
      email: false,
      slack: false,
      emailAddresses: []
    }
  };
  test: StTestScenario = {
    testId: "",
    title: "",
    latestRevisionTime: "",
    latestRevisionAuthor: {
      name: "",
      email: ""
    },
    tags: []
  };
  config: any = {
    name: "",
    id: "",
    platform: ""
  };
  device: StDeviceInfo = {
    deviceId: "",
    manufacturer: "",
    model: "",
    owner: "",
    firmware: "",
    customName: "",
    inactivityTimeout: null,
    isShared: false,
    modelId: "",
    platforms: [],
    status: ""
  }
  _result$: BehaviorSubject<StRunTestPack[]>
  _testPackExe$: BehaviorSubject<any>

  @Input()
  set appList(value: StApplicationModel[]) { this._appList$.next(value) }
  get appList(): StApplicationModel[] { return this._appList$.getValue() }

  @Input()
  set testList(value: StTestResult[]) { this._testList$.next(value) }
  get testList(): StTestResult[] { return this._testList$.getValue() }

  @Input()
  set finishedTestList(value: StAggregatedResult[]) { this._finishedTestList$.next(value) }
  get finishedTestList(): StAggregatedResult[] { return this._finishedTestList$.getValue() }

  @Input()
  set testPackList(value: StTestPack[]) { this._testPackList$.next(value) }
  get testPackList(): StTestPack[] { return this._testPackList$.getValue() }

  @Input()
  set currentApp(value: StApplicationModel) { this._currentApp$.next(value) }
  get currentApp(): StApplicationModel { return this._currentApp$.getValue() }

  @Input()
  set configList(value: StAppConfig[]) { this._configList$.next(value) }
  get configList(): StAppConfig[] { return this._configList$.getValue() }

  @Input()
  set result(value: StRunTestPack[]) { this._result$.next(value) }
  get result(): StRunTestPack[] { return this._result$.getValue() }

  @Input()
  set devices(value: any[]) { this._devices$.next(value) }
  get devices(): any[] { return this._devices$.getValue() }

  @Input()
  set testPackExe(value: any[]) { this._testPackExe$.next(value) }
  get testPackExe(): any[] { return this._testPackExe$.getValue() }

  @Output() testPackResultView$: EventEmitter<any>
  @Output() executeTestPack$: EventEmitter<any>
  @Output() refreshAll$: EventEmitter<any>
  @Output() triggerNavigate$: EventEmitter<void>
  @Output() stopExecution$: EventEmitter<void>

  constructor(@Inject(LOCALE_ID) private locale: string) {
    this._appList$ = new BehaviorSubject<StAppModel[]>(null)
    this._testList$ = new BehaviorSubject<StTestResult[]>(null)
    this._testPackList$ = new BehaviorSubject<StTestPack[]>(null)
    this._testPackExe$ = new BehaviorSubject<any[]>(null)
    this._finishedTestList$ = new BehaviorSubject<StAggregatedResult[]>(null)
    this._currentApp$ = new BehaviorSubject<StApplicationModel>(null)
    this._configList$ = new BehaviorSubject<StAppConfig[]>(null)
    this._result$ = new BehaviorSubject<StRunTestPack[]>(null)
    this._devices$ = new BehaviorSubject<any[]>(null)
    this.testPackResultView$ = new EventEmitter<any>()
    this.executeTestPack$ = new EventEmitter<any>()
    this.refreshAll$ = new EventEmitter<any>()
    this.triggerNavigate$ = new EventEmitter<void>()
    this.stopExecution$ = new EventEmitter<void>()
    if (localStorage.getItem('appName') != null && localStorage.getItem('appName') != undefined) this.appName = JSON.parse(localStorage.getItem('appName'))
  }

  ngOnInit(): void {
    this._finishedTestList$.subscribe(_ => {
      if (!!_) {
        this._initializeFTPQuickLinks()
      }
    })

    this._testPackList$.subscribe(_ => {
      if (!!_) {
        this._initializeTPQuickLinks()
      }
    })

    this._testList$.subscribe(_ => {
      if (!!_) {
        this._initializeTestQuickLinks()
      }
    })

    this._configList$.subscribe(_ => {
      if (!!_) {
        this._initializeConfigQuickLinks()
      }
    })

    this._devices$.subscribe(_ => {
      if (!!_) {
        this._initializeDeviceQuickLinks()
      }
    })
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log(this._finishedTestList$.getValue())
  // }

  private _initializeFTPQuickLinks() {
    this.fTestPackQuickLinks = []
    for (let i = 0; i < this.finishedTestList.length; i++) {
      this.fTestPackQuickLinks.push({ index: i, ...this.finishedTestList[i] })
      if (this.finishedTestList[i].testPackRunId === this.testPackResult.testPackRunId) {
        this.testPackResult = this.finishedTestList[i]
        console.log(this.finishedTestList[i], this.testPackResult)
      }
    }
  }

  private _initializeTPQuickLinks() {
    this.testPackQuickLinks = []
    for (let i = 0; i < this.testPackList.length; i++) {
      this.testPackQuickLinks.push({ index: i, ...this.testPackList[i] })
    }
  }

  private _initializeTestQuickLinks() {
    this.testQuickLinks = []
    for (let i = 0; i < this.testList.length; i++) {
      this.testQuickLinks.push({ index: i, ...this.testList[i] })
    }
  }

  private _initializeConfigQuickLinks() {
    this.configQuickLinks = []
    for (let i = 0; i < this.configList.length; i++) {
      this.configQuickLinks.push({ index: i, ...this.configList[i] })
    }
  }

  private _initializeDeviceQuickLinks() {
    this.deviceQuickLinks = []
    for (let i = 0; i < this.devices.length; i++) {
      this.deviceQuickLinks.push({ index: i, ...this.devices[i] })
    }
  }

  viewTestPackRunResult(_) {
    this.testPackResult = _
    this.finishedTestPackData = []
    for (let _key in _) {
      if (_key !== 'index' && _key !== 'initiatedBy' && _key !== 'created') this.finishedTestPackData.push({ parameter: `${_key.charAt(0).toUpperCase()}${_key.slice(1)}`, value: _[_key] })
      if (_key === 'created') this.finishedTestPackData.push({ parameter: `${_key.charAt(0).toUpperCase()}${_key.slice(1)}`, value: formatDate(_[_key], 'yyyy-MM-dd--hh:mm:ss', this.locale) })
    }
    this.testPackResultView$.emit(_)
  }

  viewTestPack(_) {
    this.testPackData = []
    for (let _key in _) {
      if (_key !== 'index' && _key !== 'meta' && _key !== 'tests' && _key !== 'notifications' && _key !== 'devices' && _key !== 'planning') this.testPackData.push({ parameter: `${_key.charAt(0).toUpperCase()}${_key.slice(1)}`, value: _[_key] })
    }
    this.testPack = _
  }

  viewTest(_) {
    this.testData = []
    for (let _key in _) {
      if (_key !== 'index' && _key !== 'latestRevisionAuthor' && _key !== 'latestRevisionTime') this.testData.push({ parameter: `${_key.charAt(0).toUpperCase()}${_key.slice(1)}`, value: _[_key] })
      if (_key === 'latestRevisionTime') this.testData.push({ parameter: `${_key.charAt(0).toUpperCase()}${_key.slice(1)}`, value: formatDate(_[_key], 'yyyy-MM-dd--hh:mm:ss', this.locale) })
    }
    this.test = _
  }

  viewConfig(_) {
    this.configData = []
    for (let _key in _) {
      if (_key !== 'index') this.configData.push({ parameter: `${_key.charAt(0).toUpperCase()}${_key.slice(1)}`, value: _[_key] })
    }
    this.config = _
  }

  viewDevice(_) {
    this.deviceData = []
    for (let _key in _) {
      if (_key !== 'index') this.deviceData.push({ parameter: `${_key.charAt(0).toUpperCase()}${_key.slice(1)}`, value: _[_key] })
    }
    this.device = _
  }

  getTestName(_) {
    var name
    if (!!this.testList && !!_) {
      this.testList.map(__ => {
        if (_.testId === __.testId) {
          name = __["title"]
        }
      })

    }
    return (name)
  }

  executeTestPack() {
    this.selectTab = 0
    // "Finished Test Pack Runs"
    this.executeTestPack$.emit(this.testPack)
    this.refresh()
    // this.selectTab = ""
  }

  refresh() {
    this.refreshAll$.emit()
  }

  triggerNavigate(): void {
    this.triggerNavigate$.emit()
  }

  stopTestPackExecution(_): void {
    this.stopExecution$.emit(_)
    this.testPackResult.executionStatus = "finished"
    this.refresh()
  }
}

import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { StAppService } from '@st-core/services/application-ui/st-application/st-app.service'
import { StCoreService } from '@st-core/services/st-core.service'
import { StApplicationModel } from '@st-core/models/st-app.model'

@Component({
  selector: 'app-st-dashboard-container',
  template: `<app-st-dashboard [appList]  = "appList$ | async"
                               [testList] = "testList$ | async"
                               [finishedTestList] = "finishedTestList$ | async"
                               [testPackList] = "testPackList$ | async"                               
                               [configList] = "configList$ | async"
                               [result] = "result$ | async"
                               [currentApp] = "currentApp$ "
                               [devices] = "devices$ | async"
                               [testPackExe] = "testPackExe$ | async"
                               (testPackResultView$) = "testPackResultView($event)"
                               (refreshAll$) = "refresh()"
                               (executeTestPack$) = "executeTestPack($event)"
                               (triggerNavigate$) = "triggerNavigate()"
                               (stopExecution$) = "stopExecution($event)"
                              ></app-st-dashboard>`
})
export class StDashboardContainerComponent implements OnInit {

  appList$: Observable<StApplicationModel>
  testList$: Observable<any>
  finishedTestList$: Observable<any>
  testPackList$: Observable<any>
  currentApp$: Observable<FormData>
  configList$: Observable<any>
  result$: Observable<any>
  devices$: Observable<any>
  testPackExe$: Observable<any>

  constructor(
    private _appService: StAppService,
    private _coreService: StCoreService,
  ) { }

  ngOnInit(): void {
    this.appList$ = this._appService.fetchApps$()
    this.devices$ = this._appService.fetchDevices$()
    this.testList$ = this._appService.fetchTestsList$()
    this.finishedTestList$ = this._appService.fetchFinishedTestPackRunsList$()
    this.testPackList$ = this._appService.fetchTestPackList$()
    this.currentApp$ = this._coreService.getCurrentAppName()
    this.configList$ = this._appService.fetchConfiguration$()
  }

  testPackResultView(_: any): any {
    this.result$ = this._appService.fetchTestPackResult$(_)
  }

  executeTestPack(_) {
    this.testPackExe$ = this._appService.triggerTestPackExecution$(_)
    this.refresh()
  }

  refresh() {
    this.appList$ = this._appService.fetchApps$()
    this.devices$ = this._appService.fetchDevices$()
    this.testList$ = this._appService.fetchTestsList$()
    this.finishedTestList$ = this._appService.fetchFinishedTestPackRunsList$()
    this.testPackList$ = this._appService.fetchTestPackList$()
    this.configList$ = this._appService.fetchConfiguration$()
  }

  triggerNavigate(): void {
    this._coreService.navigate({ path: [], extras: {} })
  }

  stopExecution(_): void {
    this.testPackExe$ = this._appService.stopTestPackExecution$(_)
    this.refresh()
  }

}

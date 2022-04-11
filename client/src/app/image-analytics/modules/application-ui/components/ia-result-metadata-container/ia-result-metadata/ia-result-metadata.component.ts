import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { IaNextButtonModel } from '@ia-app/models/ia-result.model'
import { BehaviorSubject } from 'rxjs'

@Component({
  selector: 'app-ia-result-metadata',
  templateUrl: './ia-result-metadata.component.html',
  styleUrls: ['./ia-result-metadata.component.scss']
})
export class IaResultMetadataComponent implements OnInit {

  private _bucketLocation$: BehaviorSubject<string> = new BehaviorSubject<string>('')
  private _assets$: BehaviorSubject<IaNextButtonModel> = new BehaviorSubject<IaNextButtonModel>(null)
  private _sampleCount$: BehaviorSubject<number> = new BehaviorSubject<number>(0)

  @Input()
  set bucketLocation(value: string) { this._bucketLocation$.next(value) }
  get bucketLocation(): string { return this._bucketLocation$.getValue() }

  @Input()
  set assets(value: IaNextButtonModel) { this._assets$.next(value) }
  get assets(): IaNextButtonModel { return this._assets$.getValue() }

  @Input()
  set sampleCount(value: number) { this._sampleCount$.next(value) }
  get sampleCount(): number { return this._sampleCount$.getValue() }

  @Output() triggerNavigate$: EventEmitter<void> = new EventEmitter<void>()

  constructor() { }

  ngOnInit(): void { }

  triggerNavigate(): void {
    this.triggerNavigate$.emit()
  }

}

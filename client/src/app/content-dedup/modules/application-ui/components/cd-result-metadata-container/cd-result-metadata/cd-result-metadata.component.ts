import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { CdNextButtonModel } from '@cd-app/models/cd-result.model'
import { BehaviorSubject } from 'rxjs'

@Component({
  selector: 'app-cd-result-metadata',
  templateUrl: './cd-result-metadata.component.html',
  styleUrls: ['./cd-result-metadata.component.scss']
})
export class CdResultMetadataComponent implements OnInit {

  private _bucketLocation$: BehaviorSubject<string>
  private _assets$: BehaviorSubject<CdNextButtonModel>

  @Input()
  set bucketLocation(value: string) { this._bucketLocation$.next(value) }
  get bucketLocation(): string { return this._bucketLocation$.getValue() }

  @Input()
  set assets(value: CdNextButtonModel) { this._assets$.next(value) }
  get assets(): CdNextButtonModel { return this._assets$.getValue() }

  @Output() triggerNavigate$: EventEmitter<void>

  constructor() {
    this._bucketLocation$ = new BehaviorSubject<string>('')
    this._assets$ = new BehaviorSubject<CdNextButtonModel>(null)
    this.triggerNavigate$ = new EventEmitter<void>()
  }

  ngOnInit(): void { }

  triggerNavigate(): void {
    this.triggerNavigate$.emit()
  }

}

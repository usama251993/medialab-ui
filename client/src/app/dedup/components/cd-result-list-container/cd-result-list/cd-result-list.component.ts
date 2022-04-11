import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { CdResultOverviewModel } from '@cd-core/models/cd-result-overview.model'

@Component({
  selector: 'app-cd-result-list',
  templateUrl: './cd-result-list.component.html',
  styleUrls: ['./cd-result-list.component.scss']
})
export class CdResultListComponent implements OnInit {

  private _list$: BehaviorSubject<CdResultOverviewModel>
  private _bucket$: BehaviorSubject<FormData>

  bucketLocation: string

  @Input()
  set useCaseList(value: CdResultOverviewModel) { this._list$.next(value) };
  get useCaseList(): CdResultOverviewModel { return this._list$.getValue() };

  @Input()
  set bucketForm(value: FormData) { this._bucket$.next(value) };
  get bucketForm(): FormData { return this._bucket$.getValue() };

  @Output() gotoBucketSelection$: EventEmitter<void>

  @Output() showMetaInfo$: EventEmitter<void>

  constructor() {
    this._list$ = new BehaviorSubject<CdResultOverviewModel>(null)
    this._bucket$ = new BehaviorSubject<FormData>(null)
    this.gotoBucketSelection$ = new EventEmitter<void>()
    this.showMetaInfo$ = new EventEmitter<void>()
  }

  ngOnInit(): void {
    // this._bucket$.subscribe(_ => {
    this.bucketLocation = (!!this.bucketForm) ? this.bucketForm['bucketLocation'].toString() : ''
    // })
  }

  gotoBucketSelection(): void {
    this.gotoBucketSelection$.emit()
  }

  showMetaInfo(): void {
    this.showMetaInfo$.emit();
  }

}

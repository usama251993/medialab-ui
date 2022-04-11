import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { BehaviorSubject } from 'rxjs'

import { AppOptionModel } from '@shared/models/app-assets.model'

@Component({
  selector: 'app-cd-bucket',
  templateUrl: './cd-bucket.component.html',
  styleUrls: ['./cd-bucket.component.scss']
})
export class CdBucketComponent implements OnInit {

  private _data$: BehaviorSubject<AppOptionModel[]>
  private _loading$: BehaviorSubject<boolean>

  formGroup: FormGroup

  @Input()
  set bucketList(value: AppOptionModel[]) { this._data$.next(value) }
  get bucketList(): AppOptionModel[] { return this._data$.getValue() }

  @Input()
  set bIsLoading(value: boolean) { this._loading$.next(value) };
  get bIsLoading(): boolean { return this._loading$.getValue() };

  @Output() formSubmit$: EventEmitter<FormData>

  constructor(
    private _fb: FormBuilder
  ) {
    this._data$ = new BehaviorSubject<AppOptionModel[]>([])
    this._loading$ = new BehaviorSubject<boolean>(false)
    this.formSubmit$ = new EventEmitter<FormData>()
  }

  ngOnInit(): void {
    this.formGroup = this._fb.group({
      bucketLocation: [
        { value: this.bucketList[0].value || null, disabled: false },
        [Validators.required]
      ]
    })
  }

  formSubmit() {
    this.formSubmit$.emit(this.formGroup.value)
  }

}

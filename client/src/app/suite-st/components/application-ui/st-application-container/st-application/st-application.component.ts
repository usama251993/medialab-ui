import { Component, OnInit, Input, Output, EventEmitter, SimpleChange } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { AppOptionModel } from '@shared/models/app-assets.model'
import { StApplicationModel } from '@st-core/models/st-app.model'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-st-application',
  templateUrl: './st-application.component.html',
  styleUrls: ['./st-application.component.scss']
})
export class StApplicationComponent implements OnInit {

  _data$: BehaviorSubject<StApplicationModel[]>
  formGroup: FormGroup

  @Output() formSubmit$: EventEmitter<FormData>

  @Input()
  set appList(value: StApplicationModel[]) { this._data$.next(value) }
  get appList(): StApplicationModel[] { return this._data$.getValue() }


  constructor(
    private _fb: FormBuilder,
  ) {
    this._data$ = new BehaviorSubject<StApplicationModel[]>(null)
    this.formSubmit$ = new EventEmitter<FormData>()
    this.formGroup = this._fb.group({
      appName: [
        { value: this._data$[0] || null, disabled: false },
        [Validators.required]
      ]
    })
  }

  ngOnInit(): void {

  }

  formSubmit() {
    localStorage.setItem('appName', JSON.stringify(this.formGroup.value.appName))
    this.formSubmit$.emit(this.formGroup.value.appName)
  }

  // ngOnChanges(change: SimpleChange) {
  // console.log(change, this._data$.getValue())
  // console.log(this.appList.values())
  // }

}

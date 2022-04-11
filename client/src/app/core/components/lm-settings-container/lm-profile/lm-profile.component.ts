import { Component, Input, OnInit, SimpleChange } from '@angular/core';
import { LmKBAccountModel } from '@lm-core/models/lm-kb.model';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-lm-profile',
  templateUrl: './lm-profile.component.html',
  styleUrls: ['./lm-profile.component.scss']
})
export class LmProfileComponent implements OnInit {

  private _profileDetails$: BehaviorSubject<LmKBAccountModel>
  displayedColumns = ['parameter', 'value']
  profileDetailsData: { parameter: string; value: string | number }[]

  @Input()
  set profileDetails(value: LmKBAccountModel) { this._profileDetails$.next(value) };
  get profileDetails(): LmKBAccountModel { return this._profileDetails$.getValue() };

  constructor() {
    this._profileDetails$ = new BehaviorSubject<LmKBAccountModel>(null)
  }

  ngOnInit(): void {
    this._profileDetails$.subscribe(_ => {
      if (!!_) {
        this.profileDetailsData = []
        for (let _key in _) {
          if (!!_[_key] && _[_key] != []) this.profileDetailsData.push({ parameter: `${_key.charAt(0).toUpperCase()}${_key.slice(1)}`, value: _[_key] })
        }
      }
    })


    // console.log(this.profileDetails["_value"])
    // this._profileDetails$.subscribe(_ => {
    // if (!!_["_value"]) console.log(this.profileDetails["_value"])

    // })

  }

  // ngOnChanges(change: SimpleChange) {
  //   console.log(this.profileDetails)
  // }

}

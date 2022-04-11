import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lm-kbprofile',
  templateUrl: './lm-kbprofile.component.html',
  styleUrls: ['./lm-kbprofile.component.scss']
})
export class LmKbprofileComponent implements OnInit {

  userDetails: any
  userDetailsData: any
  displayedColumns = ['parameter', 'value']

  constructor() { }

  ngOnInit(): void {
    this.userDetails = JSON.parse(localStorage.getItem("user"))
    this.userDetailsData = []

    for (let _key in this.userDetails) {
      var x: string[] = _key.split("/")
      if (!!this.userDetails[_key] && this.userDetails[_key] != []) this.userDetailsData.push({ parameter: `${x[x.length - 1].charAt(0).toUpperCase()}${x[x.length - 1].slice(1)}`, value: this.userDetails[_key] })
    }
  }

}

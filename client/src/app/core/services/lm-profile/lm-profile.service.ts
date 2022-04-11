import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class LmProfileService {

  assetsModel: any

  constructor() {
    this.assetsModel = [
      {
        title: 'WSO2 Profile',
      },
      {
        title: 'KillBill Profile',
      },
      // {
      //   title: 'Payment Method',
      // },
      // {
      //   title: 'Subscriptions',
      // },
      // {
      //   title: 'Invoices',
      // },
      // {
      //   title: 'Payments',
      // },
    ]
  }

  fetchAssets(): Observable<any> {
    return of([...this.assetsModel])
  }

}

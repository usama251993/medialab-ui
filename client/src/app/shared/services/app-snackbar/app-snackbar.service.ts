import { Injectable } from '@angular/core'
import { MatSnackBar } from '@angular/material/snack-bar'

import { AppButtonModel } from '@shared/models/app-assets.model'


@Injectable({
  providedIn: 'root'
})
export class AppSnackbarService {

  constructor(
    private _snackbar: MatSnackBar
  ) { }

  showSnackbar(_: {
    message: string
    button: AppButtonModel
  }): void {
    this._snackbar.open(_.message, _.button.text, {
      duration: 5000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
  }

}

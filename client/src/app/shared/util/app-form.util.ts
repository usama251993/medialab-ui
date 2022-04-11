import { FormGroup } from '@angular/forms'

export function getFormControlValue(_: {
  formGroup: FormGroup
  formControlName: string
}): any {
  return _.formGroup.get(_.formControlName).value
}

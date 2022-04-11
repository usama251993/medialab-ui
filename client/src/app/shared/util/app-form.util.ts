import { FormGroup } from '@angular/forms'

export function getFormControlValue(payload: {
  formGroup: FormGroup
  formControlName: string
}): any {
  return payload.formGroup.get(payload.formControlName).value
}

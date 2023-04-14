import { AbstractControl, FormControl, FormGroup } from "@angular/forms";

export class CustomDateValidator{
    static DatesValidators(control:FormGroup) {
        debugger
        const today = new Date();
        const startDate = control.get('startDate')?.value;
        const endDate = control.get('endDate')?.value;
        // if (startDate > endDate) {
        //   return {'startDateGreaterThanEndDate': true};
        // } else if (startDate < today || endDate < today) {
        //   return {'dateInPast': true};
        // } else {
        //   return null;
        // }
    }
}
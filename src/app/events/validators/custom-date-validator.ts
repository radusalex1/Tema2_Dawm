import { AbstractControl, FormControl, FormGroup } from "@angular/forms";

export class CustomValidator{
    static DatesValidators(control:FormGroup) {
        debugger
        const today = new Date();
        const startDate = control.get('startDate')?.value;
        const endDate = control.get('endDate')?.value;
    }
    static pointsValidator(controlForm:FormControl){
        console.log(controlForm)
        if(controlForm.value<0){
            return {
                minPoints:true
            }
        }
        return null
    }
}
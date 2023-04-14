import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EventsService } from 'src/app/services/events.service';
import { CustomValidator } from '../validators/custom-date-validator';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent {
  editEventForm!: FormGroup;

  constructor(private fb:FormBuilder,private eventsService:EventsService){}

  ngOnInit(){
    this.initializeForm()
  }

  private initializeForm(){
    this.editEventForm= this.fb.group({
      startDate:["",[Validators.required]],
      endDate:['',[Validators.required]],
      location:['',[Validators.required]],
      name:['',[Validators.required]],
      organizer:['',[Validators.required]],
      points:['',[Validators.required,CustomValidator.pointsValidator]]
    })
  }

  submitForm(){
    debugger
    if(this.editEventForm.valid){
      console.log(this.editEventForm.value)
      this.eventsService.add_event(this.editEventForm.value).subscribe({
        next:(res)=>{
          alert(res.message)
        }
      })
    }
  }

  get name(){
    return this.editEventForm.get("name")
  }
  get startDate() {
    return this.editEventForm.get('startDate');
  }
  
  get endDate() {
    return this.editEventForm.get('endDate');
  }
  
  get location() {
    return this.editEventForm.get('location');
  }
  
  get organizer() {
    return this.editEventForm.get('organizer');
  }
  
  get points() {
    return this.editEventForm.get('points');
  }
}

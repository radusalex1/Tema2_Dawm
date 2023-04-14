import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventsService } from 'src/app/services/events.service';
import { IEvent } from '../../interfaces/event';
import { CustomValidator } from '../validators/custom-date-validator';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.scss']
})
export class EditEventComponent {
  @Input() eventToEdit: IEvent;

  editEventForm!: FormGroup;

  constructor(private fb:FormBuilder,private eventsService:EventsService){}

  ngOnInit(){
    this.initializeForm()
  }

  private initializeForm(){
    console.log(this.eventToEdit)
    this.editEventForm= this.fb.group({
      id:[this.eventToEdit.id,[Validators.required]],
      startDate:[this.eventToEdit.startDate,[Validators.required]],
      endDate:[this.eventToEdit.endDate,[Validators.required]],
      location:[this.eventToEdit.location,[Validators.required]],
      name:[this.eventToEdit.name,[Validators.required]],
      organizer:[this.eventToEdit.organizer.email,[Validators.required]],
      points:[this.eventToEdit.points,[Validators.required,CustomValidator.pointsValidator]]
      })
  }

  submitForm(){
    debugger
    if(this.editEventForm.valid){
      console.log(this.editEventForm.value)
      this.eventsService.edit_event(this.editEventForm.value).subscribe({
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
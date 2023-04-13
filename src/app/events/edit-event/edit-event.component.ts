import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventsService } from 'src/app/services/events.service';
import { IEvent } from '../../interfaces/event';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.scss']
})
export class EditEventComponent {
  @Input() eventToEdit: IEvent | undefined;

  editEventForm!: FormGroup;

  constructor(private fb:FormBuilder,private eventsService:EventsService){}

  ngOnInit(){
    this.initializeForm()
  }

  private initializeForm(){
    console.log(this.eventToEdit)
    this.editEventForm= this.fb.group({
      id:[this.eventToEdit?.id,[Validators.required]],
      startDate:[this.eventToEdit?.startDate,[Validators.required]],
      endDate:[this.eventToEdit?.endDate,[Validators.required]],
      location:[this.eventToEdit?.location,[Validators.required]],
      name:[this.eventToEdit?.name,[Validators.required]],
      organizer:[this.eventToEdit?.organizer,[Validators.required]],
      points:[this.eventToEdit?.points,[Validators.required]]
    })
  }

  submitForm(){
    debugger
    if(this.editEventForm.valid){
      console.log(this.editEventForm.value)
      // this.eventsService.edit_event(this.editEventForm.value)
    }
  }
}
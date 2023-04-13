import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EventsService } from 'src/app/services/events.service';

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
      points:['',[Validators.required]]
    })
  }

  submitForm(){
    debugger
    if(this.editEventForm.valid){
      console.log(this.editEventForm.value)
      this.eventsService.add_event(this.editEventForm.value).subscribe((res)=>{
        console.log(res)
      })
    }
  }
}

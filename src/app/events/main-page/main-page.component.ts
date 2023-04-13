import { Component } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { AddEventComponent } from '../add-event/add-event.component';
import { EditEventComponent } from '../edit-event/edit-event.component';
import { IEvent } from '../../interfaces/event';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {

  events:IEvent[]=[]
  
  constructor(private eventsService:EventsService,private modal: NzModalService){ }

  ngOnInit(){
    this.eventsService.get_events().subscribe((res)=>{
      this.events=res
    })
    console.log(this.events)
  }

  addNewEvent() {
    this.modal.create({
      nzTitle:"Add-event",
      nzContent:AddEventComponent,
      nzFooter:null
    })
  }

  editEvent(event:IEvent){
    this.modal.create({
      nzTitle:"edit-event",
      nzContent:EditEventComponent,
      nzFooter:null,
      nzComponentParams: {
        eventToEdit: event
      }
    })
  }
}
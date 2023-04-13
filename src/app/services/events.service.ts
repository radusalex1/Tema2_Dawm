import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEvent } from 'src/app/interfaces/event';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  base_url='https://localhost:7027/api/Events'

  constructor(private http:HttpClient) { }

  get_events(){
    return this.http.get<IEvent[]>(this.base_url)
  }

  add_event(event:IEvent){
    event.organizer=1
    event.description="123"
    debugger;
    return this.http.post<any>(this.base_url,event)
  }

  edit_event(event:IEvent){
    return this.http.put<any>(this.base_url,event)
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsRoutingModule } from './events-routing.module';
import { MainPageComponent } from './main-page/main-page.component';
import { EditEventComponent } from './edit-event/edit-event.component';
import { AddEventComponent } from './add-event/add-event.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { FormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { ReactiveFormsModule } from '@angular/forms';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzFormModule } from 'ng-zorro-antd/form';

@NgModule({
  declarations: [
    MainPageComponent,
    EditEventComponent,
    AddEventComponent,
  ],
  imports: [
    CommonModule,
    EventsRoutingModule,
    NzTableModule,
    NzModalModule,
    NzIconModule,
    FormsModule,
    NzInputModule,
    ReactiveFormsModule,
    FormsModule,
    NzLayoutModule,
    NzFormModule
  ]
})
export class EventsModule { }

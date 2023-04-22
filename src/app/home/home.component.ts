import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NzButtonSize } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  size: NzButtonSize = 'large';

  constructor(private router:Router){}

  openEventsPage(){
    this.router.navigate(["events"])
  }
}

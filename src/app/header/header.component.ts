import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title: string = 'Get It Done!';
  @Input() numTasks: number;

  constructor() { }

  ngOnInit() {
  }

}

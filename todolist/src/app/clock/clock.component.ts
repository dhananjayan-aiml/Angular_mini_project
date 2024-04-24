import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {
  dateTime: string[] = [];

  ngOnInit() {
    this.updateDateTime();
    setInterval(() => this.updateDateTime(), 1000);
  }

  updateDateTime() {
    const now = new Date();
    this.dateTime = [
      now.toLocaleDateString('en-US', { weekday: 'long' }),
      now.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      now.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric' })
    ];
  }
}
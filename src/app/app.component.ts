import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Dhanan';
  textTransform: string = 'capitalize';

  changeCase(caseType: string) {
    this.textTransform = caseType;
  }
}
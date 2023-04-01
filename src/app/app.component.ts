import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'demo-joris';

  helloWorld = 'Hello word';
  veryLongNumber = 1237439827498732;

  name: string | undefined;

  loadingFruits = true;
  fruits = ['Apple', 'Pear', 'Cherry'];

  onClickLog(): void {
    console.log(this.name);
  }

  onClickSetToRuben(): void {
    this.name = 'Ruben';
  }
  constructor() {}
}

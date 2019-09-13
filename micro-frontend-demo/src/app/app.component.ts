import { Component } from '@angular/core';
import * as luigiClient from '@kyma-project/luigi-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Micro-Frontend Angular';
  myColor = ['#2196f3', '#3f51b5', '#673ab7', '#009688', '#ff5722', '#795548', '#607d8b', '#e91e63', '#f44336', '#9c27b0'];

  data = [{
    displayName: 'Micro-Frontend Angular',
    link: 'two'
  }, {
    displayName: 'Micro-Frontend React',
    link: 'three'
  }, {
    displayName: 'Application',
    link: 'app'
  }];

  redirectToNextMS(i): void {
    luigiClient.linkManager().withParams({id: i.link}).navigate(`/home/${i.link}`, null, true);
  }
  showHoverColor(i) {
    document.querySelector(`#element${i}`).style.backgroundColor = this.myColor[Math.round(Math.random() * (this.myColor.length - 1))];
  }

  resetHoverColor(i) {
    document.querySelector(`#element${i}`).style.backgroundColor = '#354a5e';
  }
}

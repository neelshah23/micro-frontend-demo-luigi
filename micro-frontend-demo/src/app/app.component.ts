import { Component } from '@angular/core';
import * as luigiClient from '@kyma-project/luigi-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'micro-frontend-demo';

  data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  redirectToNextMS(i): void {
    luigiClient.linkManager().withParams({id: i}).navigate('/home/two', null, true);
  }
}

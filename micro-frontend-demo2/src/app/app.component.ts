import {Component, OnInit} from '@angular/core';
import * as luigiClient from '@kyma-project/luigi-client';
import {addContextUpdateListener} from '@kyma-project/luigi-client/luigi-client';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'micro-frontend-demo2';
  cudListener: any;
  clickCount = 0;

  ngOnInit(): void {
    // this.cudListener = addContextUpdateListener(updatedContext => {
    //   console.log(updatedContext);
    // });
  }

  goToReactApp() {
    luigiClient.linkManager().navigate('/home/three', null, false);
  }
  buttonClick(message) {
    ++this.clickCount;
    alert(message);
  }
}

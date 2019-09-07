import {Component, OnInit} from '@angular/core';
import * as luigiClient from '@kyma-project/luigi-client';
import {addContextUpdateListener, getClientPermissions, uxManager} from '@kyma-project/luigi-client/luigi-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'micro-frontend-demo2';
  cudListener: any;

  ngOnInit(): void {
    console.log(luigiClient.getNodeParams());
    this.cudListener = addContextUpdateListener(updatedContext => {
      console.log(updatedContext);
      // this.projectId = updatedContext.currentProject;
      // this.preservedViewCallbackContext = updatedContext.goBackContext;
      // this.currentLocale = uxManager().getCurrentLocale();
      // this.canChangeLocale = getClientPermissions().changeCurrentLocale;
      // console.log('context updated', this.currentLocale, updatedContext);
      // // Be sure to check for destroyed ChangeDetectorRef,
      // // else you get runtime Errors
      // if (!this.cdr['destroyed']) {
      //   this.cdr.detectChanges();
      // }
    });
  }
}

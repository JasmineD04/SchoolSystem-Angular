import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './component/sidenav/sidenav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { ShowErrorComponent } from './component/show-error/show-error.component';
import { NgbToast, NgbToastModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    SidenavComponent,
    ShowErrorComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule,
    NgbToastModule
  ],
  exports:[
    SidenavComponent,
    ShowErrorComponent
    
  ]
})
export class SharedModule { }

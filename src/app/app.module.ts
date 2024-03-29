import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './shared/component/sidenav/sidenav.component';
import { SharedModule } from './shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { FormComponent } from './form/form.component';

// import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { AuthenticationModule } from './authentication/authentication.module';
import { HomeModule } from './home/home.module';
import { TeacherModule } from './teacher/teacher.module';
import { ParentModule } from './parent/parent.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


// import { GoogleChartsModule } from 'angular-google-charts/public_api';


@NgModule({
  declarations: [
    AppComponent,
    // TeacherListComponent,
  ],
  imports:[
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    AuthenticationModule,
    HomeModule,
    TeacherModule,
    ParentModule,
  
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

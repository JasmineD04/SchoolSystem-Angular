import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './shared/component/sidenav/sidenav.component';
import { SharedModule } from './shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StudentListComponent } from './student-list/student-list.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { AuthenticationModule } from './authentication/authentication.module';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    TeacherListComponent,
  ],
  imports:[
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    NgbModule,
    AuthenticationModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleComponent } from './role/role.component';
import { AboutComponent } from './about/about.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    RoleComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    AboutComponent,
    RoleComponent
  ]
})
export class HomeModule { }

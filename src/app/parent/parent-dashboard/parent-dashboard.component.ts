import { Component, OnInit } from '@angular/core';
import { faBell, faBookReader, faChalkboardTeacher, faClose, faComment, faDashboard, faRulerVertical, faSearch, faSignOut, faUserGraduate } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-parent-dashboard',
  templateUrl: './parent-dashboard.component.html',
  styleUrls: ['./parent-dashboard.component.css']
})
export class ParentDashboardComponent implements OnInit {

  constructor() { }

  sidenavCollapse=true;
  cmpltnavCollapse=false;

  ngOnInit(): void {
  }



 

  icons={
    dashboardIcon:faDashboard,
    userIcon:faUserGraduate,
    // teacherIcon:faUser,
    teacherIcon:faChalkboardTeacher,
    rulerIcon:faRulerVertical,
    bookIcon:faBookReader,
    searchIcon:faSearch,
    commentIcon:faComment,
    signoutIcon:faSignOut,
    bellIcon:faBell,
    closeicon:faClose,

  }

}




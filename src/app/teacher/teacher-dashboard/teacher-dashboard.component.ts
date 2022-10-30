import { Component, OnInit } from '@angular/core';
import { faBell, faBookReader, faChalkboardTeacher, faClose, faComment, faDashboard, faRulerVertical, faSearch, faSignOut, faUserGraduate } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-teacher-dashboard',
  templateUrl: './teacher-dashboard.component.html',
  styleUrls: ['./teacher-dashboard.component.css']
})
export class TeacherDashboardComponent implements OnInit {

  constructor() { }

  sidenavCollapse=true;
  cmpltnavCollapse=false;

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


  ngOnInit(): void {
  }

}

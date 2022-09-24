import { Component, OnInit } from '@angular/core';
import { faDashboard,faUserGraduate,faChalkboardTeacher,faSearch,faRulerVertical,faBookReader,faComment,faBell,faSignOut} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

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
    bellIcon:faBell

  }

  constructor() { }


  ngOnInit(): void {
  }

}

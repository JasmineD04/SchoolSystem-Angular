import { Component, OnInit } from '@angular/core';
import { ToastsService } from './toasts.service';

@Component({
  selector: 'app-show-error',
  templateUrl: './show-error.component.html',
  styleUrls: ['./show-error.component.css']
})
export class ShowErrorComponent implements OnInit {

  constructor(public toastsService :ToastsService) { }

  ngOnInit(): void {
  }

}

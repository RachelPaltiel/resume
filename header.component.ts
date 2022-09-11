import { AbsoluteSourceSpan } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { Routes, RoutesRecognized } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent implements OnInit {


  constructor() {
  }

  ngOnInit(): void {

  }

}

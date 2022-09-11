import { BuiltinTypeName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  ShowEladDiv() {
    document.getElementById("EladDiv")!.style.display = "block";
    document.getElementById("FinbotDiv")!.style.display = "none";
    document.getElementById("MyHrDiv")!.style.display = "none";
  };

  ShowFinbotDiv() {
    document.getElementById("EladDiv")!.style.display = "none";
    document.getElementById("FinbotDiv")!.style.display = "block";
    document.getElementById("MyHrDiv")!.style.display = "none";
  };

  ShowMyHRDiv() {
    document.getElementById("EladDiv")!.style.display = "none";
    document.getElementById("FinbotDiv")!.style.display = "none";
    document.getElementById("MyHrDiv")!.style.display = "block";
  };

  constructor() { 

  }

  ngOnInit(): void {
  }

}

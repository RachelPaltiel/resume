import { BuiltinTypeName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  ShowEladQAS() {
    document.getElementById("EladQA")!.style.display = "block";
    document.getElementById("FinbotPM")!.style.display = "none";
    document.getElementById("FinbotQA")!.style.display = "none";
  };

  ShowFinbotPM() {
    document.getElementById("EladQA")!.style.display = "none";
    document.getElementById("FinbotPM")!.style.display = "block";
    document.getElementById("FinbotQA")!.style.display = "none";
  };

  ShowFinbotQA() {
    document.getElementById("EladQA")!.style.display = "none";
    document.getElementById("FinbotPM")!.style.display = "none";
    document.getElementById("FinbotQA")!.style.display = "block";
  };

  constructor() { 

  }

  ngOnInit(): void {
  }

}

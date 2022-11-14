import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  showClient() {
    document.getElementById("client")!.style.display = "block";
    document.getElementById("server")!.style.display = "none";
    document.getElementById("frameWork")!.style.display = "none";
    document.getElementById("tools")!.style.display = "none";
  }

  showServer() {
    document.getElementById("client")!.style.display = "none";
    document.getElementById("server")!.style.display = "block";
    document.getElementById("frameWork")!.style.display = "none";
    document.getElementById("tools")!.style.display = "none";
  }

  showFrameWork() {
    document.getElementById("client")!.style.display = "none";
    document.getElementById("server")!.style.display = "none";
    document.getElementById("frameWork")!.style.display = "block";
    document.getElementById("tools")!.style.display = "none";
  }

  
  showTools() {
    document.getElementById("client")!.style.display = "none";
    document.getElementById("server")!.style.display = "none";
    document.getElementById("frameWork")!.style.display = "none";
    document.getElementById("tools")!.style.display = "block";
  }
  constructor() { }

  ngOnInit(): void {
  }

}

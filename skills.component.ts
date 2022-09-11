import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  showWikiSQL() {
    document.getElementById("SQLWiki")!.style.display="block";
    document.getElementById("CSharpWiki")!.style.display="none";
    document.getElementById("HtmlWiki")!.style.display="none";
    document.getElementById("CSSWiki")!.style.display="none";  
    document.getElementById("JSWiki")!.style.display="none";
    document.getElementById("TSWiki")!.style.display="none";
    document.getElementById("AngularWiki")!.style.display="none";
  }

  showWikiCSharp() {
    document.getElementById("SQLWiki")!.style.display="none";
    document.getElementById("CSharpWiki")!.style.display="block";
    document.getElementById("HtmlWiki")!.style.display="none";
    document.getElementById("CSSWiki")!.style.display="none";  
    document.getElementById("JSWiki")!.style.display="none";
    document.getElementById("TSWiki")!.style.display="none";
    document.getElementById("AngularWiki")!.style.display="none";
  }
  showWikiHtml() {
    document.getElementById("SQLWiki")!.style.display="none";
    document.getElementById("CSharpWiki")!.style.display="none";
    document.getElementById("HtmlWiki")!.style.display="block";
    document.getElementById("CSSWiki")!.style.display="none";  
    document.getElementById("JSWiki")!.style.display="none";
    document.getElementById("TSWiki")!.style.display="none";
    document.getElementById("AngularWiki")!.style.display="none";
  }
  showWikiCSS() {

    document.getElementById("SQLWiki")!.style.display="none";
    document.getElementById("CSharpWiki")!.style.display="none";
    document.getElementById("HtmlWiki")!.style.display="none";
    document.getElementById("CSSWiki")!.style.display="block";  
    document.getElementById("JSWiki")!.style.display="none";
    document.getElementById("TSWiki")!.style.display="none";
    document.getElementById("AngularWiki")!.style.display="none";
  }
  showWikiJS() {

    document.getElementById("SQLWiki")!.style.display="none";
    document.getElementById("CSharpWiki")!.style.display="none";
    document.getElementById("HtmlWiki")!.style.display="none";
    document.getElementById("CSSWiki")!.style.display="none";  
    document.getElementById("JSWiki")!.style.display="block";
    document.getElementById("TSWiki")!.style.display="none";
    document.getElementById("AngularWiki")!.style.display="none";
  }
  showWikiTS() {
    
    document.getElementById("SQLWiki")!.style.display="none";
    document.getElementById("CSharpWiki")!.style.display="none";
    document.getElementById("HtmlWiki")!.style.display="none";
    document.getElementById("CSSWiki")!.style.display="none";  
    document.getElementById("JSWiki")!.style.display="none";
    document.getElementById("TSWiki")!.style.display="block";
    document.getElementById("AngularWiki")!.style.display="none";
  }
  showWikiAngular() {
    
    document.getElementById("SQLWiki")!.style.display="none";
    document.getElementById("CSharpWiki")!.style.display="none";
    document.getElementById("HtmlWiki")!.style.display="none";
    document.getElementById("CSSWiki")!.style.display="none";  
    document.getElementById("JSWiki")!.style.display="none";
    document.getElementById("TSWiki")!.style.display="none";
    document.getElementById("AngularWiki")!.style.display="block";
  }

  constructor() { }

  ngOnInit(): void {
  }

}

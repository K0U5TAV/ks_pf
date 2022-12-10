import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  public frontEnd = [
    'Angular',
    'Ionic',
    'HTML5',
    'CSS3',
    'ES6',
    'TypeScript',
    'SCSS'
  ]
  public backEnd = [
    'Groovy on Grails',
    'RDBMS',
    'MySQL',
    'GSP/JSP',
    'Data structures',
    'Java',
    'Spring MVC'
  ]

  public misc = [
    'Agile methodologies',
    'SDLC',
    'Jira',
    'GitHub',
    'NPM',
    'SDK man',
    'Shell',
    'Jenkins'
  ]

  constructor() { }

  ngOnInit() {

  }

}

import { Component, OnInit } from '@angular/core';
import { title } from 'process';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  public  appPageNames = ['work','edu','skills','pInfo']
  public appPages = [
    { title: 'Work', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  public labels=[`ADDRESS
  Khalore(near Bagnan
  college) Bagnan: Howrah
  WestBengal
  Pin: 711303
  India`, `PHONE
  +91-9836329176
  +91-7003207321`,`linkedIn: https://www.linkedin.com/in/koustav-santra/`
];
public details=[{
  title:  `ADDRESS`,
  details: [`Khalore(near Bagnan
    college)`,`Bagnan: Howrah
    WestBengal`,`Pin: 711303`, `India`]
},{
  title:  `PHONE`,
  details: [`+91-9836329176`,`+91-7003207321`]
} ,{
  title:  `linkedIn`,
  details: [`https://www.linkedin.com/in/koustav-santra/`]
}];
  //public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}

  ngOnInit(): void {
    this.appPages =this.appPageNames.map(_ => { return {
      title: _,
      url: `/folder/${_}`,
      icon: 'link',
      params: {

      }
    }});
  }
}

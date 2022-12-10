import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public route!: string;
  public nameMap: any;
  public componentName:string | undefined;

  constructor(private activatedRoute: ActivatedRoute) {
    this.nameMap = {
      work:'Work',
      skills:'Skills',
      pInfo:'Personal Info',
      edu:"Education"
    }
   }

  ngOnInit() {
    this.route = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.componentName = this.nameMap[this.route];
  }

}

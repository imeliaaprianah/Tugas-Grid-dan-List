import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Grid2',
  templateUrl: './Grid2.page.html',
  styleUrls: ['./Grid2.page.scss'],
})
export class grid2Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public toastButton = [
    {
      text: "Dismiss",
      role: "cancel",
      handler: () => {
        console.log("dismiss click");
      }
    }
  ]
}
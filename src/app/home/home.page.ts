import { Component, OnInit } from '@angular/core';
import { h } from 'ionicons/dist/types/stencil-public-runtime';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  userRole :string = " "
  constructor() {

  }
  ngOnInit(): void {
    console.log(history.state)
    this.userRole = history.state.userRole
  }

}
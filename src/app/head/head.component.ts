import { Component } from '@angular/core';

@Component({
  selector: 'px-head',
  templateUrl: './head.component.html'
})

export class HeadComponent {
  isShow:boolean = false;
  body:any = document.getElementsByTagName('body')[0];

  constructor() {
  }

  show(e:any) {
    this.isShow = true;
    this.body.classList.add('showing');

  }

  hide() {
    this.isShow = false;
    this.body.classList.remove('showing');
  }
}
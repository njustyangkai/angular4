import { Component } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({
  templateUrl: './full.component.html'
})

export class FullComponent {
  constructor(private title:Title) {
    this.title.setTitle('Home');
  }
}
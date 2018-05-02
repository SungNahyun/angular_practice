import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: `
    <h1>{{title}}</h1>
    <input type="text" [(ngModel)]="title">
    <textarea [(ngModel)]="title" (ngModelChange)="temp()"></textarea>`,
    styles : [`input,textarea{margin-top:20px;display:block;}`]
})
export class HelloComponent {
  title = 'Hello Component';  

  temp() {
    console.log('타이틀 변화', this.title);
  }
}
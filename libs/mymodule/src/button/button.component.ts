import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() text: string;

  onClick() {
    alert(`button text is: ${this.text}`);
  }

  constructor() {}

  ngOnInit() {}
}

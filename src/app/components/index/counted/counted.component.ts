import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counted',
  templateUrl: './counted.component.html',
  styleUrls: ['./counted.component.scss']
})
export class CountedComponent implements OnInit {

  isVisible = true;

  constructor() { }

  ngOnInit() {
  }

  public closePanel() {
    this.isVisible = false;
    setTimeout(() => {
      this.isVisible = true;
    }, 2000);
  }

}

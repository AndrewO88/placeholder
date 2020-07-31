import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-img-placeholder',
  templateUrl: './img-placeholder.component.html',
  styleUrls: ['./img-placeholder.component.css']
})
export class ImgPlaceholderComponent implements OnInit {
  @Input() img = '';
  @Input() text = '';
  @Input() fSize = '';


  constructor() {
  }

  ngOnInit(): void {

  }
}

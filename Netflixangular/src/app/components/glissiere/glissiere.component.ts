import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-glissiere',
  templateUrl: './glissiere.component.html',
  styleUrls: ['./glissiere.component.css'],
})
export class GlissiereComponent implements OnInit {
  @Input() sliderConfig;
  @Input() movies;
  @Input() title: string;

  constructor() {}

  ngOnInit(): void {}
}

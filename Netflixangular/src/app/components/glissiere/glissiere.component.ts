import { Component, Input, OnInit } from '@angular/core';
import { Films } from '../../models/films';

@Component({
  selector: 'app-glissiere',
  templateUrl: './glissiere.component.html',
  styleUrls: ['./glissiere.component.css'],
})
export class GlissiereComponent implements OnInit {
  @Input() sliderConfig;
  @Input() movies: Films;
  @Input() title: string;

  constructor() {}

  ngOnInit(): void {}
}

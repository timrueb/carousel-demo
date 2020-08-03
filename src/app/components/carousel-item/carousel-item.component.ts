import { Component, OnInit, Input } from '@angular/core';
import { Car } from 'src/app/model/Car';

@Component({
  selector: 'app-carousel-item',
  templateUrl: './carousel-item.component.html',
  styleUrls: ['./carousel-item.component.scss'],
})
export class CarouselItemComponent implements OnInit {
  @Input() car: Car;
  name: string;

  constructor() {}

  ngOnInit(): void {}
}

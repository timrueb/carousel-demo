import {
  Component,
  OnInit,
  AfterViewInit,
  AfterViewChecked,
  AfterContentInit,
  AfterContentChecked,
  OnChanges,
  ChangeDetectorRef,
  Input,
} from '@angular/core';

import { Car } from '../../model/Car';

import { CarService } from '../../services/car.service';

import * as jQ from 'jquery';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit, AfterViewInit {
  @Input() parentId: string;
  @Input() carouselType: string;

  carouselItems: Car[];

  // jQuery-vars for the correct display and transformation of the items.
  itemWidth: number = 0;
  itemsShown: number = 0;
  shift: number = 0;
  transformedBy: number = 0;
  wrapperWidth: number = 0;

  constructor(private carService: CarService, private ref: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.carouselItems =
      this.carouselType == 'recommended'
        ? this.carService.getRecommendedCars()
        : this.carService.getLatestUsedCars();
  }

  ngAfterViewInit(): void {
    const contentWrapper = jQ(
      `#${this.parentId} .carousel__content-wrapper:first`
    );

    // Update the wrapper width.
    this.wrapperWidth = +contentWrapper.css('width').split('px')[0];

    // Set the item width depending on the number of items shown.
    if (this.wrapperWidth <= 400) this.itemsShown = 1;
    else if (this.wrapperWidth <= 600) this.itemsShown = 2;
    else if (this.wrapperWidth <= 720) this.itemsShown = 3;
    else this.itemsShown = 4;

    this.itemWidth = this.wrapperWidth / this.itemsShown;

    // Update the width of the html-Element for content and the items accordingly.
    contentWrapper
      .find('.carousel__content:first')
      .css('width', `${this.itemWidth * this.carouselItems.length}px`);
    contentWrapper
      .children('app-carousel-item')
      .css('width', `${this.itemWidth}px`);

    this.ref.detectChanges();
  }

  updateItemSizing(contentWrapper = null): void {
    if (!contentWrapper)
      contentWrapper = jQ(`#${this.parentId} .carousel__content-wrapper:first`);

    // Update the wrapper width.
    this.wrapperWidth = +contentWrapper.css('width').split('px')[0];

    // Set the item width depending on the number of items shown.
    if (this.wrapperWidth <= 400) this.itemsShown = 1;
    else if (this.wrapperWidth <= 600) this.itemsShown = 2;
    else if (this.wrapperWidth <= 720) this.itemsShown = 3;
    else this.itemsShown = 4;

    this.itemWidth = this.wrapperWidth / this.itemsShown;

    // Update the width of the html-Element for content and the items accordingly.
    contentWrapper
      .find('.carousel__content:first')
      .css('width', `${this.itemWidth * this.carouselItems.length}px`);
    contentWrapper
      .children('app-carousel-item')
      .css('width', `${this.itemWidth}px`);

    this.updateTransformation(contentWrapper);
  }

  onArrowClick(direction: number) {
    if (this.shift + direction <= this.carouselItems.length - this.itemsShown) {
      if (this.shift + direction >= 0) {
        this.shift += direction;
        this.updateTransformation();
      }
    }
  }

  updateTransformation(contentWrapper = null): void {
    if (!contentWrapper)
      contentWrapper = jQ(`#${this.parentId} .carousel__content-wrapper:first`);

    this.shift = Math.min(
      this.shift,
      this.carouselItems.length - this.itemsShown
    );
    this.transformedBy = -this.shift * this.itemWidth;
  }
}

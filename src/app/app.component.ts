import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: string = 'carousel-demo';
  id: string = 'recommended-demo';
  carouselType: string = 'recommended';
}

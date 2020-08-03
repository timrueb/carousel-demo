export class Car {
  name: string;
  description: string;
  price: number;
  miles: number;
  image: string;
  href: string;

  constructor(
    name: string,
    description: string,
    price: number,
    miles: number,
    image: string,
    href: string
  ) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.miles = miles;
    this.image = image;
    this.href = href;
  }
}

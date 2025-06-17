import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-product',
  standalone: true,
  template: `
    <div class="product">
      <h2>{{ product.title }}</h2>
      <img [src]="product.image" [alt]="product.title" class="product-image" />
      <p>Price: $ {{ product.price }}</p>
      <button (click)="addToCart.emit(product)">Add to Cart</button>
    </div>
  `,
  styles: [`
    .product {
      border: 1px solid #ddd;
      padding: 10px;
      margin: 10px;
    }
    .product-image {
      max-width: 150px;
      height: auto;
      display: block;
      margin-bottom: 10px;
    }
  `]
})
export class ProductComponent  {
  @Input() product!: Product;
  @Output() addToCart = new EventEmitter<Product>();
}

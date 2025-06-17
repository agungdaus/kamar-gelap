import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Product } from './components/product/product.model';
import { ProductService } from './service/product.service';
import { ProductComponent } from "./components/product/product.component";
import { CartComponent } from "./components/cart/cart.component";
import { SearchComponent } from "./components/search/search.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductComponent, CartComponent, SearchComponent],
  template: `
    <app-search></app-search>
    <h1>Products</h1>
    <app-product
      *ngFor="let product of products"
      [product]="product"
      (addToCart)="onAddToCart($event)">
    </app-product>

    <!-- Standalone components -->
    <app-cart [items]="cart"></app-cart>
  `,
})
export class AppComponent implements OnInit {
  products: Product[] = [];
  cart: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }

  onAddToCart(product: Product) {
    this.cart.push(product);
    console.log('Added to cart:', product);
  }
}

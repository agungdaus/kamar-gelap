import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product/product.model';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="items.length > 0">
      <h3>Cart ({{ items.length }})</h3>
      <ul>
        <li *ngFor="let item of items">{{item.title}} - $ {{item.price}}</li>
      </ul>
    </div>
  `,
})
export class CartComponent {
  @Input() items: Product[] = [];
}

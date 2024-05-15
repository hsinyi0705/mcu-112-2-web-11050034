import { ProductService } from './../services/product.service';
import { CurrencyPipe } from '@angular/common';
import { Component, Input, inject, numberAttribute, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-detail-page',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product-detail-page.component.html',
  styleUrl: './product-detail-page.component.css',
})
export class ProductDetailPageComponent {
  @Input()
  router = inject(Router);

  product!: Product;

  private productService = inject(ProductService);

  onEdit(): void {
    this.router.navigate(['product', 'form', this.product.id]);
  }

  onRemove(): void {
    /** 東西刪掉消失後，直接回到原始產品清單頁面 */
    this.productService.remove(this.product.id).subscribe(() => this.router.navigate(['products']));
  }

  onBack(): void {
    this.router.navigate(['products']);
  }
}

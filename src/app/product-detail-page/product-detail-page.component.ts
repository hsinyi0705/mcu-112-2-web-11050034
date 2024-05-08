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
export class ProductDetailPageComponent implements OnInit {
  @Input({ transform: numberAttribute })
  id!: number;

  router = inject(Router);

  product!: Product;

  private productService = inject(ProductService);

  ngOnInit(): void {
    this.product = this.productService.getById(this.id);
  }

  onEdit(): void {
    this.router.navigate(['product', 'form', this.product.id]);
  }

  onRemove(): void {
    this.productService.remove(this.product.id);
    this.router.navigate(['products']);
    /** 東西刪掉消失後，直接回到原始產品清單頁面 */
  }

  onBack(): void {
    this.router.navigate(['products']);
  }
}

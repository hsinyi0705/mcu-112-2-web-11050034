import { CurrencyPipe } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../model/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-detail-page',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product-detail-page.component.html',
  styleUrl: './product-detail-page.component.css',
})
export class ProductDetailPageComponent {
  @Input()
  private router = inject(Router);

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

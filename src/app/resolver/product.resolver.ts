import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Product } from '../model/product';
import { ProductService } from '../services/product.service';

export const productResolver: ResolveFn<Product> = (route, state, productService = inject(ProductService)) => {
  const id = +route.paramMap.get('id')!;
  return productService.getById(id);
};

// 預載: 畫面載入前，資料就預先載入了

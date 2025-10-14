import { Component, inject } from '@angular/core';
import { Product } from '../../models/product.interface';
import { AsyncPipe, CurrencyPipe, UpperCasePipe } from '@angular/common';
import { ProductDetailComponent } from "../product-detail/product-detail.component";
import { ProductService } from '../../services/product.service';
import { Observable } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-product-list',
  imports: [CurrencyPipe, UpperCasePipe, ProductDetailComponent, AsyncPipe],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  selectedProduct: Product

  onSelect(product: Product) {
    this.selectedProduct = product
  }

  title: string = 'Products'

  productService = inject(ProductService)

  products$: Observable<Product[]> = this.productService.products$
  //products: Product[]

  // constructor() {
  //   this
  //     .productService
  //     .products$
  //     .pipe(
  //       takeUntilDestroyed()
  //     )
  //     .subscribe(
  //       response => this.products = response
  //     )
  // }

}

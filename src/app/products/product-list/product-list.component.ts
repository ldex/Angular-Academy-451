import { Component, inject } from '@angular/core';
import { Product } from '../../models/product.interface';
import { AsyncPipe, CurrencyPipe, SlicePipe, UpperCasePipe } from '@angular/common';
import { ProductDetailComponent } from "../product-detail/product-detail.component";
import { ProductService } from '../../services/product.service';
import { catchError, EMPTY, Observable } from 'rxjs';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  imports: [CurrencyPipe, UpperCasePipe, RouterLink, AsyncPipe, SlicePipe],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  selectedProduct: Product
  title: string = 'Products'
  message: string

  productService = inject(ProductService)
  router = inject(Router)

  // Pagination
  pageSize = 5
  start = 0
  end = this.pageSize
  pageNumber = 1

  previousPage() {
    this.start -= this.pageSize
    this.end -= this.pageSize
    this.pageNumber--
    this.selectedProduct = null
  }

  nextPage() {
    this.start += this.pageSize
    this.end += this.pageSize
    this.pageNumber++
    this.selectedProduct = null
  }

  onSelect(product: Product) {
    this.selectedProduct = product
    this.router.navigateByUrl('/products/' + product.id)
  }

  products$: Observable<Product[]> = this
                                        .productService
                                        .products$
                                        .pipe(
                                          catchError(
                                            errorMessage => {
                                              this.message = errorMessage
                                              return EMPTY
                                            }
                                          )
                                        )
}

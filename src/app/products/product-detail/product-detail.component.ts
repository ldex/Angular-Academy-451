import { Component, inject, Input } from '@angular/core';
import { Product } from '../../models/product.interface';
import { CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-product-detail',
  imports: [CurrencyPipe, UpperCasePipe, DatePipe],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {

  private activatedRoute = inject(ActivatedRoute)
  private productService = inject(ProductService)

  @Input() product: Product

  constructor() {
    let id = this.activatedRoute.snapshot.params.id

    this
      .productService
      .getProductById(id)
      .pipe(
        takeUntilDestroyed()
      )
      .subscribe(
        data => this.product = data
      )
  }




}

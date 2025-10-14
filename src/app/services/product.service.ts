import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { Product } from '../models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'https://671d383409103098807c943e.mockapi.io/api/products/';
  private http = inject(HttpClient)

  products$: Observable<Product[]>

  constructor() {
    this.initProducts()
  }

  initProducts() {
    this.products$ = this
                      .http
                      .get<Product[]>(this.baseUrl)
                      .pipe(
                        delay(1500) // for the demo!!
                      )
  }
}

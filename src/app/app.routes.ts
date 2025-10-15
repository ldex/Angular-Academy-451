import { Routes } from '@angular/router';
import { HomeComponent } from './shared/home.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ContactComponent } from './shared/contact.component';
import { AdminComponent } from './shared/admin.component';
import { ErrorComponent } from './shared/error.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';

export const routes: Routes = [
    { path: '', redirectTo:'/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'products', children: [
        { path: '', component: ProductListComponent },
        { path: ':id', component: ProductDetailComponent }
    ]},
    { path: 'contact', component: ContactComponent },
    { path: 'admin', component: AdminComponent },
    { path: '**', component: ErrorComponent }
];

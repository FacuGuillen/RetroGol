import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';

export const routes: Routes = [
    {
        path : "",
        component : HomeComponent
    },
    {
        path : "home",
        component : HomeComponent
    },
    {
        path : 'products',
        component : ProductsComponent
    },
    {
        path : 'signin',
        component : SigninComponent
    },
    {
        path : 'signup',
        component : SignupComponent
    }

];

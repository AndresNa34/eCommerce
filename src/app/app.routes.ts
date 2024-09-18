import { Routes } from '@angular/router';

//import {ListComponent} from './domains/products/pages/list/list.component';
//import {AboutComponent} from './domains/info/pages/about/about.component';
import {ProductDetailComponent} from './domains/products/pages/product-detail/product-detail.component';
import {LayoutComponent} from '@shared/components/layout/layout.component';
import {NotFoundComponent} from './domains/info/pages/not-found/not-found.component';

export const routes: Routes = [
    {
        path: '',
        component:LayoutComponent,
        children: [
            {
                path: '',
                //component: ListComponent Lazyloading, Normal
                loadComponent: () => import('./domains/products/pages/list/list.component') //Lazyloading
            },
            {
                path: 'about',
                loadComponent: () => import('./domains/info/pages/about/about.component')
            },
            {
                path: 'product/:id',
                component: ProductDetailComponent
            }

        ]
    },
    {
        path:'**',
        component: NotFoundComponent
    }
];

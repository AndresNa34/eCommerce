import { Component, inject, Input, signal, SimpleChanges } from '@angular/core';

import { ProductComponent } from '@products/components/product/product.component'
import {Product} from '@shared/models/product.model'
import { HeaderComponent } from "@shared/components/header/header.component";
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';
import { CategoryService } from '@shared/services/category.service';
import { Category } from '@shared/models/category.model';
import {RouterLinkWithHref} from '@angular/router'

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, HeaderComponent, RouterLinkWithHref],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export default /*Lazyloading needed default */class ListComponent {

  products = signal<Product[]>([]);
  categories = signal<Category[]>([]);
  private cartService = inject(CartService);
  private productService = inject(ProductService);
  private categoryService = inject(CategoryService);
  @Input() category_id?: string;

  ngOnInit(){
    this.getProducts();
    this.getCategories();
  }

  //Inspeccionar cuando hay un cambio, Simplechanges cada vez
  ngOnChanges(changes: SimpleChanges){
    //changes[''] guarda todos los cambios, inputs, signals,etc
    //doble llamado de getProducts, pero lo dejo asi, en on init y cada changes
    const category_id = changes['category_id'];
    if(category_id){
      this.getProducts();
    }
  }

  addToCart(product: Product){
    this.cartService.addToCart(product);
  }

  private getProducts(){
    this.productService.getProducts(this.category_id)
    .subscribe({
      next: (data) => {
        this.products.set(data);
      },
      error: () => {

      }
    })
  }

  private getCategories(){
    this.categoryService.getAll()
    .subscribe({
      next: (data) => {
        this.categories.set(data);
      },
      error: () => {

      }
    })
  }
}

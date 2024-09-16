import { Component, EventEmitter, Input, input, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  //required = true, son campos obligatorios
  @Input({required: true}) img: string = '';
  @Input({required: true}) price: number = 0;
  @Input({required: true}) title: string = '';

  @Output() addToCart = new EventEmitter();

  addToCartHandler (){
    console.log('Click from child');
    this.addToCart.emit("This is a message from the child " + this.title);
  }

}

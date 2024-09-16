import { Component, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input({required: true}) duration = 0;
  @Input({required: true}) message= '';

  //Constructor
  constructor(){
    // NO ASYNC
    // BEFORE RENDER
    //una vez

    console.log('constructor');
    console.log('-'.repeat(10));
  }

  //ngOnChanges

  ngOnChanges(changes: SimpleChange){ //cambios
    //Before and during render, detecta cambios al renderizar
    console.log('ngOnChanges');
    console.log('-'.repeat(10));
    console.log(changes);
  }

  //ngOnInit

  ngOnInit(){
    // after render
    //una vez
    //async, then, subs, promise
    console.log('ngOnInit');
    console.log('-'.repeat(10));
    console.log('duration => ', this.duration);
    console.log('message => ', this.message);
  }

  ngAfterViewInit(){
    // after render
    // hijos fueron renderiados?
    console.log('ngAfterViewInit');
    console.log('-'.repeat(10));
  }

  ngOnDestroy(){
    console.log('ngOnDestroy');
    console.log('-'.repeat(10));
  }
}

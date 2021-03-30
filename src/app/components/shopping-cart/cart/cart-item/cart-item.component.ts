import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input()cartItem: any;
  
  @Output() messageEvent = new EventEmitter<Product>();

  constructor(private msgService: MessageService) { }

  ngOnInit(): void {
  }

  delProduct(event) { 
    // console.log(this.cartItem);
    event.preventDefault();
     
     this.messageEvent.emit(this.cartItem);
    
  }

}

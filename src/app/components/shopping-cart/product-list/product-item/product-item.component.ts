import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { MessageService } from 'src/app/services/message.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() addedToWishList :boolean;

  @Input() productItem: Product;

  constructor(private msgService: MessageService,private cartService: CartService, private wishService: WishlistService) { }

  ngOnInit(): void {

  }

  addToCart(event) {
    event.preventDefault();
    this.cartService.addProductToCart(this.productItem).subscribe(( ) => {
    this.msgService.sengMesg(this.productItem);
  });
}

addToWishlist() {
  this.wishService.addToWishlist(this.productItem.id).subscribe(() => {
    this.addedToWishList = true;
  })

}

removeFromWishlist() {
  this.wishService.removeFromWishlist(this.productItem.id).subscribe(() => {
    this.addedToWishList = false;
  })

}
}

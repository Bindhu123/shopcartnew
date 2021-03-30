import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  wishlistId: number[];

  productList: Product[];

  constructor(private productService: ProductService, private wishSevice: WishlistService) { }

  ngOnInit(): void {
     this.productService.getProducts().subscribe(products => {
      this.productList = products;
   
      
    });
    this.loadWishlist();
  }

  loadWishlist() {
    this.wishSevice.getWishlist().subscribe(productId => {
      this.wishlistId = productId;

    })

  }

}

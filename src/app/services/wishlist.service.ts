import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { whishlistUrl } from '../config/api';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private http: HttpClient) { }
  addToWishlist(productId) {
    return this.http.post(whishlistUrl,{id: productId});

  }

  removeFromWishlist(productId) {
    return this.http.delete(whishlistUrl+'/'+productId);

  }

  getWishlist() {
    return this.http.get(whishlistUrl).pipe(
      map((result: any[]) => {
        let productIds = []

        result.forEach(item => productIds.push(item.id))

        return productIds;
      })
    )
  }
}
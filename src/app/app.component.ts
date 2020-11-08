import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './Product';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'heroku-ui-demo';
  productList: Product[];
  product: Product
  constructor(private http: HttpClient) {
    this.product = {
      id: null,
      name: 'Product1'
    }
    this.http.get<Product[]>(`${environment.serverUrl}/products`).subscribe(
      res=>this.productList=res
    );
  }

  saveProduct(){
    console.log(this.product);
    this.http.post<any>(`${environment.serverUrl}/product`, this.product).toPromise();
  }
}

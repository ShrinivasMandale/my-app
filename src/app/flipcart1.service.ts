import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Flipcart1Service {

  constructor(private _httpClient:HttpClient) { }

  getFlipcart1():Observable<any>{
    return this._httpClient.get("https://fakestoreapi.com/products");
  }
}

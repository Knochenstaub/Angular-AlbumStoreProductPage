import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Album} from './album';
import 'rxjs/add/operator/map';
import {Http, Response} from '@angular/http';

@Injectable()
export class ProductService {

  private _albumUrl = '../assets/album.json';
  constructor(private _http: HttpClient) { }

  getAlbum(id: number): Observable<Album> {
   return this._http.get(this._albumUrl).map(response => <Album>response.json());
    // return this._http.get<Album>(this._albumUrl);
  }
}

import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stock } from '../shared/model/stock-model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private URL = environment.urlAPI + '/stock';

  constructor(private http: HttpClient) { }

  public getStock(): Observable<Stock[]>{
    return this.http.get<Stock[]>(this.URL);
  }

  public getStockToday(): Observable<Stock[]>{
    return this.http.get<Stock[]>(this.URL + '/today');
  }

  public postStock(stock: Stock): Observable<Stock>{
    return this.http.post<Stock>(this.URL, stock);
  }




}

import { Stock } from './../../shared/model/stock-model';
import { DashboardService } from './../dashboard.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashborad-page',
  templateUrl: './dashborad-page.component.html',
  styleUrls: ['./dashborad-page.component.css']
})
export class DashboradPageComponent implements OnInit {

  constructor(private service: DashboardService) { }

  stocks: Stock[] = [];

  ngOnInit(): void {
    this.getAllStocks();
  }

  getAllStocks(): void {
    this.service.getStock().subscribe(
      (response) => {this.stocks = response, console.log(response); }
    );
  }

  getTodayStocks(): void{
    this.service.getStockToday().subscribe(
      (response) => {this.stocks = response, console.log(response); }
    );
  }

}

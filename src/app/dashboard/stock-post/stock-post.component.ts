import { Stock } from './../../shared/model/stock-model';
import { DashboardService } from './../dashboard.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stock-post',
  templateUrl: './stock-post.component.html',
  styleUrls: ['./stock-post.component.css']
})
export class StockPostComponent implements OnInit {

  constructor(
    private router: Router,
    private service: DashboardService) { }

  formulario = new FormGroup({
    name : new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    variation : new FormControl('', Validators.required),

  });

  ngOnInit(): void {
  }

  salvar(): void{
    const stock = new Stock();
    stock.date = new Date(Date.now()).toLocaleDateString();
    stock.name = this.formulario.value.name;
    stock.price = this.formulario.value.price;
    stock.variation = this.formulario.value.variation;

    this.service.postStock(stock).subscribe(
      () => this.router.navigate(['/']),
      (error) => console.log(error)
    );

  }



}

import { RouterModule } from '@angular/router';
import { DashboardService } from './dashboard.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboradPageComponent } from './dashborad-page/dashborad-page.component';
import { StockCardComponent } from './stock-card/stock-card.component';
import { HttpClientModule } from '@angular/common/http';
import { StockPostComponent } from './stock-post/stock-post.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DashboradPageComponent,
    StockCardComponent,
    StockPostComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: []

})
export class DashboardModule { }

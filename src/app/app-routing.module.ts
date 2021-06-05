import { StockPostComponent } from './dashboard/stock-post/stock-post.component';
import { DashboradPageComponent } from './dashboard/dashborad-page/dashborad-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '' , component: DashboradPageComponent},
  {path: 'stock-post' , component: StockPostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

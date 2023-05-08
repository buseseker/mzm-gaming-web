import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from "./home-page/home-page.component";
import { ServerPageComponent } from "./server-page/server-page.component";
import { ShopPageComponent } from "./shop-page/shop-page.component";

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'server', component: ServerPageComponent },
  { path: 'shop', component: ShopPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

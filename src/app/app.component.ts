import { Component } from '@angular/core';
import {ShopPageComponent } from "./shop-page/shop-page.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mzm-gaming-web';
  protected readonly ShopPageComponent = ShopPageComponent;
  public homePage = "";
  public shopPage = "/shop";

}

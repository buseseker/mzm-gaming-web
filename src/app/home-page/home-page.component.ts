import { Component } from '@angular/core';
import {ServerPageComponent} from "../server-page/server-page.component";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  public serverPage = "/server";
  scrollDown() {
    window.scrollBy({
        top: window.innerHeight,
        behavior: "smooth"
      }
    );
  }
  scrollUp(){
    window.scroll( {
      top:window.innerHeight/100,
      behavior:"smooth"
    })

}

  protected readonly ServerPageComponent = ServerPageComponent;
}

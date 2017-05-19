import { FullComponent } from "./full.component";
import { NgModule } from "@angular/core";
import { FullRoutingModule } from "./full-routing.module";
import { HeadComponent } from "../head/head.component";
import { HomeComponent } from "../home/home.component";

@NgModule({
  imports: [
    FullRoutingModule
  ],
  declarations: [
    FullComponent,
    HeadComponent,
    HomeComponent
  ],
  providers: []
})
export class FullModule {
}
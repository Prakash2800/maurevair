import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {HeaderComponent} from "./container/header.component";
import {ProfileComponent} from "./ui/profile.component";

@NgModule({
  declarations: [
    HeaderComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent
  ],
  providers: [],
})

export class HeaderModule {

}

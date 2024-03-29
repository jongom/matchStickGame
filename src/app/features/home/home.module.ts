import { NgModule } from '@angular/core';
import { SharedModule } from '@matchStick/shared';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    SharedModule, HomeRoutingModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }

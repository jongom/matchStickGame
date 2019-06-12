import 'hammerjs';
import { NgModule } from '@angular/core';;

import { AppComponent } from './app.component';
import { SharedModule } from '@matchStick/shared';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './features/home/home.module';

const featureModules = [HomeModule]

@NgModule({
  declarations: [AppComponent],
  imports: [...featureModules, SharedModule, CoreModule, AppRoutingModule],
  bootstrap: [AppComponent]
})
export class AppModule {
}

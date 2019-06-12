import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';


@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', loadChildren: './features/home/home.module#HomeModule' },
      { path: 'game', loadChildren: './features/game/game.module#GameModule' },
      { path: 'settings', loadChildren: './features/settings/settings.module#SettingsModule' },
      { path: 'exit', component:AppComponent,data : {exit :true} },
      { path: '**', redirectTo: 'home', pathMatch: 'full' }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}


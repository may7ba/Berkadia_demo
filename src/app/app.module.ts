import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { IntroductionComponent } from './introduction';
import { MovieComponent } from './movie';
import { CardGameComponent } from './card-game';
import { JokesComponent } from './jokes'

import { appRoutes } from './app.route';


@NgModule({
  declarations: [
    AppComponent,
    IntroductionComponent,
    MovieComponent,
    CardGameComponent,
    JokesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

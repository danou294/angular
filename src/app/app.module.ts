import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { PokemonsRoutingModule } from "./pokemon/pokemons-routing.module";

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from "./page-not-found.component";

@NgModule({
    imports: [
        BrowserModule,
        PokemonsRoutingModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        PageNotFoundComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
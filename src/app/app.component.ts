import {Component, HostListener} from '@angular/core';
import { OnInit } from '@angular/core';


import { Pokemon } from "./pokemon";
import { POKEMONS } from "./mock-pokemons";

@Component({
    selector: 'pokemon-app',
    templateUrl: './app/app.component.html',
})

export class AppComponent {
    private pokemons: Pokemon[];
    private title: string = "liste des pokemons"

    age = 12

    ngOnInit() {
        this.pokemons = POKEMONS
    }

    selectPokemon(pokemon : Pokemon){
        alert("vous avez cliqué sur " + pokemon.name)
    }
}



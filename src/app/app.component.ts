import {Component, HostListener} from '@angular/core';
import { Pokemon } from "./pokemon/pokemon";
import { POKEMONS } from "./pokemon/mock-pokemons";
import { Router } from "@angular/router";

@Component({
    selector: 'pokemon-app',
    templateUrl: './app/app.component.html',
})

export class AppComponent {
    private pokemons: Pokemon[];
    private title: string = "liste des pokemons"

    constructor(private router: Router) {
    }
    age = 12

    ngOnInit() {
        this.pokemons = POKEMONS
    }

    selectPokemon(pokemon : Pokemon){
        alert("vous avez cliqué sur " + pokemon.name)
        let link = ['/pokemon', pokemon.id];
        this.router.navigate(link);
    }
}

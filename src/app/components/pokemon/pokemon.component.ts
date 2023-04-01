import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Pokemon } from 'src/app/models/pokemon-api-result';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent implements OnInit {
  pokemons: Pokemon[] = [];
  pokemon$: Observable<Pokemon[]>;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemon$ = this.pokemonService.getAll().pipe(
      map((pokemonApiResult) => {
        return pokemonApiResult.results;
      })
    );

    this.pokemonService
      .getAll()
      .pipe(
        map((pokemonApiResult) => {
          return pokemonApiResult.results;
        })
      )
      .subscribe({
        next: (pokemons) => {
          console.log(pokemons);
          this.pokemons = pokemons;
        },
      });
  }
}

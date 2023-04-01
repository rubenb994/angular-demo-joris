import { Component, OnInit } from '@angular/core';
import { finalize, map } from 'rxjs';
import { Pokemon, PokemonApiResult } from 'src/app/models/pokemon-api-result';
import { PokemonDetails } from 'src/app/models/pokemon-details';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent implements OnInit {
  pokemons: Pokemon[] = [];
  pokemonDetails: PokemonDetails;
  selectedPokemonName: string;
  loadingPokemons = true;

  private apiResult: PokemonApiResult;
  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService
      .getAll('https://pokeapi.co/api/v2/pokemon/')
      .pipe(finalize(() => (this.loadingPokemons = false)))
      .subscribe({
        next: (apiResult) => {
          this.apiResult = apiResult;
          this.pokemons = apiResult.results;
        },
      });
  }

  onClickGetNextPage(): void {
    this.loadingPokemons = true;
    this.pokemonService
      .getAll(this.apiResult.next)
      .pipe(finalize(() => (this.loadingPokemons = false)))
      .subscribe({
        next: (apiResult) => {
          this.apiResult = apiResult;
          this.pokemons.push(...apiResult.results);
        },
      });
  }

  onClickGetPokemonDetails(pokemonName: string): void {
    this.selectedPokemonName = pokemonName;
    this.pokemonService.getByName(pokemonName).subscribe({
      next: (apiResults) => {
        this.pokemonDetails = apiResults;
      },
    });
  }

  onPokemonMoveClicked(moveName: string): void {
    console.log(moveName);
    // call the moves api & figure which pokemons have the same move
  }
}

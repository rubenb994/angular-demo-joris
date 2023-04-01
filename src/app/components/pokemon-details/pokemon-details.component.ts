import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PokemonDetails } from 'src/app/models/pokemon-details';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss'],
})
export class PokemonDetailsComponent {
  @Input() pokemonDetails: PokemonDetails;
  @Output() pokemonMoveClicked = new EventEmitter<string>();

  onClickMoveName(name: string) {
    this.pokemonMoveClicked.emit(name);
  }
}

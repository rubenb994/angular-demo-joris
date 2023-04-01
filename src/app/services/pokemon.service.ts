import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { PokemonApiResult } from '../models/pokemon-api-result';
import { PokemonDetails } from '../models/pokemon-details';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private httpClient: HttpClient) {}

  getAll(url: string): Observable<PokemonApiResult> {
    return this.httpClient.get<PokemonApiResult>(url).pipe(delay(5000));
  }

  getByName(name: string): Observable<PokemonDetails> {
    return this.httpClient.get<PokemonDetails>(
      `https://pokeapi.co/api/v2/pokemon/${name}`
    );
  }
}

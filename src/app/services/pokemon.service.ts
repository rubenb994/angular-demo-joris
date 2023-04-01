import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonApiResult } from '../models/pokemon-api-result';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<PokemonApiResult> {
    return this.httpClient.get<PokemonApiResult>(
      'https://pokeapi.co/api/v2/pokemon/'
    );
  }
}

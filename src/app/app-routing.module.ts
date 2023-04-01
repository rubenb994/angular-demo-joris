import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsComponent } from './components/items/items.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';

export class ApplicationRoutes {
  static pokemons = 'pokemons';
  static items = 'items';
}

const routes: Routes = [
  {
    path: '',
    redirectTo: ApplicationRoutes.pokemons,
    pathMatch: 'full',
  },
  {
    path: ApplicationRoutes.pokemons,
    component: PokemonComponent,
  },
  {
    path: ApplicationRoutes.items,
    component: ItemsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

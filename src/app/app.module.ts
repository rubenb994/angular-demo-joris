import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { ItemsComponent } from './components/items/items.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, FooterComponent, PokemonComponent, ItemsComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

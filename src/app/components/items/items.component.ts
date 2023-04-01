import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicationRoutes } from 'src/app/app-routing.module';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
})
export class ItemsComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onClickBackToPokemons(): void {
    this.router.navigate([ApplicationRoutes.pokemons]);
  }
}

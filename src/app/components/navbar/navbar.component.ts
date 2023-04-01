import { Component, OnInit } from '@angular/core';
import { ApplicationRoutes } from 'src/app/app-routing.module';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  readonly ApplicationRoutes = ApplicationRoutes;

  constructor() {}

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';
import { ComponentCompteurComponent } from '../component-compteur/component-compteur.component';
import { ComponentBetaComponent } from './component-beta/component-beta.component';

@Component({
  selector: 'app-component-alpha',
  standalone: true,
  templateUrl: './component-alpha.component.html',
  styleUrls: ['./component-alpha.component.css'],
  imports: [ComponentBetaComponent, ComponentCompteurComponent],
})
export class ComponentAlphaComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

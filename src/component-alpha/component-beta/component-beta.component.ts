import { Component, OnInit } from '@angular/core';
import { ComponentCompteurComponent } from '../../component-compteur/component-compteur.component';

@Component({
  selector: 'app-component-beta',
  standalone: true,
  templateUrl: './component-beta.component.html',
  styleUrls: ['./component-beta.component.css'],
  imports: [ComponentCompteurComponent],
})
export class ComponentBetaComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

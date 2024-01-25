import { Component, OnInit } from '@angular/core';
import { ComponentCompteurComponent } from '../../component-compteur/component-compteur.component';

@Component({
  selector: 'app-component-b',
  standalone: true,
  templateUrl: './component-b.component.html',
  styleUrls: ['./component-b.component.css'],
  imports: [ComponentCompteurComponent],
})
export class ComponentBComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

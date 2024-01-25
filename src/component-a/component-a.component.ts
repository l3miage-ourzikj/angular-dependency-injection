import { Component, OnInit } from '@angular/core';
import { ComponentCompteurComponent } from '../component-compteur/component-compteur.component';
import { CompteurServiceService } from '../compteur-service.service';
import { ComponentBComponent } from './component-b/component-b.component';

@Component({
  selector: 'app-component-a',
  standalone: true,
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.css'],
  imports: [ComponentBComponent, ComponentCompteurComponent],
  providers: [CompteurServiceService],
})
export class ComponentAComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

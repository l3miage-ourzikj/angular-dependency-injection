import { Component, OnInit } from '@angular/core';
import { CompteurServiceService } from '../compteur-service.service';

@Component({
  selector: 'app-component-compteur',
  standalone: true,
  templateUrl: './component-compteur.component.html',
  styleUrls: ['./component-compteur.component.css'],
})
export class ComponentCompteurComponent implements OnInit {
  private value: CompteurServiceService['value'];

  constructor(private compteurService: CompteurServiceService) {
    this.value = compteurService.getValue();
  }

  public increment(): void {
    this.compteurService.increment();
  }
  public decrement(): void {
    this.compteurService.decrement();
  }
  public getValue(): number {
    return this.value();
  }
  ngOnInit() {}
}

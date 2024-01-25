import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { ComponentAComponent } from './component-a/component-a.component';
import { ComponentAlphaComponent } from './component-alpha/component-alpha.component';
import { ComponentCompteurComponent } from './component-compteur/component-compteur.component';
import { CompteurServiceService } from './compteur-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './root.html',
  imports: [
    ComponentAlphaComponent,
    ComponentAComponent,
    ComponentCompteurComponent,
  ],
  providers: [CompteurServiceService],
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);

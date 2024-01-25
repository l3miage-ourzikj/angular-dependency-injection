import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CompteurServiceService {
  private value = signal<number>(0);
  constructor() {}

  public increment() {
    this.value.update((oldValue) => oldValue + 1);
  }
  public decrement() {
    this.value.update((oldValue) => oldValue - 1);
  }

  public getValue(): WritableSignal<number> {
    return this.value;
  }
}

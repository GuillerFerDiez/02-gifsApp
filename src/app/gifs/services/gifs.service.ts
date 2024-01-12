import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class GifsService {
  private _historial: string[] = [];

  get historial() {
    return [...this._historial];
  }

  buscarGifs(query: string) {
    if (query != "") {
      if (!this._historial.includes(query)) {
        this._historial.unshift(query);
        console.log(this._historial);
      }
    }
  }
}
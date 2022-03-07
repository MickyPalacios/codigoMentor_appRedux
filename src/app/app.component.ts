import { Component } from '@angular/core';
import { appState } from './app.reducer';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromMensaje from './mensaje.action'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  dato$: Observable<any>;
  
  constructor(private store : Store<appState>) {
    this.dato$ = this.store.select<any>('mensaje');         
  }

  spanishMensaje() {
    this.store.dispatch(new fromMensaje.SpanishMensaje('Los colores'));
  }
  englishMensaje() {
    this.store.dispatch(new fromMensaje.EnglishMensaje('yellow'));
  }
}

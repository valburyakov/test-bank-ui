import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private spinnerObservable = new Subject<boolean>();
  loading$ = this.spinnerObservable.asObservable();

  constructor() { }

  showSpinner(): void {
    this.spinnerObservable.next(true);
  }

  hideSpinner(): void {
    this.spinnerObservable.next(false);
  }
}

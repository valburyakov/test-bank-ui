import { InjectionToken } from '@angular/core';
import { Diff2Html } from 'diff2html';

export const DIFF2HTML_TOKEN = new InjectionToken<Diff2Html.Diff2Html>('Manually constructed Diff2Html', {
  providedIn: 'root',
  factory: () => window['Diff2Html'],
});

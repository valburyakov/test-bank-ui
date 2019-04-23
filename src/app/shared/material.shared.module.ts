import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatChipsModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule, MatSelectModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatChipsModule
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatChipsModule
  ]
})
export class MaterialSharedModule {
}

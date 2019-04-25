import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatChipsModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule, MatProgressBarModule, MatProgressSpinnerModule, MatSelectModule
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
    MatChipsModule,
    MatProgressSpinnerModule,
    MatProgressBarModule
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatProgressBarModule
  ]
})
export class MaterialSharedModule {
}

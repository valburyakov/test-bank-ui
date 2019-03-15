import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MatFormFieldModule, MatIconModule, MatInputModule, MatListModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { LayoutComponent } from './layout/layout.component';
import { SidenavListComponent } from './sidenav-list/sidenav-list.component';

@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    SidenavListComponent,
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule { }

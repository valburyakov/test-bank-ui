import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { ProjectCreateComponent } from './project-create/project-create.component';
import { AppRoutingModule } from './app-routing.module';
import { TestCasesListComponent } from './test-cases-list/test-cases-list.component';
import { TestCaseDetailsComponent } from './test-case-details/test-case-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestCaseDetailsEditComponent } from './test-case-details-edit/test-case-details-edit.component';
import { LayoutModule } from './layout/layout.module';
import { MaterialSharedModule } from './shared/material.shared.module';
import { DiffComponent } from './diff/diff.component';


@NgModule({
  declarations: [
    AppComponent,
    ProjectsListComponent,
    ProjectCreateComponent,
    TestCasesListComponent,
    TestCaseDetailsComponent,
    TestCaseDetailsEditComponent,
    DiffComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialSharedModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { ProjectCreateComponent } from './project-create/project-create.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SuitesListComponent } from './suites-list/suites-list.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TestCasesListComponent } from './test-cases-list/test-cases-list.component';
import { TestCaseDetailsComponent } from './test-case-details/test-case-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatInputModule, MatSidenavModule, MatFormFieldModule,
         MatToolbarModule, MatIconModule, MatListModule, MatCardModule, MatChipsModule} from '@angular/material';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SuiteCreateComponent } from './suite-create/suite-create.component';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    AppComponent,
    ProjectsListComponent,
    ProjectCreateComponent,
    SuitesListComponent,
    SidebarComponent,
    TestCasesListComponent,
    TestCaseDetailsComponent,
    HeaderComponent,
    FooterComponent,
    SuiteCreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

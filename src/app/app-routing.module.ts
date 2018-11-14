import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { ProjectCreateComponent } from './project-create/project-create.component';
import { SuitesListComponent } from './suites-list/suites-list.component';
import { TestCasesListComponent } from './test-cases-list/test-cases-list.component';
import { TestCaseDetailsComponent } from './test-case-details/test-case-details.component';
import { SuiteCreateComponent } from './suite-create/suite-create.component';
import { TestCaseDetailsEditComponent } from './test-case-details-edit/test-case-details-edit.component';

const routes: Routes = [
  { path:  '', redirectTo:  'projects', pathMatch:  'full' },
  {
    path:  'projects',
    component:  ProjectsListComponent
  },
  {
    path: 'create-project',
    component: ProjectCreateComponent
  },
  {
    path: 'projects/:projectId/suites',
    component: SuitesListComponent
  },
  {
    path: 'suites/:suiteId/cases',
    component: TestCasesListComponent
  },
  {
    path: 'projects/:projectId/create-suite',
    component: SuiteCreateComponent
  },
  {
    path: 'suites/cases/:caseId',
    component: TestCaseDetailsComponent
  },
  {
    path: 'suites/cases/:caseId/edit',
    component: TestCaseDetailsEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

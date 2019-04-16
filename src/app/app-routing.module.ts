import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { ProjectCreateComponent } from './project-create/project-create.component';
import { TestCasesListComponent } from './test-cases-list/test-cases-list.component';
import { TestCaseDetailsComponent } from './test-case-details/test-case-details.component';
import { TestCaseDetailsEditComponent } from './test-case-details-edit/test-case-details-edit.component';
import { DiffComponent } from './diff/diff.component';

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
    path: 'project/:projectId/cases',
    component: TestCasesListComponent
  },
  {
    path: 'case/:caseId',
    component: TestCaseDetailsComponent
  },
  {
    path: 'case/:caseId/edit',
    component: TestCaseDetailsEditComponent
  },
  {
    path: 'diff',
    component: DiffComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { ProjectCreateComponent } from './project-create/project-create.component';
import { SuitesListComponent } from './suites-list/suites-list.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
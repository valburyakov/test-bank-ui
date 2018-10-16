import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsListComponent } from './projects-list/projects-list.component';

const routes: Routes = [
  { path:  '', redirectTo:  'projects', pathMatch:  'full' },
  {
    path:  'projects',
    component:  ProjectsListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
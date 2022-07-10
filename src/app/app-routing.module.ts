import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectDetailsComponent } from 'src/app/components/project-details/project-details.component';
import { ProjectsComponent } from 'src/app/components/projects/projects.component';

const routes: Routes = [
	{ path: 'projects', component: ProjectsComponent },
	{ path: 'project', component: ProjectDetailsComponent },
	{ path: '',   redirectTo: '/projects', pathMatch: 'full' }, // redirect to projects
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

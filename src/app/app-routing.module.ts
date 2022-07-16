import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectDetailsComponent } from 'src/app/components/project-details/project-details.component';
import { ProjectFormComponent } from 'src/app/components/project-form/project-form.component';
import { ProjectsComponent } from 'src/app/components/projects/projects.component';

import { AuditorFormComponent } from 'src/app/components/auditor/auditor-form/auditor-form.component';
import { AuditorListComponent } from 'src/app/components/auditor/auditor-list/auditor-list.component';

const routes: Routes = [
	{ path: 'projects', component: ProjectsComponent },
	{ path: 'project', component: ProjectDetailsComponent },
	{ path: 'new-project', component: ProjectFormComponent },
	
	{ path: 'new-auditor', component: AuditorFormComponent },
	{ path: 'auditors', component: AuditorFormComponent },
//	{ path: 'auditors', component: AuditorListComponent },
	
	{ path: '',   redirectTo: '/projects', pathMatch: 'full' }, // redirect to projects
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

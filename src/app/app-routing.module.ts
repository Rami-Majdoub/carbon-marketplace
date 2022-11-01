import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectDetailsComponent } from 'src/app/components/project/project-details/project-details.component';
import { ProjectFormComponent } from 'src/app/components/project/project-form/project-form.component';
import { ProjectListComponent } from 'src/app/components/project/project-list/project-list.component';

import { AuditorFormComponent } from 'src/app/components/auditor/auditor-form/auditor-form.component';
import { AuditorListComponent } from 'src/app/components/auditor/auditor-list/auditor-list.component';

import { ProfileComponent } from 'src/app/components/profile/profile/profile.component';
import { ProfileAdminComponent } from 'src/app/components/profile/profile-admin/profile-admin.component';
import { ProfileAuditorComponent } from 'src/app/components/profile/profile-auditor/profile-auditor.component';
import { ProfilePoComponent } from 'src/app/components/profile/profile-po/profile-po.component';

const routes: Routes = [
	{ path: 'projects', component: ProjectListComponent },
	{ path: 'projects/form', component: ProjectFormComponent },
	{ path: 'projects/form/:id', component: ProjectFormComponent },
	{ path: 'projects/:id', component: ProjectDetailsComponent },
	
	{ path: 'auditors', component: AuditorListComponent },
	{ path: 'auditors/form', component: AuditorFormComponent },
	{ path: 'auditors/form/:id', component: AuditorFormComponent },

	{ path: 'profile', component: ProfileComponent },
	{ path: 'profile-admin', component: ProfileAdminComponent },
	{ path: 'profile-auditor', component: ProfileAuditorComponent },
	{ path: 'profile-po', component: ProfilePoComponent },
//	{ path: 'auditors/:id', component: AuditorListComponent },
	
	{ path: '',   redirectTo: 'projects', pathMatch: 'full' }, // redirect to projects
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

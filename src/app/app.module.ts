import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { AngularMaterialModule } from './material.module';

// Components
import { ProjectDetailsComponent } from 'src/app/components/project-details/project-details.component';
import { ProjectsComponent } from 'src/app/components/projects/projects.component';
import { ProjectFormComponent } from './components/project-form/project-form.component';
import { AuditorFormComponent } from './components/auditor/auditor-form/auditor-form.component';
import { AuditorListComponent } from './components/auditor/auditor-list/auditor-list.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProjectDetailsComponent,
    ProjectsComponent,
    ProjectFormComponent,
    AuditorFormComponent,
    AuditorListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormsModule,
    GraphQLModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

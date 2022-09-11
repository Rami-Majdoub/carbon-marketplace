import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from './material.module';

// Components
import { ProjectDetailsComponent } from 'src/app/components/project/project-details/project-details.component';
import { ProjectFormComponent } from 'src/app/components/project/project-form/project-form.component';
import { ProjectListComponent } from 'src/app/components/project/project-list/project-list.component';

import { AuditorFormComponent } from 'src/app/components/auditor/auditor-form/auditor-form.component';
import { AuditorListComponent } from 'src/app/components/auditor/auditor-list/auditor-list.component';

import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProjectDetailsComponent,
    ProjectListComponent,
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
    ReactiveFormsModule,
    GraphQLModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

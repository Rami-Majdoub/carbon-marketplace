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
import { ProjectTableComponent } from 'src/app/components/project/project-table/project-table.component';
import { ProjectStatsComponent } from './components/project/project-stats/project-stats.component';

import { AuditorFormComponent } from 'src/app/components/auditor/auditor-form/auditor-form.component';
import { AuditorListComponent } from 'src/app/components/auditor/auditor-list/auditor-list.component';
import { AuditorTableComponent } from './components/auditor/auditor-table/auditor-table.component';

import { ProfileComponent } from 'src/app/components/profile/profile/profile.component';
import { ProfileAdminComponent } from './components/profile/profile-admin/profile-admin.component';
import { ProfileAuditorComponent } from './components/profile/profile-auditor/profile-auditor.component';
import { ProfilePoComponent } from './components/profile/profile-po/profile-po.component';

import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { UserBuyTableComponent } from './components/profile/user-buy-table/user-buy-table.component';
import { UserCarbonRetirementTableComponent } from './components/profile/user-carbon-retirement-table/user-carbon-retirement-table.component';
import { AuditTableComponent } from './components/audit/audit-table/audit-table.component';
import { AuditFormComponent } from './components/audit/audit-form/audit-form.component';
import { SelectProfileComponent } from './components/dev/select-profile/select-profile.component';
import { AuditRequestFormComponent } from 'src/app/components/audit-request/audit-request-form/audit-request-form.component';
import { AuditReviewFormComponent } from 'src/app/components/audit-review/audit-review-form/audit-review-form.component';
import { AuditRequestDetailsComponent } from './components/audit-request/audit-request-details/audit-request-details.component';
import { AuditRequestTableComponent } from './components/audit-request/audit-request-table/audit-request-table.component';
import { AuditReviewTableComponent } from './components/audit-review/audit-review-table/audit-review-table.component';
import { PurchaseFormComponent } from './components/purchase/purchase-form/purchase-form.component';
import { CreditsSaleListComponent } from './components/credits-sale/credits-sale-list/credits-sale-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectDetailsComponent,
    ProjectListComponent,
    ProjectFormComponent,
    AuditorFormComponent,
    AuditorListComponent,
    ProfileComponent,
    ProjectTableComponent,
    AuditorTableComponent,
    ProfileAdminComponent,
    ProfileAuditorComponent,
    ProfilePoComponent,
    ProjectStatsComponent,
    UserBuyTableComponent,
    UserCarbonRetirementTableComponent,
    AuditTableComponent,
    AuditFormComponent,
    SelectProfileComponent,
    AuditRequestFormComponent,
    AuditReviewFormComponent,
    AuditRequestDetailsComponent,
    AuditRequestTableComponent,
    AuditReviewTableComponent,
    PurchaseFormComponent,
    CreditsSaleListComponent
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

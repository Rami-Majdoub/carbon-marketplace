import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuditRequest } from 'src/app/models/audit-request';
import { AUDIT_REQUEST } from 'src/app/models/mocks/mock-audit-request';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-audit-request-table',
  templateUrl: './audit-request-table.component.html',
  styleUrls: ['./audit-request-table.component.scss']
})
export class AuditRequestTableComponent implements OnInit, OnDestroy {

  constructor(
    private service: ProjectService,
  ) { }

  displayedColumns: string[] = ['date', 'projectName', 'actions'];
  // querySubscription: Subscription | undefined;  
  array: AuditRequest[] = AUDIT_REQUEST;//[];

  ngOnInit() {
    // this.querySubscription = this.service.getAll().subscribe(
    //   ({ data }: { data: any }) => {
    //   console.log(data);
    //   this.projects = data.projects;
    // });
  }

  ngOnDestroy(): void {
    // this.querySubscription?.unsubscribe();
  }

}

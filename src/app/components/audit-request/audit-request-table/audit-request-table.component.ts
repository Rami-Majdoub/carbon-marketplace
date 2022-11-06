import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuditRequest } from 'src/app/models/audit-request';
import { AUDIT_REQUEST } from 'src/app/models/mocks/mock-audit-request';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';

// Paginator
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-audit-request-table',
  templateUrl: './audit-request-table.component.html',
  styleUrls: ['./audit-request-table.component.scss']
})
export class AuditRequestTableComponent implements OnInit, OnDestroy, AfterViewInit {

  constructor(
    private service: ProjectService,
  ) { }

  displayedColumns: string[] = ['date', 'projectName', 'actions'];
  // querySubscription: Subscription | undefined;  
  // array: AuditRequest[] = AUDIT_REQUEST;//[];

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

  // Paginator
  @ViewChild(MatPaginator) paginator: any = MatPaginator;
  array = new MatTableDataSource<AuditRequest>(AUDIT_REQUEST); // .data

  ngAfterViewInit() {
    this.array.paginator = this.paginator;
  }

}

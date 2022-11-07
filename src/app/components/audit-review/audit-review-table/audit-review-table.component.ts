import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';

// Paginator
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AuditReview } from 'src/app/models/audit-review';
import { AUDIT_REVIEW } from 'src/app/models/mocks/mock-audit-review';

@Component({
  selector: 'app-audit-review-table',
  templateUrl: './audit-review-table.component.html',
  styleUrls: ['./audit-review-table.component.scss']
})
export class AuditReviewTableComponent implements OnInit, OnDestroy, AfterViewInit {

  constructor(
    private service: ProjectService,
  ) { }

  @Input() canEdit: boolean = false;

  displayedColumns: string[] = ['date', 'projectName', 'status', 'credits'];
  // querySubscription: Subscription | undefined;  
  // array: AuditRequest[] = AUDIT_REQUEST;//[];

  ngOnInit() {
    if (this.canEdit) this.displayedColumns.push('actions');
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
  array = new MatTableDataSource<AuditReview>(AUDIT_REVIEW); // .data

  ngAfterViewInit() {
    this.array.paginator = this.paginator;
  }

}

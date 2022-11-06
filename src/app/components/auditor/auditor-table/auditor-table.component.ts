import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Auditor } from 'src/app/models/auditor';
import { AuditorService } from 'src/app/services/auditor.service';

// Paginator
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-auditor-table',
  templateUrl: './auditor-table.component.html',
  styleUrls: ['./auditor-table.component.scss']
})
export class AuditorTableComponent implements OnInit, OnDestroy, AfterViewInit {

  constructor(
    private service: AuditorService,
  ) { }

  displayedColumns: string[] = ['name', 'location', 'actions'];
  querySubscription: Subscription | undefined;  
  // auditors: Auditor[] = [];

  ngOnInit() {
    this.querySubscription = this.service.getAll().subscribe(
      ({ data }: { data: any }) => {
      console.log(data);
      this.auditors.data = data.auditors;
    });
  }

  ngOnDestroy(): void {
      this.querySubscription?.unsubscribe();
  }

  // Paginator
  @ViewChild(MatPaginator) paginator: any = MatPaginator;
  auditors = new MatTableDataSource<Auditor>(); // .data

  ngAfterViewInit() {
    this.auditors.paginator = this.paginator;
  }

}

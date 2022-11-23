import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';

// Paginator
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-project-table',
  templateUrl: './project-table.component.html',
  styleUrls: ['./project-table.component.css']
})
export class ProjectTableComponent implements OnInit, OnDestroy {

  constructor(
    private service: ProjectService,
  ) { }

  @Input() canCreate: boolean = false;
  @Input() canUpdate: boolean = false;
  @Input() canDelete: boolean = false;
  @Input() canApprove: boolean = false;

  displayedColumns: string[] = ['location', 'name', 'actions'];
  querySubscription: Subscription | undefined;  
  // projects: Project[] = [];

  ngOnInit() {
    this.querySubscription = this.service.getAll().subscribe(
      ({ data }: { data: any }) => {
      console.log(data);
      this.projects.data = data.projects;
    });
  }

  ngOnDestroy(): void {
      this.querySubscription?.unsubscribe();
  }

  // Paginator
  @ViewChild(MatPaginator) paginator: any = MatPaginator;
  projects = new MatTableDataSource<Project>(); // .data

  ngAfterViewInit() {
    this.projects.paginator = this.paginator;
  }

}

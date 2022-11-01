import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project-table',
  templateUrl: './project-table.component.html',
  styleUrls: ['./project-table.component.css']
})
export class ProjectTableComponent implements OnInit, OnDestroy {

  constructor(
    private service: ProjectService,
  ) { }

  displayedColumns: string[] = ['id', 'location', 'name', 'actions'];
  querySubscription: Subscription | undefined;  
  projects: Project[] = [];

  ngOnInit() {
    this.querySubscription = this.service.getAll().subscribe(
      ({ data }: { data: any }) => {
      console.log(data);
      this.projects = data.projects;
    });
  }

  ngOnDestroy(): void {
      this.querySubscription?.unsubscribe();
  }

}

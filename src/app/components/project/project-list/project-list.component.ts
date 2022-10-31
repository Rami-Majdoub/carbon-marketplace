import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  constructor(
    private service: ProjectService
  ) { }

  querySubscription: Subscription | undefined;
  projects: Project[] = [];

  ngOnInit(): void {
    this.querySubscription = this.service.getAll().subscribe(({ data }: { data: any }) => {
      console.log(data);
      this.projects = data.projects;
    });
  }

  ngOnDestroy(): void {
      this.querySubscription?.unsubscribe();
  }


}

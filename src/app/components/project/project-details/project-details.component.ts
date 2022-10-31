import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {

  displayedColumns: string[] = ['carbonCredits', 'report'];
  dataSource = ELEMENT_DATA;

  form = this.formBuilder.group({
    nbCarbonCredits: '',
  });

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private service: ProjectService,
    ) { }

  instance: Project | null = null;
  querySubscription: Subscription | undefined;
  
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) return;
    
    this.querySubscription = this.service.get(id).subscribe(({ data }: { data: any }) => {
      console.log(data);
      this.instance = data.project;
    });
  }

  onSubmit(): void {

  }
}

export interface PeriodicElement {
  report: string;
  carbonCredits: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {report: "1", carbonCredits: 1000},
  {report: "2", carbonCredits: 150},
];
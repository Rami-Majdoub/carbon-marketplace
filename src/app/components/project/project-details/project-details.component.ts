import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  displayedColumns: string[] = ['carbonCredits', 'report'];
  dataSource = ELEMENT_DATA;

  form = this.formBuilder.group({
    nbCarbonCredits: '',
  });

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
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
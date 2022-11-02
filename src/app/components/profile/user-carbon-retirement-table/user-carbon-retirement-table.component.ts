import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CARBON_RETIREMENT } from 'src/app/models/mocks/mock-carbon-retirement';
import { CarbonRetirement } from 'src/app/models/carbon-retirement';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-user-carbon-retirement-table',
  templateUrl: './user-carbon-retirement-table.component.html',
  styleUrls: ['./user-carbon-retirement-table.component.scss']
})
export class UserCarbonRetirementTableComponent implements OnInit, OnDestroy {

  constructor(
    private service: ProjectService,
  ) { }

  displayedColumns: string[] = ['date', 'quantity', 'projectName'];
  querySubscription: Subscription | undefined;
  elements: CarbonRetirement[] = CARBON_RETIREMENT//[];

  ngOnInit() {
    // this.querySubscription = this.service.getAll().subscribe(
    //   ({ data }: { data: any }) => {
    //   console.log(data);
    //   this.elements = data.projects;
    // });
  }

  ngOnDestroy(): void {
      this.querySubscription?.unsubscribe();
  }

}

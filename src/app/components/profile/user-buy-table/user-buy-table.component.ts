import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PURCHASE } from 'src/app/models/mocks/mock-purchase';
import { Purchase } from 'src/app/models/purchase';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-user-buy-table',
  templateUrl: './user-buy-table.component.html',
  styleUrls: ['./user-buy-table.component.scss']
})
export class UserBuyTableComponent implements OnInit, OnDestroy {

  constructor(
    private service: ProjectService,
  ) { }

  displayedColumns: string[] = ['date', 'quantity', 'projectName', 'price'];
  querySubscription: Subscription | undefined;
  elements: Purchase[] = PURCHASE//[];

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

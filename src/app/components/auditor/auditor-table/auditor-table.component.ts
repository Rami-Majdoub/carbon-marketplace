import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Auditor } from 'src/app/models/auditor';
import { AuditorService } from 'src/app/services/auditor.service';

@Component({
  selector: 'app-auditor-table',
  templateUrl: './auditor-table.component.html',
  styleUrls: ['./auditor-table.component.scss']
})
export class AuditorTableComponent implements OnInit, OnDestroy {

  constructor(
    private service: AuditorService,
  ) { }

  displayedColumns: string[] = ['name', 'location', 'actions'];
  querySubscription: Subscription | undefined;  
  auditors: Auditor[] = [];

  ngOnInit() {
    this.querySubscription = this.service.getAll().subscribe(
      ({ data }: { data: any }) => {
      console.log(data);
      this.auditors = data.auditors;
    });
  }

  ngOnDestroy(): void {
      this.querySubscription?.unsubscribe();
  }

}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Audit } from 'src/app/models/audit';
import { AUDIT } from 'src/app/models/mocks/mock-audits';

@Component({
  selector: 'app-audit-table',
  templateUrl: './audit-table.component.html',
  styleUrls: ['./audit-table.component.scss']
})
export class AuditTableComponent implements OnInit, OnDestroy {

  constructor(
    // private service: AuditorService,
  ) { }

  displayedColumns: string[] = ['date', 'projectName', 'status']//, 'report', 'actions'];
  querySubscription: Subscription | undefined;  
  elements: Audit[] = AUDIT; //[];

  ngOnInit() {
    // this.querySubscription = this.service.getAll().subscribe(
    //   ({ data }: { data: any }) => {
    //   console.log(data);
    //   this.auditors = data.auditors;
    // });
  }

  ngOnDestroy(): void {
      this.querySubscription?.unsubscribe();
  }

}

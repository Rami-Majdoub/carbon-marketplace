import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuditorService } from 'src/app/services/auditor.service';

@Component({
  selector: 'app-auditor-list',
  templateUrl: './auditor-list.component.html',
  styleUrls: ['./auditor-list.component.css']
})
export class AuditorListComponent implements OnInit, OnDestroy {

  constructor(
    private service: AuditorService
  ) { }

  querySubscription: Subscription | undefined;
  auditors: any;

  ngOnInit(): void {
    this.querySubscription = this.service.getAll().subscribe(({ data }: { data: any }) => {
      console.log(data);
      this.auditors = data.auditors;
    });
  }

  ngOnDestroy(): void {
      this.querySubscription?.unsubscribe();
  }

}

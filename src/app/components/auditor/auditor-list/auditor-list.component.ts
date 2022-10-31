import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Auditor } from 'src/app/models/auditor';
import { AuditorService } from 'src/app/services/auditor.service';
import { AutoAddProtocol } from 'src/app/helpers/auto-add-protocol';

@Component({
  selector: 'app-auditor-list',
  templateUrl: './auditor-list.component.html',
  styleUrls: ['./auditor-list.component.scss']
})
export class AuditorListComponent implements OnInit, OnDestroy {

  autoAddProtocol = AutoAddProtocol;
  constructor(
    private service: AuditorService
  ) { }

  querySubscription: Subscription | undefined;
  auditors: Auditor[] = [];

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

import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuditRequest } from 'src/app/models/audit-request';
import { AUDIT_REQUEST } from 'src/app/models/mocks/mock-audit-request';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-audit-request-details',
  templateUrl: './audit-request-details.component.html',
  styleUrls: ['./audit-request-details.component.scss'],
})
export class AuditRequestDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private service: ProjectService
  ) {}

  instance: AuditRequest | null = null;
  // querySubscription: Subscription | undefined;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('auditRequestId');
    if (!id) return;

    this.instance = AUDIT_REQUEST[parseInt(id) - 1];

    // this.querySubscription = this.service.get(id).subscribe(({ data }: { data: any }) => {
    //   console.log(data);
    //   this.instance = data.project;
    // });
  }
}

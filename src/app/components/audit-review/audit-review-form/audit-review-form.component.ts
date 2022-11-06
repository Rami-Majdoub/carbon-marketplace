import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Web3Storage } from 'web3.storage'

import { ContractService } from 'src/app/services/contract.service';
import { AuditRequest } from 'src/app/models/audit-request';
// import { ProjectService } from 'src/app/services/project.service';
// import { ethereumAddressValidator } from 'src/app/shared/ethereum-address.directive';
import { handleSubmittedTx } from 'src/app/utils/handleSubmittedTx';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-audit-review-form',
  templateUrl: './audit-review-form.component.html',
  styleUrls: ['./audit-review-form.component.scss'],
})
export class AuditReviewFormComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    public contractService_: ContractService,
    private _snackBar: MatSnackBar
  ) {}

  @Input() auditRequest?: AuditRequest;

  form = this.formBuilder.group({
    auditRequestId: new FormControl('0', [Validators.required]),
    status: new FormControl('rejected', [Validators.required]),
    creditsReceived: new FormControl('0', [Validators.required]),
    comments: new FormControl('', []),
  });

  onSubmit(): void {
    console.log(this.form.valid);
    if (!this.form.valid) return;
    //    const instance = this.form.value as Audit
    //    console.log(instance);
  }

  ngOnInit(): void {}
}
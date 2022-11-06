import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Web3Storage } from 'web3.storage'

import { ContractService } from 'src/app/services/contract.service';
import { Audit } from 'src/app/models/audit';
// import { ProjectService } from 'src/app/services/project.service';
// import { ethereumAddressValidator } from 'src/app/shared/ethereum-address.directive';
import { handleSubmittedTx } from 'src/app/utils/handleSubmittedTx';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-audit-form',
  templateUrl: './audit-form.component.html',
  styleUrls: ['./audit-form.component.scss'],
})
export class AuditFormComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    public contractService_: ContractService,
    private _snackBar: MatSnackBar
  ) {}

  form = this.formBuilder.group({
    projectId: new FormControl('1', [Validators.required]),
    status: new FormControl('rejected', [Validators.required]),
    creditsReceived: new FormControl('0', [Validators.required]),
    comments: new FormControl('', [Validators.required]),
    report: new FormControl('', [Validators.required]),
  });

  onSubmit(): void {
    console.log(this.form.valid);
    if (!this.form.valid) return;
    //    const instance = this.form.value as Audit
    //    console.log(instance);
  }

  selectedFile: any = null;

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0] ?? null;
    this.form.controls.report.setValue(this.selectedFile);
  }

  ngOnInit(): void {}
}

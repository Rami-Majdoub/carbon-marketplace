import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Web3Storage } from 'web3.storage'

import { ContractService } from 'src/app/services/contract.service';
import { Audit } from 'src/app/models/audit';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-audit-request-form',
  templateUrl: './audit-request-form.component.html',
  styleUrls: ['./audit-request-form.component.scss'],
})
export class AuditRequestFormComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    public contractService_: ContractService,
    private _snackBar: MatSnackBar
  ) {}

  form = this.formBuilder.group({
    projectId: new FormControl('1', [Validators.required]),
    report: new FormControl('', [Validators.required]),
  });

  onSubmit(): void {
    console.log(this.form.valid);
    if (!this.form.valid) return;
    // const instance = this.form.value as Audit
  }

  selectedFile: any = null;

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0] ?? null;
    this.form.controls.report.setValue(this.selectedFile);
  }

  ngOnInit(): void {}
}
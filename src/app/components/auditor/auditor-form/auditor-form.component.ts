import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Auditor } from 'src/app/models/auditor';
import { AuditorService } from 'src/app/services/auditor.service';
import { ContractService } from 'src/app/services/contract.service';
import { ethereumAddressValidator } from 'src/app/shared/ethereum-address.directive';
import { handleSubmittedTx } from 'src/app/utils/handleSubmittedTx';

@Component({
  selector: 'app-auditor-form',
  templateUrl: './auditor-form.component.html',
  styleUrls: ['./auditor-form.component.scss']
})
export class AuditorFormComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private _contractService: ContractService,
    public _auditorService: AuditorService,
    private _snackBar: MatSnackBar,
  ) { }

  form = this.formBuilder.group({
    name:     new FormControl("", [ Validators.required ]),
    account:  new FormControl("", [ Validators.required, ethereumAddressValidator() ]),
		contact:  new FormControl("", [ Validators.required ]),
		location: new FormControl("", [ Validators.required ]),
		website:  new FormControl("", [ Validators.required ])
  });

  onSubmit(): void {
    if(!this.form.valid) {
      this._snackBar.open("The form is not valid!");
      return;
    }
    const auditorInstance = this.form.value as Auditor;

    this._contractService.connect().then(
      () => this._auditorService.add(auditorInstance)
      ).then(tx => handleSubmittedTx(tx, this._snackBar)
    ).catch(
      (reason: Error) => {
        this._snackBar.open(reason.message)
      }
    );
  }
  
  ngOnInit(): void {
  }
}

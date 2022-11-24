import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-purchase-form',
  templateUrl: './purchase-form.component.html',
  styleUrls: ['./purchase-form.component.scss']
})
export class PurchaseFormComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    // private _contractService: ContractService,
    // public _auditorService: AuditorService,
    private _snackBar: MatSnackBar,
  ) { }

  form = this.formBuilder.group({
    quantity: new FormControl("5", [ Validators.required ]),
  });
  
  @Input() projectId: string = "";
  @Input() price: number = 1.2;
  @Input() maxQuantity: number = 100;

  onSubmit(): void {
    if(!this.form.valid) {
      this._snackBar.open("The form is not valid!");
      return;
    }
    // const auditorInstance = this.form.value as Auditor;
    // this.create(auditorInstance);
  }

  ngOnInit(): void {
  }

  parseNumber(value: any): number {
    return parseFloat(value);
  }

}

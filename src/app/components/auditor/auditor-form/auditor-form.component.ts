import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { ContractService } from 'src/app/services/contract.service';

@Component({
  selector: 'app-auditor-form',
  templateUrl: './auditor-form.component.html',
  styleUrls: ['./auditor-form.component.css']
})
export class AuditorFormComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    public contractService_: ContractService,
  ) { }

  form = this.formBuilder.group({
    name: '',
    account: '',
  });

  onSubmit(): void {
    if(!this.form.valid) return;

    console.log(this.form.value);
    this.form.reset();
  }
  
  ngOnInit(): void {
  }
  
  public address = "";
  async addAuditor(){
    await this.contractService_.addAuditor(this.address);
  }

  async isAuditor(){
    console.log(await this.contractService_.isAuditor(this.address));
  }

}

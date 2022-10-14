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
		contact:'',
		location:'',
		website:''
  });

  onSubmit(): void {
    if(!this.form.valid) return;
    
    const { name, account, contact, location, website } = this.form.value;
  
    if(name == null || account == null || contact == null || location == null ||  website == null) return;
    this.contractService_.addAuditor(account, name, contact, location, website);
  }
  
  ngOnInit(): void {
  }
}

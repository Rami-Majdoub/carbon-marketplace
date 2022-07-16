import { Component, OnInit } from '@angular/core';

import { ContractService } from 'src/app/services/contract.service';

@Component({
  selector: 'app-auditor-form',
  templateUrl: './auditor-form.component.html',
  styleUrls: ['./auditor-form.component.css']
})
export class AuditorFormComponent implements OnInit {

  constructor(
      public contractService_: ContractService,
  ) { }

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

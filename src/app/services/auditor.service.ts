import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { TransactionResponse } from "@ethersproject/providers";
import { ContractReceipt, ContractTransaction } from "ethers"
import { ContractService } from './contract.service';
import { Auditor } from "src/app/models/auditor";

@Injectable({
  providedIn: 'root'
})
export class AuditorService {

  // private ROLE_AUDITOR: string = "";

  constructor(
    private apollo: Apollo,
    private contractService: ContractService,
  ) {
    // this.init()
  }

  // async init(){
  //   this.ROLE_AUDITOR = await (
  //     await this.contractService.connect()
  //   ).ROLE_AUDITOR();
  //   console.log(this.ROLE_AUDITOR);     
  // }
  
  add({ account, contact, location, name, website }: Auditor)
    : Promise<ContractTransaction>
  {
    // use the same order of properties declared in the contract
    return this.contractService.contract.addAuditor(
      account, name, contact, location, website
    );
  }

  update({ account, contact, location, name, website }: Auditor)
    : Promise<ContractTransaction>
  {
    // use the same order of properties declared in the contract
    return this.contractService.contract.editAuditor(
      account, contact, location, name, website
    )
  }

  get(id: string){
    return this.apollo.watchQuery({
      query: gql `
        {
          auditor(id: $id) { id account name contact location website }
        }
      `,
      variables: {
        id
      }
    })
  }

  getAll(){
    return this.apollo.watchQuery({
      query: gql `
        {
          auditors { id account name contact location website }
        }
      `
    }).valueChanges
  }

}

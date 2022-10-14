import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { ContractService } from './contract.service';

@Injectable({
  providedIn: 'root'
})
export class AuditorService {

  private ROLE_AUDITOR: string = "";

  constructor(
    private apollo: Apollo,
    private contractService: ContractService,
  ) {
    this.init()
  }

  async init(){
    this.ROLE_AUDITOR = await (
      await this.contractService.connect()
    ).ROLE_AUDITOR();
    console.log(this.ROLE_AUDITOR);     
  }

  add(account: string){
    this.contractService.addAdmin(account);
  }

  get(id: string){
    return this.apollo.watchQuery({
      query: gql `
        { roleGranted(id: $id) { account } }
      `,
      variables: {
        id
      }
    })
  }

  getAll(skip = 0, count = 5){
    return this.apollo.watchQuery({
      query: gql `
        {
          auditors(
          first: $first,
          skip: $skip)
          { id account name contact location website }
        }
      `
      ,variables: {
        first: count,
        skip,
      }
    }).valueChanges
  }

  remove(){
    // this.contractService.contract.
  }


}

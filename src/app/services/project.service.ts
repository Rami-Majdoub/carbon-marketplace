import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Project } from 'src/app/models/project';
import { ContractService } from './contract.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(
    private apollo: Apollo,
    private contractService: ContractService,
  ) { }

  add(project: Project){

  }

  get(id: string){
    return this.apollo.watchQuery({
      query: gql `
      {
        project(id: $id) { id owner name location methods description report auditor { name } }
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
        projects { id owner name location methods description report auditor { name } }
      }
      `
    }).valueChanges
  }

  remove(){
    // this.contractService.contract.
  }
}

import { Component, OnInit } from '@angular/core';

import { ContractService } from 'src/app/services/contract.service';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {

  constructor(
      public contractService_: ContractService,
  ) { }

  ngOnInit(): void {
  }  

}

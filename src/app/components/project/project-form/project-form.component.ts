import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CIDString, Web3Storage } from 'web3.storage'

import { ContractService } from 'src/app/services/contract.service';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    public contractService_: ContractService,
  ) { }

  form = this.formBuilder.group({
    account: '',
    title: '',
    location: '',
    method: '',
    description: '',
  });

  onSubmit(): void {
    if(!this.form.valid) return;
    const fileContent = JSON.stringify(this.form.value);

    const API_TOKEN_WEB3_STORAGE = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDQwNmJhMmY3QTU4MzA1ODlkZDY0MTk5NkNmQ0JmQTM3YjY0NGNDZDkiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NTM4OTE0NTE3OTEsIm5hbWUiOiJ0ZXN0In0.nZ3WIpmlORmfgpdq_9MqrYY_RA7XMv1Be7j6BYW19YI";
    const client = new Web3Storage({ token: API_TOKEN_WEB3_STORAGE });
    const file = new File([fileContent], 'project.json', { type: 'text/plain' });
    client.put([file])
    .then(
      (cid) => {
        this.contractService_.connect();
        return cid;
      }
    )
    .then(() => this.contractService_.contract.functions.addProject())
    .then(tx => tx.wait())
    .then(console.log)
  }
  
  selectedFile: any = null;

  onFileSelected(event: any): void {
      this.selectedFile = event.target.files[0] ?? null;
  
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    
  }  

}

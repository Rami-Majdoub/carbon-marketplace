import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Web3Storage } from 'web3.storage'

import { ContractService } from 'src/app/services/contract.service';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';

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
    private service: ProjectService,
  ) { }

  form = this.formBuilder.group({
    owner: '',
    name: '',
    location: '',
    methods: '',
    description: '',
    report: ''
  });

  onSubmit(): void {
    if(!this.form.valid) return;
    const instance = this.form.value as Project
    console.log(instance);    

    const API_TOKEN_WEB3_STORAGE = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDQwNmJhMmY3QTU4MzA1ODlkZDY0MTk5NkNmQ0JmQTM3YjY0NGNDZDkiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NTM4OTE0NTE3OTEsIm5hbWUiOiJ0ZXN0In0.nZ3WIpmlORmfgpdq_9MqrYY_RA7XMv1Be7j6BYW19YI";
    const client = new Web3Storage({ token: API_TOKEN_WEB3_STORAGE });

    client.put([this.selectedFile])
    .then(
      (cid) => {
        console.log(cid);
        
        instance.report = cid;
        this.contractService_.connect();
        return cid;
      }
    )
    .then(() => this.service.add(instance))
    .then(tx => tx.wait())
    .then(console.log)
  }
  
  selectedFile: any = null;

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0] ?? null;
  }

  ngOnInit(): void {
    // const id = this.route.snapshot.paramMap.get('id');
    // console.log(id);
  }  

}

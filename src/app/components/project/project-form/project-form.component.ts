import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Web3Storage } from 'web3.storage'

import { ContractService } from 'src/app/services/contract.service';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';
import { ethereumAddressValidator } from 'src/app/shared/ethereum-address.directive';
import { handleSubmittedTx } from 'src/app/utils/handleSubmittedTx';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.scss']
})
export class ProjectFormComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    public contractService_: ContractService,
    private service: ProjectService,
    private _snackBar: MatSnackBar,
  ) { }
  
  id: string | null = null;
  form = this.formBuilder.group({
    owner:        new FormControl("", [ Validators.required, ethereumAddressValidator() ]),
    name:         new FormControl("", [ Validators.required ]),
    location:     new FormControl("", [ Validators.required ]),
    methods:      new FormControl("", [ Validators.required ]),
    description:  new FormControl("", [ Validators.required ]),
    report:       new FormControl("", [ Validators.required ]),
  });

  onSubmit(): void {
    if(!this.form.valid) return;
    const instance = this.form.value as Project
    console.log(instance);

    if(this.id){
      instance.id = this.id;
      this.update(instance);
    } else {
      this.create(instance);
    }
  }

  create(instance: Project){
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
    .then(tx => handleSubmittedTx(tx, this._snackBar));
  }

  update(instance: Project){
    this.contractService_.connect()
      .then(() => this.service.update(instance))
      .then(tx => handleSubmittedTx(tx, this._snackBar))
      .catch((reason: Error) => this._snackBar.open(reason.message));
  }
  
  selectedFile: any = null;
  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0] ?? null;
    this.form.controls.report.setValue(this.selectedFile);
  }

  async ngOnInit(): Promise<void> {
    this.id = this.route.snapshot.paramMap.get('id');
    if(!this.id) return;

    this.service.get(this.id).result().then(
      ({ data }: { data: any }) => {
        const auditor = data.project as Project;
        this.form.controls.owner.setValue(auditor.owner);
        this.form.controls.name.setValue(auditor.name);
        this.form.controls.location.setValue(auditor.location);
        this.form.controls.methods.setValue(auditor.methods);
        this.form.controls.description.setValue(auditor.description);
        this.form.controls.report.setValue(auditor.report);
      }
    )
  }

}

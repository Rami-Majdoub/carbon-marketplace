import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { ContractService } from 'src/app/services/contract.service';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    public contractService_: ContractService,
  ) { }

  form = this.formBuilder.group({
    title: '',
    location: '',
    method: '',
    description: '',
  });

  onSubmit(): void {
    if(!this.form.valid) return;

    console.log(this.form.value);
    this.form.reset();
  }

  ngOnInit(): void {
  }  

}

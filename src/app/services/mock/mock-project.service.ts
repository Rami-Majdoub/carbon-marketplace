import { Injectable } from '@angular/core';
import { MockCrudService } from './mock-crud.service';
import { Project } from 'src/app/models/project';
import { PROJECTS } from 'src/app/models/mocks/mock-projects';

@Injectable({
  providedIn: 'root',
})
export class MockProjectService extends MockCrudService<Project, number> {

  constructor() {
    super(PROJECTS);
  }

}
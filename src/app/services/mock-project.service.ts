import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RoleService {

  constructor(

  ){

  }

  can(p: string = "canEditProject"){
    // Permissions["canEditProject"].includes("admin");
  }
  


}

export const Permissions = {
  canEditProject: [ Roles.ADMIN ],

}

export const enum Roles {
  ADMIN = 1,
  USER = 2,
  PROJECT_OWNER = 3,
  AUDITOR = 4,
};
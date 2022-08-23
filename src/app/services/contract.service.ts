import { Injectable } from '@angular/core';

import { ethers } from "ethers";

import { contract_address, contract_abi } from 'src/app/abis/marketplace'
import { ConnectWalletService } from 'src/app/services/connect-wallet.service'

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  public contract: any;

  constructor(
    public wallet: ConnectWalletService,
  ) {
    this.contract = new ethers.Contract(contract_address, contract_abi, wallet.provider);
  }

  async connect(){
    this.contract = this.contract.connect(this.wallet.signer);
  }
  
  async addAdmin(address: string){
    this.connect();
    await this.contract.registerAdmin(address);
  }
  async isConnectedAdmin(){
    this.connect();
    return await this.contract.isAdmin(this.wallet.signer?.getAddress());
  }
  async isAdmin(address: string){
    this.connect();
    return await this.contract.isAdmin(address);
  }
  
  async addAuditor(address: string){
    this.connect();
    await this.contract.registerAuditor(address);
  }
  async isConnectedAuditor(){
    this.connect();
    return await this.contract.isAuditor(this.wallet.signer?.getAddress());
  }
  async isAuditor(address: string){
    this.connect();
    return await this.contract.isAuditor(address);
  }

}

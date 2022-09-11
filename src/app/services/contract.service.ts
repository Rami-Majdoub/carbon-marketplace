import { Injectable } from '@angular/core';

import { Contract, ethers } from "ethers";

import { contract_address, contract_abi } from 'src/app/abis/marketplace'
import { ConnectWalletService } from 'src/app/services/connect-wallet.service'

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  public contract: Contract;
  public providerRpc = "https://eth-goerli.g.alchemy.com/v2/ZZHhVaExWWjkD8UaCGsFzhPxOaKCJMep";

  constructor(
    public wallet: ConnectWalletService,
  ) {
    this.contract = new ethers.Contract(contract_address, contract_abi, wallet.provider);
  }

  async connect(){
    if(this.contract.signer) return this.contract;
    
    if(this.contract.provider == null){
      this.contract = this.contract.connect(
        this.wallet.signer
        || new ethers.providers.JsonRpcProvider(this.providerRpc)
      );
    }
    return this.contract;
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

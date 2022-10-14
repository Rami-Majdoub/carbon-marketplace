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
    
    this.contract = this.contract.connect(
      this.wallet.signer
      || this.wallet.provider
      || new ethers.providers.JsonRpcProvider(this.providerRpc)
    );
    
    /*
    console.log({
      contract_signer: this.contract.signer,
      contract_prvider: this.contract.provider,
      wallet_signer: this.wallet.signer,
      wallet_prvider: this.wallet.provider,
    });
    */

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
  
  async addAuditor(
    account: string,
    name: string,
		contact: string,
		location: string,
		website: string
  ){
    this.connect();
    await this.contract.addAuditor(account, name, contact, location, website);
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

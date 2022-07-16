import { Injectable } from '@angular/core';

import { ethers } from "ethers";

@Injectable({
  providedIn: 'root'
})
export class ConnectWalletService {
  public signer: any;
  public provider: any;

  constructor() {
    this.provider = new ethers.providers.Web3Provider(window.ethereum);
  }
  
  async connectAccount() {
    // ask metamask to connect
    await this.provider.send("eth_requestAccounts", []);
    this.signer = this.provider.getSigner();
    
    // the connected address
    return await this.signer.getAddress();
  }
  
}

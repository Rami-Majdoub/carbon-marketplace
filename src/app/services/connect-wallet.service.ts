import { Injectable, OnDestroy } from '@angular/core';
import { ethers, Signer } from "ethers";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { createIcon } from '@download/blockies';

@Injectable({
  providedIn: 'root'
})
export class ConnectWalletService implements OnDestroy {
  web3Modal: Web3Modal;
  // web3js:  any;
  provider: any;
  public signer: Signer | undefined;
  account: string | undefined;
  balance: string | undefined;

  imgUrl = "";

  constructor() {
    const providerOptions = {
      walletconnect: {
        package: WalletConnectProvider, // required
        options: {
          infuraId: "", // required change this with your own infura id
          description: 'Scan the qr code and sign in',
          qrcodeModalOptions: {
            mobileLinks: [
              'metamask',
            ]
          }
        }
      },
    };

    this.web3Modal = new Web3Modal({
      network: "mainnet", // optional change this with the net you want to use like rinkeby etc
      cacheProvider: true, // optional
      providerOptions, // required
      // theme: "dark"
    });
  }

  async connectAccount():Promise<string> {
    if (this.provider == undefined) {
      
      // only use the connected account
      // can't switch account provider (from metamask to walletconnect) 
      // to enable it, move the next line up, before the if
      this.provider = await this.web3Modal.connect();

      /*
      this.provider.on("chainChanged", (chainId: number) => {
        console.log(chainId); 
      });
      */
    }

    // create ethers signer
    if (this.signer == undefined) {
      this.provider = new ethers.providers.Web3Provider(this.provider);
      this.signer = this.provider.getSigner();
    }

    this.account = await this.signer?.getAddress();
    return this.account || "";
  }

  getImage(){
    if(!this.account || this.account == "") return "";
    return createIcon({ seed: this.account.toLowerCase() }).toDataURL();
  }

  getSmallAddress(){
    if(!this.account || this.account == "") return "";
    const account = this.account;
    return account?.substring(0, 5) + "..." + account.substring(account.length - 4, account.length);
  }

  async getBalance(): Promise<string>{
    if(this.signer){
      const balanceInWei = await this.signer.getBalance();
      this.balance = ethers.utils.formatEther(balanceInWei).toString();
      return this.balance;
    }
    return "0";
  }

  async transfer(): Promise<string> {
    if(this.signer){
      const transaction = await this.signer.sendTransaction({
        value: 0,
        to: await this.signer.getAddress()
      });
      return transaction.hash;
    }
    return "0x";
  }
  
  ngOnDestroy(){
  	this.signer = undefined;
  	this.provider = null;
  }

}

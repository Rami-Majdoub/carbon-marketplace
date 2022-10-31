import { Injectable, OnDestroy } from '@angular/core';
import { ethers, Signer, providers } from "ethers";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { createIcon } from '@download/blockies';

@Injectable({
  providedIn: 'root'
})
export class ConnectWalletService implements OnDestroy {

  web3Modal: Web3Modal;
  provider: any; //providers.Web3Provider | undefined;
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

      // this.provider.on("chainChanged", (arg) => console.log(arg)); // Goerli: 0x5
      // this.provider.on("disconnect", (arg) => console.log(arg));
      // this.provider.on("accountsChanged", (arg) => console.log(arg));
      // this.provider.on("chainChanged", console.log);
      // this.provider.on('disconnect', (code, reason) => {
      //   console.log(`Ethereum Provider connection closed: ${reason}. Code: ${code}`);
      // });
      
      // this.provider.request({ method: 'eth_accounts' })
      // .then((accounts) => {
      //   console.log(`Accounts:\n${accounts.join('\n')}`);
      // })
      // .catch((error) => {
      //   console.error(
      //     `Error fetching accounts: ${error.message}.
      //      Code: ${error.code}. Data: ${error.data}`
      //   );
      // });
      
    }    
    this.provider.on("accountsChanged", (arg) => console.log(arg));

    // create ethers signer
    if (this.signer == undefined && this.provider) {
      this.provider = new ethers.providers.Web3Provider(this.provider);
      this.signer = this.provider.getSigner();
    }
    // console.log(this.provider.se);

    this.account = await this.signer?.getAddress();
    return this.account || "";
  }

  async getInfos(){
    const accounts = await this.provider.send('eth_accounts');
    const firstAccount = accounts[0];
    
    const img = createIcon({ seed: firstAccount.toLowerCase() }).toDataURL();

    const smallAddress = this.formatAddress(firstAccount);

    return {
      account: firstAccount,
      img,
      smallAddress
    }
  }
  
  async getAccounts(): Promise<string[]>{
    //accounts: string[]
    // console.log("aaaa" + await this.provider.send('eth_accounts'));
    
    return this.provider.send('eth_accounts');
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

  formatAddress(address: string): string{
    return address.substring(0, 5)
      + "..." +
      address.substring(address.length - 4, address.length);
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
  	this.provider = undefined;
  }

}

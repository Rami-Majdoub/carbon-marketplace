import { Component } from '@angular/core';

import { ConnectWalletService } from 'src/app/services/connect-wallet.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  connected = false;
  address = "";
  imgUrl = "";
  
  constructor(
    public walletService_: ConnectWalletService,
  ){}
  
  async connect(){
    this.address = await this.walletService_.connectAccount();
    this.imgUrl = this.walletService_.getImage();

    this.address = this.walletService_.getSmallAddress();
    this.connected = true;
  }
}

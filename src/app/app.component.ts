import { Component } from '@angular/core';

import { ConnectWalletService } from 'src/app/services/connect-wallet.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'carbon-marketplace';
  connected = false;
  address = "";
  
  constructor(
    public contractService_: ConnectWalletService,
  ){}
  
  async connect(){
    this.address = await this.contractService_.connectAccount();
    this.address = this.address.substring(0, 5) + "..." + this.address.substring(this.address.length - 4, this.address.length);
    this.connected = true;
  }
}

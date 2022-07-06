import { Component } from '@angular/core';

import { ConnectWalletService } from 'src/app/services/connect-wallet.service';
import { createIcon } from '@download/blockies';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'carbon-marketplace';
  connected = false;
  address = "";
  imgUrl = "";
  
  constructor(
    public contractService_: ConnectWalletService,
  ){}
  
  async connect(){
    this.address = await this.contractService_.connectAccount();
    this.imgUrl = createIcon({ seed: this.address.toLowerCase() }).toDataURL();

    this.address = this.address.substring(0, 5) + "..." + this.address.substring(this.address.length - 4, this.address.length);
    this.connected = true;
  }
}

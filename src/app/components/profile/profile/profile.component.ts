import { Component, OnInit } from '@angular/core';
import { ConnectWalletService } from 'src/app/services/connect-wallet.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(
      public walletService_: ConnectWalletService,
  ) { }

  account = "";
  accountSmall = "";
  imgUrl = "";

  ngOnInit(): void {
    this.updateUI();
    this.walletService_.provider.on("accountsChanged", this.updateUI);
  }

  updateUI() {
    this.walletService_.getInfos().then(
      ({account, img, smallAddress}) => {
        this.account = account;
        this.accountSmall = smallAddress;
        this.imgUrl = img;
    });
  }

}

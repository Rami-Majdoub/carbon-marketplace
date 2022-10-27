import { Component, OnInit } from '@angular/core';
import { ConnectWalletService } from 'src/app/services/connect-wallet.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(
      public walletService_: ConnectWalletService,
  ) { }

  account = "";
  accountSmall = "";
  imgUrl = "";
  ngOnInit(): void {
    this.account = this.walletService_.account || "";
    this.accountSmall = this.walletService_.getSmallAddress();
    this.imgUrl = this.walletService_.getImage();
  }

}

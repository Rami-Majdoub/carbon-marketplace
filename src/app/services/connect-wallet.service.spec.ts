import { TestBed } from '@angular/core/testing';

import { ConnectWalletService } from './connect-wallet.service';

describe('ConnectWalletService', () => {
  let service: ConnectWalletServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConnectWalletService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

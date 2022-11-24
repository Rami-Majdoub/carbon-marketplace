import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CreditsSale } from 'src/app/models/credits-sale';

// Paginator
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CREDITS_SALE } from 'src/app/models/mocks/mock-credits-sale';

@Component({
  selector: 'app-credits-sale-list',
  templateUrl: './credits-sale-list.component.html',
  styleUrls: ['./credits-sale-list.component.scss']
})
export class CreditsSaleListComponent implements OnInit, OnDestroy, AfterViewInit {

  constructor(
    // private service: AuditorService,
  ) { }

  displayedColumns: string[] = ['name',"creditsAvailable", "creditsOnSale", "price", 'actions'];
  querySubscription: Subscription | undefined;  

  ngOnInit() {
    // this.querySubscription = this.service.getAll().subscribe(
    //   ({ data }: { data: any }) => {
    //   console.log(data);
    //   this.auditors.data = data.auditors;
    // });
  }

  ngOnDestroy(): void {
      this.querySubscription?.unsubscribe();
  }

  // Paginator
  @ViewChild(MatPaginator) paginator: any = MatPaginator;
  credits = new MatTableDataSource<CreditsSale>(CREDITS_SALE); // .data

  ngAfterViewInit() {
    this.credits.paginator = this.paginator;
  }

}

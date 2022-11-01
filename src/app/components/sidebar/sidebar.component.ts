import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/user-profile', title: 'User Profile',  icon:'person', class: '' },
    { path: '/dashboard', title: 'My wallet',  icon: 'dashboard', class: '' },
   
    { path: '/table-list', title: 'Auditors activities',  icon:'content_paste', class: '' },
    { path: '/typography', title: 'Project #1',  icon:'library_books', class: '' },
    { path: '/icons', title: 'Project #2',  icon:'library_books', class: '' },
    { path: '/maps', title: 'Project #3',  icon:'library_books', class: '' },
    { path: '/notifications', title: 'Project #4',  icon:'library_books', class: '' },
    { path: '/upgrade', title: 'Project #5',  icon:'library_books', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}

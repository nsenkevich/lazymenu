import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
  @Input() user: any;
  @Output() logOut = new EventEmitter<boolean>();
  @Input() draw: any;

  constructor(public router: Router) { }

  public logout() {
    this.logOut.emit(true);
  }

  public openMenu(status: string, limit: number): void {
    this.router.navigate(['/menu', status, limit]);
  }

}

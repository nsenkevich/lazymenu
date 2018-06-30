import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  @Input() user: any;
  @Input() draw: any;
  @Output() logOut = new EventEmitter<boolean>();


  constructor(public router: Router) { }

  public logout() {
    this.logOut.emit(true);
  }

  public toggle(): void {
    if (this.draw.opened) {
      return this.draw.close();
    }
    return this.draw.open();
  }

  public openMenu(status: string, limit: number): void {
    this.router.navigate(['/menu', status, limit]);
  }
}


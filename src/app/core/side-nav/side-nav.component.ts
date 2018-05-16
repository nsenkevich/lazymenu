import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
  @Input() user: any;
  @Output() logOut = new EventEmitter<boolean>();

  constructor() { }

  public logout() {
    this.logOut.emit(true);
  }

  public getUserName(email: string): string {
    const stringArray: Array<string> = email.split('@');
    return stringArray[0];
  }

}

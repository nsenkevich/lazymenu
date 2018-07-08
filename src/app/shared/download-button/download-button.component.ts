import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../auth/user';

@Component({
  selector: 'app-download-button',
  templateUrl: './download-button.component.html',
  styleUrls: ['./download-button.component.scss']
})
export class DownloadButtonComponent implements OnInit {
  @Output() downloadPdf = new EventEmitter<boolean>();
  public user: User;

  constructor(private authService: AuthService, public router: Router) { }

  ngOnInit() {
    this.authService.getUser().subscribe((user) => {
      if (user != null) {
        this.user = user;
      }
    });
  }

  public downloadClick() {
    if (!this.user) {
      this.router.navigate(['/auth']);
      return;
    }
    this.downloadPdf.emit(true);
  }


}

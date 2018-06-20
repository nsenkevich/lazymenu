import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-how',
  templateUrl: './how.component.html',
  styleUrls: ['./how.component.scss']
})
export class HowComponent implements OnInit {
  public contactForm: FormGroup;
  constructor(private fb: FormBuilder) { }


  ngOnInit() {
    this.contactForm = this.fb.group({
      feedback: ['', Validators.required]
    });
  }

  public scroll(el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  public submitFeedback() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
    }
  }
}

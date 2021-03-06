import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-page-not-found',
  template: `
    <article class="template animated slideInRight">
      <h4>Inconceivable!</h4>
      <div>I do not think this page is where you think it is.</div>
    </article>
  `
})
export class PageNotFoundPage { }
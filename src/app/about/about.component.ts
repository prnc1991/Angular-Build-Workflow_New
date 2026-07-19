import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  template: `
    <div class="page">
      <h1>About this demo</h1>
      <p>
        This project was built to demonstrate a working Angular application
        wired up with GitHub Actions for continuous integration and
        deployment to GitHub Pages.
      </p>
      <p>Stack used:</p>
      <ul>
        <li>Angular 18 (standalone components, no NgModules)</li>
        <li>Angular Router for navigation</li>
        <li>Signals for reactive state</li>
        <li>Template-driven forms</li>
        <li>GitHub Actions for build, test, and deploy</li>
      </ul>
    </div>
  `,
  styles: [`
    .page { max-width: 640px; margin: 0 auto; padding: 40px 24px; font-family: Arial, sans-serif; }
    ul { line-height: 1.9; }
  `]
})
export class AboutComponent {}

import { bootstrapApplication } from '@angular/platform-browser';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <div style="font-family: system-ui, sans-serif; padding: 2rem; text-align: center;">
      <h1>⚡ VibeCode Angular Starter</h1>
      <p>Edit <code>src/main.ts</code> and save to see changes.</p>
      <button (click)="count = count + 1">Count: {{ count }}</button>
    </div>
  `,
  styles: [`
    button {
      border-radius: 8px;
      border: 1px solid transparent;
      padding: 0.6em 1.2em;
      font-size: 1em;
      font-weight: 500;
      background-color: #dd0031;
      color: white;
      cursor: pointer;
      transition: background-color 0.25s;
    }
    button:hover {
      background-color: #c3002f;
    }
  `]
})
export class AppComponent {
  count = 0;
}

bootstrapApplication(AppComponent);

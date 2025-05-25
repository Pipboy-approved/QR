import { Component } from '@angular/core';
import { QRCodeComponent } from './qr-code/qr-code.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [QRCodeComponent],
  template: `
    <div class="container">
      <h1>QR Code Generator</h1>
      <app-qr-code></app-qr-code>
    </div>
  `,
  styles: [`
    .container {
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
      text-align: center;
    }
    h1 {
      color: #333;
      margin-bottom: 30px;
    }
  `]
})
export class AppComponent {
  title = 'qr-generator';
}

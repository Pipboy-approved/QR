import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import * as QRCode from 'qrcode';

@Component({
  selector: 'app-qr-code',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <div class="qr-container">
      <input 
        type="text" 
        [(ngModel)]="text" 
        (ngModelChange)="generateQR()"
        placeholder="Enter text to generate QR code"
        class="qr-input"
      >
      <canvas #qrCanvas></canvas>
    </div>
  `,
  styles: [`
    .qr-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
      padding: 20px;
    }
    .qr-input {
      width: 100%;
      max-width: 300px;
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 16px;
    }
    canvas {
      max-width: 300px;
      height: auto;
    }
  `]
})
export class QRCodeComponent {
  text: string = '';
  
  async generateQR() {
    if (!this.text) return;
    
    try {
      const canvas = document.querySelector('canvas');
      await QRCode.toCanvas(canvas, this.text, {
        width: 300,
        margin: 1,
        color: {
          dark: '#000000',
          light: '#ffffff'
        }
      });
    } catch (err) {
      console.error('Error generating QR code:', err);
    }
  }
} 
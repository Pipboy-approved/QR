# QR Code Generator

A simple QR code generator built with Angular and TypeScript. This application allows users to generate QR codes from text input in real-time.

## Features

- Real-time QR code generation
- Clean and modern UI
- Responsive design
- TypeScript support
- Standalone component architecture

## Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

## Installation

1. Clone the repository
2. Navigate to the project directory:
   ```bash
   cd qr-generator
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Development

To start the development server:

```bash
npm start
```

The application will be available at `http://localhost:4200`.

## Build

To build the application for production:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Usage as a Web Component

This QR code generator can be embedded in any web page. After building the project, include the following files in your HTML:

```html
<script src="path/to/dist/qr-generator/main.js"></script>
<app-root></app-root>
```

## Dependencies

- Angular 17
- QRCode.js
- TypeScript

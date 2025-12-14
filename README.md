# vite-react-v2

## Overview

A modern web application starter template built with Vite, React 19, TypeScript, and Tailwind CSS v4. This project is configured with SWC for fast builds and ESLint for code quality.

## Tech Stack

- **Build Tool**: Vite 7.1.2
- **Framework**: React 19.1.1
- **Language**: TypeScript 5.8.3
- **Styling**: Tailwind CSS 4.1.12
- **Compiler**: SWC (@vitejs/plugin-react-swc)
- **Linting**: ESLint 9.33.0

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

## Usage

Available scripts:

- `npm run dev` - Start development server
- `npm run build` - Build for production (TypeScript compilation + Vite build)
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## Directory Structure

```
vite-react-v2/
├── src/                # Source files
│   ├── assets/        # Static assets (images, etc.)
│   ├── App.tsx        # Main App component
│   ├── main.tsx       # Application entry point
│   └── index.css      # Global styles
├── public/            # Public static files
├── eslint.config.js   # ESLint configuration
├── tsconfig.json      # TypeScript configuration
├── vite.config.ts     # Vite configuration
└── package.json       # Project dependencies and scripts
```

## License

This repository is for personal/private use only.

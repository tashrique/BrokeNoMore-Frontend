// This file disables TypeScript warnings for JSX elements
// @ts-nocheck
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any; 
    }
  }
}

export {}; 
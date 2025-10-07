// src/types/global.d.ts

// Since this file contains no top-level imports/exports, it is
// automatically treated as a global declaration file by TypeScript.
// If your linter complains, you can add 'export {}' at the bottom.

declare global {
  interface Window {
    APP_BASE_HREF?: string;
    APP_ASSETS_BASE?: string;
    __webpack_public_path__?: string;
  }

  // NOTE: If you are using ESLint with @typescript-eslint/no-namespace,
  // you will need the disable comment here.
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      'app-root': any; // Or the more detailed type: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
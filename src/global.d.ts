/// <reference types="vite/client" />

declare module 'images/*' {
  /**
   * actual types
   * - code https://github.com/JonasKruckenberg/imagetools/blob/main/packages/core/src/output-formats.ts
   * - docs https://github.com/JonasKruckenberg/imagetools/blob/main/docs/guide/getting-started.md#metadata
   */
  const out;
  export default out;
}

declare module '*.module.css' {
  const component;
  export default component;
}

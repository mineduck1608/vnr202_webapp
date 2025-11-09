// declare common asset modules so TypeScript won't complain about imports like `logo.svg`
/// <reference types="vite/client" />

declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.css';

/* ------------------ Thêm phần này để fix import.meta.env ------------------ */
interface ImportMetaEnv {
  readonly VITE_GEMINI_API_KEY: string;
  // 👉 nếu bạn có thêm biến môi trường khác thì khai ở đây:
  // readonly VITE_FIREBASE_API_KEY: string;
  // readonly VITE_FIREBASE_AUTH_DOMAIN: string;
  // readonly VITE_FIREBASE_DATABASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface ImportMetaEnv {
	readonly VITE_GEMINI_API_KEY?: string;
	// ...các biến môi trường khác nếu cần
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
// declare common asset modules so TypeScript won't complain about imports like `logo.svg`


declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.css';

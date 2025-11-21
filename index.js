import { createRequire } from 'module';
const require = createRequire(import.meta.url);

// Import the ES module app
const appModule = await import('./src/index.js');
const app = appModule.default;

module.exports = app;

import React from 'react';
import App from './App'; // Assuming App.js is in the same directory as index.js
import { createRoot } from 'react-dom/client';


const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App/>);
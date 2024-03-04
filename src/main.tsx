import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app.tsx';
import './globals.css';
import { Toaster } from './components/ui/toaster.tsx';
import { CalculationsProvider } from './contexts/calculations.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CalculationsProvider>
      <App />
      <Toaster />
    </CalculationsProvider>
  </React.StrictMode>,
);

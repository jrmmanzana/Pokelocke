// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import GameApp from './GameApp';
import './index.css'; // Ensure this imports your Tailwind CSS

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GameApp />
  </React.StrictMode>
);

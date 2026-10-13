import React from 'react';
import { createRoot } from 'react-dom/client';
import '@fontsource/space-grotesk/400.css';
import '@fontsource/space-grotesk/700.css';
import '@fontsource/source-serif-4/400.css';
import '@fontsource/source-serif-4/500.css';
import './styles/tokens.css';
import './styles/global.css';
import './styles/sections.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(<App />);

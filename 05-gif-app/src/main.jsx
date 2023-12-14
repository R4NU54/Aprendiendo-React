import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

import { GifApp } from './gif-app.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GifApp />
  </React.StrictMode>
);

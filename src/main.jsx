
import App from './App.jsx';
import '../src/assets/js/custom.js';

import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'aos/dist/aos.css';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import * as bootstrap from 'bootstrap'; // ← Add this
window.bootstrap = bootstrap;           // ← Make it globally accessible
import 'aos/dist/aos.css';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import './assets/sass/main.scss';
import './assets/sass/animate.css';
import './assets/sass/animation.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

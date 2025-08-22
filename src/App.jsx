
import React, { useEffect } from 'react';
import AOS from 'aos';
import { Fancybox } from '@fancyapps/ui';
import MainSection from './components/MainSection';


function App() {
  useEffect(() => {
    // AOS Init on window load
    window.addEventListener('load', () => {
      AOS.init({
        duration: 1000,
        easing: 'ease-in-out-back',
        once: true,
      });
    });
    Fancybox.bind('[data-fancybox]', {});
    }, []);

  return (
    <div className="App">
      <MainSection />
    </div>
  );
}

export default App;

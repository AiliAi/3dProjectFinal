import { preventOverflow } from '@popperjs/core';
import './dynamic-menu.js';


//Check if DOM is loaded
let domReady = (cb) => {
    document.readyState === 'interactive' || document.readyState === 'complete'
      ? cb()
      : document.addEventListener('DOMContentLoaded', cb);
  };
  
  domReady(() => {
    // Display body when DOM is loaded. This is to prevent the flash of unstyled html content on load
    document.body.style.visibility = 'visible';
  });




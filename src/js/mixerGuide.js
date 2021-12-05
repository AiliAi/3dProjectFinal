import '../modules/nav-loading.js';
import '../styles/main.scss';
import '../modules/tooltip.js';
import "@google/model-viewer";
import "focus-visible";
import arIconImage from '../../static/pictures/ar_icon.png';

  //Adds AR icon image
  const arIcon = document.querySelector('.ar-image');
  const ARimg = document.createElement('img');
  ARimg.src = arIconImage;
  ARimg.alt = 'AR icon';
  ARimg.className = 'ar-image';
  arIcon.appendChild(ARimg);

// Handles loading the events for <model-viewer>'s slotted progress bar
const onProgress = (event) => {
    const progressBar = event.target.querySelector('.progress-bar');
    const updatingBar = event.target.querySelector('.update-bar');
    updatingBar.style.width = `${event.detail.totalProgress * 100}%`;
    if (event.detail.totalProgress === 1) {
      progressBar.classList.add('hide');
    } else {
      progressBar.classList.remove('hide');
    }
  };
  document.querySelector('model-viewer').addEventListener('progress', onProgress);
  
  
  $(".HotspotAnnotation").animate({opacity: 'toggle'}, 'slow'); 
  
  $(".Hotspot").click(function () {
      $(this).children().animate({opacity: 'toggle'}, 'slow'); 
  });
  
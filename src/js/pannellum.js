import '../modules/nav-loading.js';
import '../styles/main.scss';
import '../modules/tooltip.js';
import * as bootstrap from 'bootstrap';

pannellum.viewer("panorama", {
    default: {
      firstScene: "classroom",
      sceneFadeDuration: 1000,
    },
  
    scenes: {
      classroom: {
        type: "cubemap",
        cubeMap: [
          "cube/front.jpg",
          "cube/right.jpg",
          "cube/back.jpg",
          "cube/left.jpg",
          "cube/top.jpg",
          "cube/down.jpg",
        ],
        autoLoad: true,
        hfov: 140,
        hotSpots: [
          {
            pitch: 15,
            yaw: -110,
            type: "info",
            text: "Metropolia Ammattikorkeakoulu",
            URL: "https://www.metropolia.fi/fi?gclid=CjwKCAiAp8iMBhAqEiwAJb94zzxL-uVk0_mKHRlh_rvhuQwbl_4_mVQCouwi-GmE3yXpO6Hy-bO--RoCK0gQAvD_BwE",
          },
  
          {
            pitch: 0,
            yaw: -95,
            type: "info",
            text: "Irinan läppäri",
            URL: "https://github.com/vvitchforest",
          },
  
          {
            pitch: 5,
            yaw: 170,
            type: "scene",
            text: "Bye",
            sceneId: "room2",
          },
        ],
      },
  
      room2: {
        type: "equirectangular",
        panorama: "panorama2.jpg",
        autoLoad: true,
        hfov: 170,
        pitch: 0,
        yaw: 45,
        hotSpots: [
          {
            pitch: 10,
            yaw: 100,
            type: "info",
            text: "Ikkuna",
          },
  
          {
            pitch: 0,
            yaw: -115,
            type: "scene",
            text: "Luokka",
            sceneId: "classroom",
          },
        ],
      },
    },
  });
  
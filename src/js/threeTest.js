import "../modules/nav-loading.js";
import "../styles/main.scss";
import "../modules/tooltip.js";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

let scene;
let camera;
let renderer;
let model;
let canvas = document.querySelector(".webgl");
const canvasSize = document.querySelector(".canvas-container");

const init = () => {
  scene = new THREE.Scene();
  const axesHelper = new THREE.AxesHelper(2);
  scene.add(axesHelper);

  /* Field of view - how wide you can see. A large number acts like a wide angle lense */
  const fov = 40;
  //Aspect ratio of browser window
  const aspect = canvasSize.offsetWidth / canvasSize.offsetHeight;
  //Near & far - range of distance between model and camera wherein model is visible
  const near = 0.1;
  const far = 1000;

  camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  console.log(camera);
  camera.position.set(0, 0, 25);
  scene.add(camera);

  renderer = new THREE.WebGLRenderer({
    antialias: true,
    //bg is transparent
    alpha: true,
    canvas: canvas,
  });
  renderer.setSize(canvasSize.offsetWidth, canvasSize.offsetHeight);
  renderer.setPixelRatio(window.devicePixelRatio ? window.devicePixelRatio : 1);
  renderer.autoClear = false;
  //In three.js you need that 0x prefix before hex code
  renderer.setClearColor(0x000000, 0.0);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.target.y = 0.1;
  controls.enableDamping = true;
  controls.update();

  //Setup lights
  //First argument is color, second is intensity
  const ambientLight = new THREE.AmbientLight(0x404040, 2);
  scene.add(ambientLight);

  const spotLight1 = new THREE.SpotLight(0xffffff, 3);
  //Spot from which light is emitted
  spotLight1.position.set(11, 9, 5);
  const spotLightHelper1 = new THREE.SpotLightHelper(spotLight1);
  scene.add(spotLight1);
  scene.add(spotLightHelper1);

  const spotLight2 = new THREE.SpotLight(0xffffff, 2);
  spotLight2.position.set(-23, -18, 8);
  const spotLightHelper2 = new THREE.SpotLightHelper(spotLight2);
  scene.add(spotLight2);
  scene.add(spotLightHelper2);

  //Backight
  const spotLight3 = new THREE.SpotLight(0x1d27f0, 2);
  spotLight3.position.set(12, 18, -17);
  const spotLightHelper3 = new THREE.SpotLightHelper(spotLight3);
  scene.add(spotLight3);
  scene.add(spotLightHelper3);

  const cameraHelper = new THREE.CameraHelper(camera);
  scene.add(cameraHelper);

  const loader = new GLTFLoader();
  loader.load("candle.glb", (glb) => {
    //three model is inside children, storing model inside room variable
    model = glb.scene.children[0];
    model.rotation.y = Math.PI * 10;
    model.scale.set(6, 6, 6);
    model.position.set(0, 0, 13);
    model.rotation.x = Math.PI / -2;

    scene.add(glb.scene);
    console.log("glb mikä olet", glb);
  });
  animate();
};

const render = () => {
  renderer.render(scene, camera);
};

//Recursive function calling animate
const animate = () => {
  requestAnimationFrame(animate);
  render();
  //controls.update();
};

//Responsive canvas for resizing window
const windowResize = () => {
  camera.aspect = canvasSize.offsetWidth / canvasSize.offsetHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(canvasSize.offsetWidth, canvasSize.offsetHeight);
  render();
};

//Double clicking canvas enters or exits full screen
canvas.addEventListener("dblclick", () => {
  const fullscreenElement =
    document.fullscreenElement || document.webkitFullscreenElement;
  if (!fullscreenElement) {
    if (canvas.requestFullscreen) {
      canvas.requestFullscreen();
    } else if (canvas.webkitRequestFullscreen) {
      canvas.webkitRequestFullscreen();
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
});

window.addEventListener("resize", windowResize, false);
window.onload = init;

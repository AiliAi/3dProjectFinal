import '../styles/main.scss';
import '../modules/nav-loading.js';
import '../modules/tooltip.js';


import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'


let perspectiveCamera, controls, scene, renderer;

/**
 * Canvas
 */
const canvas = document.querySelector('canvas.webgl');

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: 480
};

const params = {
    orthographicCamera: false
};

const frustumSize = 400;

init();
animate();

function init() {

    /**
 * Camera
 */
    const aspect = sizes.width / sizes.height;

    perspectiveCamera = new THREE.PerspectiveCamera(60, aspect, 1, 0);
    perspectiveCamera.position.z = 200;

    /**
* World
*/
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xcccccc);

    /**
* Model
*/
    const gltfLoader = new GLTFLoader();
    gltfLoader.load(
        'models/CupixModel.glb',
        (glb) => {
            glb.scene.scale.set(0.2, 0.2, 0.2);
            glb.scene.position.y = -200;
            glb.scene.rotation.x = Math.PI * -0.5;
            scene.add(glb.scene);
        }
    );

    /**
     * Lights
     */
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.set(1024, 1024);
    directionalLight.shadow.camera.far = 15;
    directionalLight.shadow.camera.left = - 7;
    directionalLight.shadow.camera.top = 7;
    directionalLight.shadow.camera.right = 7;
    directionalLight.shadow.camera.bottom = - 7;
    directionalLight.position.set(- 5, 5, 0);
    scene.add(directionalLight);

    /**
     * Renderer
     */
    renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        antialias: true
    });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio));


    window.addEventListener('resize', onWindowResize);

    createControls(perspectiveCamera);
};


/**
 * Controls
 */
function createControls(camera) {

    controls = new OrbitControls(camera, renderer.domElement);
    controls.listenToKeyEvents(window); // optional

    controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
    controls.dampingFactor = 0.05;

    controls.screenSpacePanning = false;

    controls.minDistance = 100;
    controls.maxDistance = 500;

    controls.maxPolarAngle = Math.PI / 2;
};

/** 
* Update
*/
function onWindowResize() {
    // Update camera
    const aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();

    
    // Update renderer
    renderer.setPixelRatio(Math.min(window.devicePixelRatio));
    renderer.setSize(sizes.width, sizes.height);

    render();
};

/**
* Animation
*/
function animate() {
    requestAnimationFrame(animate);

    controls.update();
    render();
};

/**
* Render
*/
function render() {
    const camera = (params.orthographicCamera) ? orthographicCamera : perspectiveCamera;
    renderer.render(scene, camera);
};




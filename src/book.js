import * as THREE from 'three';
import exam from '/public/img/exam-test.webp'

const scene = new THREE.Scene();
scene.background = new THREE.Color("white");
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, .1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
document.body.appendChild(renderer.domElement);

const book = new THREE.BoxGeometry(145, 137, 20);
let texture = new THREE.TextureLoader().load(exam);
const material = new THREE.MeshLambertMaterial({
  color: 'white',
  map: texture,
  shadowSide: THREE.DoubleSide
});
const mesh = new THREE.Mesh(book, material);
mesh.position.set(0, 0, -230);
mesh.rotation.set(0, .4, 0);
mesh.castShadow = true;
mesh.receiveShadow = true
scene.add(mesh);

const backgrand = new THREE.BoxGeometry(1000, 1000, 1);
const backgrandMesh = new THREE.MeshBasicMaterial({
  color: 0xF6F6F6,
  shadowSide: THREE.DoubleSide
});
const mesh1 = new THREE.Mesh(backgrand, backgrandMesh);
mesh1.receiveShadow = true;
mesh1.position.set(0, 0, -250)
scene.add(mesh1);

let light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(30, 30, 100)
light.target.position.set(0, 0, 0)
light.castShadow = true;
scene.add(light)
scene.add(light.target)

function run(){
  requestAnimationFrame(run)
  renderer.render(scene, camera)
}

run()

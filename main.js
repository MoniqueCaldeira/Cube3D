import * as THREE from 'https://unpkg.com/three/build/three.module.js';

// Criando a cena, a câmera e o renderizador
const cena = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const render = new THREE.WebGLRenderer();

render.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(render.domElement);

// Criando uma geometria de caixa
const geometriaCaixa = new THREE.BoxGeometry(1, 1, 1);

// Carregando a textura da imagem
const textura = new THREE.TextureLoader().load('img/background.png');

// Criando o material com a textura
const material = new THREE.MeshBasicMaterial({ map: textura });

// Criando a malha com a geometria e o material
const caixa = new THREE.Mesh(geometriaCaixa, material);

// Adicionando a caixa à cena
cena.add(caixa);

// Posicionando a câmera
camera.position.z = 5;

// Função para animar a cena
function animate() {
  requestAnimationFrame(animate);
  caixa.rotation.x += 0.01;
  caixa.rotation.y += 0.01;
  render.render(cena, camera);
}

// Chamando a função de animação
animate();

function setup() {
  createCanvas(640, 400, WEBGL);
  describe('mur de yeux fixant le curseur de la souris');
}

function draw() {
  
  //------ Effet de "dithering", pixelisation du rendu, trouvé sur internet ------
  let pg;
  let scaleFactor = 2;
  pixelDensity(0.4);
  pg = createGraphics(width / scaleFactor,height / scaleFactor);
  pg.noSmooth();
  noSmooth();
  
  background(20);
  camera(20, 50, 500);
  noStroke();
  let locX = mouseX - width / 2;
  let locY = mouseY - height / 2;
  
  //------ Initialisation des lumières ------
  pointLight(255, 120, 120, locX, locY, 20);
  pointLight(20, 255, 255, locX, locY, 15);
  pointLight(155, 55, 55, -locX*1.1, -locY*1.1, 250);
  pointLight(155, 55, 55, -locX*1.1, -locY*1.1, -250);
  
  
  //------ Initialisation des matériaux, doc trouvable ici : https://p5js.org/tutorials/lights-camera-materials/ ------
  normalMaterial();
  ambientMaterial(20, 20, 20);
  emissiveMaterial(0, 10, 20);
  shininess(70);
  specularMaterial(20, 20, 20);

  //------ création de plusieurs variables périodiques pour attribuer une animation de flottement ------ 
  let lightFloating = sin(frameCount * 0.06) * 2;
  let mediumFloating = sin(frameCount * 0.08) * 5;
  let hardFloating = sin(frameCount * 0.04) * 10;
  
  //------ affichage de toutes les sphères, push() et pop() servent à instancer des sphères différentes, et translate() sert à les positionner dans l'espace   ------ 
  push();
  translate(-190, lightFloating, -250);
  sphere(30);
  pop();
  
  push();
  translate(-60, 20 +mediumFloating, -300);
  sphere(100);
  pop();
  
  push();
  translate(100 + hardFloating, hardFloating, -250);
  sphere(65);
  pop();
  
  push();
  translate(-180 - lightFloating, 100 + lightFloating, -350);
  sphere(60);
  pop();
  
   push();
  translate(30, 100 + mediumFloating, 0-250);
  sphere(40);
  pop();
  
  push();
  translate(-300 + lightFloating, lightFloating, -500);
  sphere(65);
  pop();
  
  push();
  translate(300 + lightFloating, -60 + lightFloating, -600+hardFloating);
  sphere(85);
  pop();
  
  push();
  translate(-180 - lightFloating, -150 + lightFloating, -350);
  sphere(120);
  pop();
  
  push();
  translate(220 - lightFloating, 100 + lightFloating, -350 + hardFloating);
  sphere(90);
  pop();
  
  push();
  translate(80 - lightFloating - lightFloating, -150 + lightFloating, -350 + hardFloating);
  sphere(90);
  pop();
  
}
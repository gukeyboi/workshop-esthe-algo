function setup() {
  createCanvas(640, 400);
}

function draw() {
  background(255);
  n = 0 // variable d'itération
  width = 1; // variable d'épaisseur du tait
  canvaY = 640; // largeur et hauteur du canva pour tracer la ligne
  canvaX = 400;
  colorswitch = 255; // initialisation de la variable permettant un changement de couleur
  colorswitch2 = 225;
  
  while (n <= canvaY - 300) { // boucle de traçage active jusqu'à ce que le canva soit rempli
    stroke(0, colorswitch, colorswitch2) // couleur du trait
    width = width + 1;
    strokeWeight(width); // largeur du trait
    n = n + width + 1;
    canvaX = canvaX - n - 10;
    canvaY = canvaY - n - 10;
    line(n, n, n, canvaX); // traçage des traits
    colorswitch = colorswitch - 2 
    colorswitch2 = colorswitch2 - 2
    line(n, canvaX, canvaY, canvaX);
    colorswitch = colorswitch - 2
    colorswitch2 = colorswitch2 - 2
    line(canvaY, canvaX, canvaY, n);
    colorswitch = colorswitch - 2
    colorswitch2 = colorswitch2 - 2
    line(canvaY, n, n, n);
    colorswitch = colorswitch - 2
    colorswitch2 = colorswitch2 - 2
    
  }

}

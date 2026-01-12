function setup() {
  createCanvas(640, 400);
}

function draw() {
  background(255);
  n = 0
  width = 1;
  thevalue = 3;
  canvaY = 640;
  canvaX = 400;
  colorswitch = 255;
  colorswitch2 = 225;
  
  while (n <= canvaY - 300) {
    stroke(0, colorswitch, colorswitch2)
    width = width + 1;
    strokeWeight(width);
    n = n + width + 1;
    canvaX = canvaX - n - 10;
    canvaY = canvaY - n - 10;
    line(n, n, n, canvaX);
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
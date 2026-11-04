var char_image;
var char_shape_x = 50;
var char_shape_y = 50;

var mouse_shape_x;
var mouse_shape_y;
var biteSize;
var startAngle;
var endAngle;
var baseAngle;

var obstacle1_x1 = 0;
var obstacle1_y1 = 500;
var obstacle1_x2 = 340;
var obstacle1_y2 = 450;
var obstacle1_x3 = 300;
var obstacle1_y3 = 600;
var obstacle1_x4 = 0;
var obstacle1_y4 = 600;

var obstacle2_x1 = 420;
var obstacle2_y1 = 450;
var obstacle2_x2 = 475;
var obstacle2_y2 = 550;
var obstacle2_x3 = 600;
var obstacle2_y3 = 550;
var obstacle2_x4 = 600;
var obstacle2_y4 = 475;

function preload() {
  char_image = loadImage('portrait.png');
}

function setup() {
  createCanvas(600, 550);
}
function draw() {
  biteSize= PI/12;
  startAngle= biteSize * sin(frameCount * 0.1) + biteSize;
  endAngle= TWO_PI -startAngle;
  baseAngle=1.2*PI;
  background(0);
  fill(24, 200, 29);
  arc(mouse_shape_x, mouse_shape_y, 40, 40, baseAngle + startAngle, baseAngle + endAngle, PIE);
  image(char_image, char_shape_x, char_shape_y, 60, 80);
  fill("red");
  quad(obstacle1_x1, obstacle1_y1, obstacle1_x2, obstacle1_y2, obstacle1_x3, obstacle1_y3, obstacle1_x4, obstacle1_y4);
  fill("magenta");
  quad(obstacle2_x1, obstacle2_y1, obstacle2_x2, obstacle2_y2, obstacle2_x3, obstacle2_y3, obstacle2_x4, obstacle2_y4);

  //Mouse Cordinates
  fill(255);
  noStroke();
  textSize(12);
  text("x: " + round(mouseX) + ", y: " + round(mouseY), 10, 20);
  
  //Character coordinates
  text("Warrior x:  " + char_shape_x + " Warrior y: " + char_shape_y, 430, 20);

  if (keyIsDown(68)) {
    char_shape_x += 3;
  }
  else if (keyIsDown(65)) {
    char_shape_x -= 3;
  }
  if (keyIsDown(83)) {
    char_shape_y += 10;
  }
  else if (keyIsDown(87)) {
    char_shape_y -= 10;
  }

  if (char_shape_x > 330 && char_shape_x <= 365 && char_shape_y > 450) {
    background(100, 200, 0);
    fill(0);
    textSize(30);
    text("You Win!!", 150, 200);
  }

}

function mouseClicked() {
  mouse_shape_x = mouseX;
  mouse_shape_y = mouseY;
}


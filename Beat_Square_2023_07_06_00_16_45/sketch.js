let rectX;
let rectY;
let rectSize = 50;
let rectSpeed;
let rectDirection = 1;

let blueSquareX;
let redSquareX;
let squareY;
let squareSize = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectX = width / 2;
  rectY = height / 2;
  rectSpeed = width * 0.01;
  blueSquareX = width * 0.1;
  redSquareX = width * 0.8;
  squareY = height * 0.5;
}

function draw() {
  background(220);
  
  rect(rectX, rectY, rectSize, rectSize);
  
  fill(0, 0, 255);
  rect(blueSquareX, squareY, squareSize, squareSize);
  
  fill(255, 0, 0);
  rect(redSquareX, squareY, squareSize, squareSize);
  
  rectX += rectSpeed * rectDirection;
  
  if (rectX + rectSize >= blueSquareX && rectX <= blueSquareX + squareSize && rectY <= squareY + squareSize && keyIsPressed && keyCode === 32) {
    rectDirection *= -1;
  }
  
  if (rectX + rectSize >= redSquareX && rectX <= redSquareX + squareSize && rectY <= squareY + squareSize && keyIsPressed && keyCode === 32) {
    rectDirection *= -1;
  }
}

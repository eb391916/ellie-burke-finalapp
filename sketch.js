var gui;
var bgColor; //bgColor taken from: https://editor.p5js.org/aferriss/sketches/B1oYHcN9W

function setup() {
  createCanvas(windowWidth, windowHeight);

  d = select('.container');
  d.position(0,0);

  gui = new Gui();
  let gui_setup = new dat.GUI();

  gui_setup.add(gui, 'size', 10, 150).step(1);
  gui_setup.add(gui, 'curves', 1, 50).step(1);
  gui_setup.add(gui, 'strokeWeight', 0, 10).step(1);
  gui_setup.add(gui, 'showDescription').onChange(description);

  gui_setup.addColor(gui, 'color');

  bgColor = color(random(255), random(255), random(255));
  
  rectMode(CENTER);
}

function draw() {
  background(bgColor);
  fill(gui.color);

  swing = 10;
  cNum = 5;

  for (let i = windowWidth * 0.25; i <= windowWidth * 0.75; i += windowWidth * 0.25) {
    for (let y = windowHeight * 0.25; y <= windowHeight * 0.75; y += windowWidth * 0.25) {
      mySquares(i, y, gui.size, gui.curves);
    }
  }

  print(windowWidth / 2 - 100, "mod");
  print(windowWidth / 2, "width/2");
  noLoop();
}

function mySquares(xPos, yPos, num) {
  for (var i = 0; i <= num; i++) {
    strokeWeight(gui.strokeWeight);

    fill(gui.color);
    square(xPos, yPos, gui.size, gui.curves);
  }
}

function description() {
  if(gui.showDescription) {
    d.style('display', 'block');
  }
  else{
    d.style('display','none');
  }
}

function mousePressed() {
  redraw();
}

function mouseDragged() {
  redraw();
}

function Gui() {
  this.size = 25;
  this.curves = 1;
  this.strokeWeight = 5;
  this.color = '#f0f0f0';
  this.showDescription = true;
}

function doubleClicked() {
    bgColor = color(random(255), random(255), random(255));
}

function keyPressed(){
  if (keyCode === DOWN_ARROW) {
    save("mySquaresSVG.svg");
    print("saved svg");
    noLoop();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
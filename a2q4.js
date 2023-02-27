function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220);
  noStroke();

  //Stripes
  stripe(0, "yellow");
  stripe(40, "green");
  stripe(80, "yellow");
  stripe(120, "green");
  stripe(160, "yellow");
  stripe(200, "green");
  stripe(240, "yellow");
  stripe(280, "green");
  stripe(320, "yellow");
  stripe(360, "green");

  //Square
  fill("red");
  square(0, 0, 160);

  //Star
  fill("white");
  beginShape();
  vertex(80, 40);
  vertex(95, 70);
  vertex(120, 70);
  vertex(100, 90);
  vertex(110, 120);
  vertex(80, 100);
  vertex(50, 120);
  vertex(60, 90);
  vertex(40, 70);
  vertex(65, 70);
  vertex(80, 40);
  endShape();
}
function stripe(x, color) {
  fill(color);
  rect(0, x, 600, 40);
}

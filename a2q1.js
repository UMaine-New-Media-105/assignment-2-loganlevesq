function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  fill("hsl(191,89%,63%)")
 
  //rows
  row(0, 0, 0);
  row(0, 80, 0);
  row(0, 160, 0);
  row(0, 240, 0);
  row(0, 320, 0);
  
  //innitial
  fill("rgb(241,99,99)")
  rect(0,0,80)
  rect(0,80,80)
  rect(0,160,80)
  rect(0,240,80)
  rect(0,320,80)
  rect(80,320,80)
  rect(160,320,80)
  
  
  
}
function row(x, y, size) {
  rect(0, y, 80);
  rect(80, y, 80);
  rect(160, y, 80);
  rect(240, y, 80);
  rect(320, y, 80);

}

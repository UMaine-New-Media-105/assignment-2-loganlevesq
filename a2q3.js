function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("hsl(200,27%,51%)");
  
  shield(-70,-70,1.35)
  
}
function shield(x,y,size) {
  
  translate(x,y)
  scale(size)
  stroke(50);
  strokeWeight(4);

  //shield outer
  fill("rgb(138,199,199)");
  beginShape();
  vertex(200, 50);
  vertex(300, 120);
  vertex(270, 200);
  vertex(300, 280);
  vertex(200, 350);
  vertex(100, 280);
  vertex(130, 200);
  vertex(100, 120);
  vertex(200, 50);
  endShape();
  //shield mid
  fill("rgb(192,101,101)");
  beginShape();
  vertex(200, 90);
  vertex(260, 130);
  vertex(235, 200);
  vertex(260, 270);
  vertex(200, 310);
  vertex(140, 270);
  vertex(165, 200);
  vertex(140, 130);
  vertex(200, 90);
  endShape();
  //shield inner
  fill("rgb(172,172,114)");
  beginShape();
  vertex(200, 117);
  vertex(235, 140);
  vertex(215, 200);
  vertex(235, 260);
  vertex(200, 285);
  vertex(165, 260);
  vertex(185, 200);
  vertex(165, 140);
  vertex(200, 117);
  endShape();
}


function setup() {
  createCanvas(400, 400);  
}

function draw() {
  
  if(keyIsDown(RIGHT_ARROW)){
    background("red");
  }
  if(keyIsDown(DOWN_ARROW)){
    background("blue");
  }
  if(keyIsDown(UP_ARROW)){
    background("green");
  }
  if(keyIsDown(LEFT_ARROW)){
    background("yellow");
  }
}


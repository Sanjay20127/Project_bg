var btn_red;
var btn_green;

var r = 0;
var g = 0;
var b = 0;

function setup() {
  createCanvas(400, 400);  
}

function draw() {
  background(r,g,b);
  function red_bg(){
    r = 255;
    g = 0;
    b = 0;
  }
  function green_bg(){
    r = 0;
    g = 255;
    b = 0;
  }
  if(keyIsDown(RIGHT_ARROW)){
    red_bg();
  }
  if(keyIsDown(DOWN_ARROW)){
    green_bg();
  }
}


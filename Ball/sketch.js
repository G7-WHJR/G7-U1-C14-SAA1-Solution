var colors = ["white","orange","red","green"];
//SAA2:
//var colors = ["white","orange","red","green", "yellow","pink"];

function setup() {
  createCanvas(innerWidth, innerHeight);
  background("white");
}

function draw() {
  var y =50;
  for (i = 0; i < colors.length; i++){
     currentColor = new Ball(150, y, 25, colors[i]);
     currentColor.appear();
     y = y + 50;
 }
}
    


var colors = ["white","orange","red","green"];

function setup() {
  //size of the canvas to draw on
  createCanvas(innerWidth, innerHeight);

  // Set the background to white, and move the line to setup();
  background("white");

}


function draw() {
  
  var y =50;
  for (i = 0; i < colors.length; i++){
    //make an object for each color:
     currentColor = new Ball(150, y, 25, colors[i]);
     currentColor.appear();
     y = y + 50;
 }
  
    
}
    


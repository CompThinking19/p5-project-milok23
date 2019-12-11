// this program is designed to allow the user to draw using randomly chosen colors
// every time the mouse is pressed the color is randomly changed
// the user can chang the shape they draw with by using the right and left
// arrow keys(left = square, right = circle)
// the user can also change the size by using the up and down arrow keys
// (up increases by 10, down decreases by 10)
// the user can clear the canvas by pressing shift

// sets up the variables for the program
let r, g, b;
var size = 10;
var type = 1;
// sets up the canvas with light grey backround color
function setup() {
  createCanvas(1000, 600);
  background(230);
  strokeWeight(0);


}
// gets keyboard input from user
function keyPressed() {
  // when the up arrow is pressed it increases the size
  if (keyCode === UP_ARROW) {
    size += 10;
  // when the down arrow is pressed it decreaces the size
  } else if (keyCode === DOWN_ARROW) {
    size -= 10;
  }
  // when the left arrow is pressed the type is set as a square
  if (keyCode === LEFT_ARROW) {
    type = 1;
    // when the right arrow is pressed the type is set as a circle
  } else if (keyCode === RIGHT_ARROW) {
    type = 2;
  }
  // when shift is pressed it clears the canvas
  else if (keyCode === SHIFT){
    clear();
    background(230);
  }
}

function draw() {
  /// when the mouse is pressed it randomly selects a color
  if (mouseIsPressed) {
    r = random(255);
    g = random(255);
    b = random(255);
    stroke(r, g, b);
    fill(r, g, b);

  //depending on the users selection it will draw a cricle or a square
  }
  if (type === 1){
    square(mouseX - (size/2) , mouseY - (size/2), size)
  }
  else if (type === 2){
    circle(mouseX, mouseY, size);
  }

}

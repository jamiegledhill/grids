const CELLSIZES = [40, 50, 100, 150];
const COLOURS = ["#FF6347","#FFD700", "#EE82EE"]
function setup() {
  createCanvas(innerWidth, innerHeight);
  noLoop()
}

function draw() {
  background(220);
  //////////
  // Simple Grid
  /*
  const CELLSIZE = 20;
  for (let y = 0; y < height; y += CELLSIZE) {
    for (let x = 0; x < width; x += CELLSIZE) {
      fill(random(255))
      rect(x, y, CELLSIZE);
    }
  }*/
  //////////
  // Piet Mondrian
  /*let x = 0;
  let y = 0;
  let currentWidth = random(CELLSIZES);
  let currentHeight = random(CELLSIZES);
  strokeWeight(5)
  while (y < height) {
    while(x < width){
      fill(random(COLOURS))
      rect(x, y, currentWidth, currentHeight)
      x += currentWidth;
      currentWidth = random(CELLSIZES)
    }
    x = 0;
    y+= currentHeight;
    currentHeight = random(CELLSIZES)
  }
    */
    //////////
  // Grid of Shapes
  const ARCVALUES = [TAU * 0.25, TAU * 0.5, TAU * .75, TAU];
  const CELLSIZE = 50;
  for (let y = 0; y < height; y += CELLSIZE) {
    for (let x = 0; x < width; x += CELLSIZE) {
      fill(random(255))
      noStroke()
      // draw circle in middle of cell
      arc(x + CELLSIZE/2, y + CELLSIZE/2, CELLSIZE, CELLSIZE, 0, random(ARCVALUES))
      fill(random(255))
      arc(x + CELLSIZE/2, y + CELLSIZE/2, CELLSIZE/2, CELLSIZE/2, 0, random(ARCVALUES))
    }
  }
}

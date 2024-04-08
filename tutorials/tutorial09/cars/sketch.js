const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

// feel free to change these values as you like!
const c1 = {
    x: 0,
    y: 100,
    width: 150,
    speed: 20,
    color: 'hotpink'
};

const c2 = {
    x: 1000,
    y: 200,
    width: 150,
    speed: -20,
    color: 'green'
};

const c3 = {
    x: 0, 
    y: 700,
    width: 400, 
    speed: 20, 
  color: 'blue'

};

// required to set up the canvas:
function setup() {
    createCanvas(canvasWidth, canvasHeight);
}


// animation loop:
function draw() {
    // clear the canvas:
    console.log 
    clear();

    // move the cars:
    if (c1.x > canvasWidth + 400) {
        console.log ("Car 1 Jumps!")  
        c1.x = -400;}

    if (c2.x < -200) { 
        console.log ("Car 2 Jumps!")
        c2.x = canvasWidth + 200;}

    // if (c3.x < +400) {
    //     console.log ("Car 3 Jumps!")
    //     c2.x = canvasWidth + 200;}

    }

    c1.x += c1.speed;
    c2.x += c2.speed;
    c3.x += c3.speed; 
    

    // redraw the car:
    drawCar(c1.x, c1.y, c1.width, c1.color);
    drawCar(c2.x +10, c2.y + 10, c2.width + 10, c2.color);
    drawCar(c3.x +10, c3.y + 10, c3.width + 10, c3.color);
    // draw the grid (optional -- feel free to remove this line):

    }

// this function's job is to draw a car based on the 
// parameters the user passes in (x, y, size, fillColor, and wheelColor)
function drawCar(x, y, size, fillColor, wheelColor='black') {
    strokeWeight(0);
    
    // body
    fill(fillColor);
    rect(x - size/4, y - (size/5 + size/7), size / 2, size/7); // top
    rect(x - size/2, y - size/5, size, size/5); // bottom

    // wheels:
    fill(wheelColor);
    circle(x - size / 4, y, size / 6);
    circle(x + size / 4, y, size / 6);
}

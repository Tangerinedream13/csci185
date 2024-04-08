const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;
const colors = ["#08415c33", "#e1f0c433", "#6bab9033", "#55917f33", "#5e4c5a33"];

function randomInt(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    frameRate(1); // how many redraws per second
}

/***********************************+*
 * ANIMATION LOOP
 * Anything that you want to animate
 * goes in the draw() function
 * *********************************
 */
function draw() {
    fill("#08415c50");
    strokeWeight (3);
    clear ();
    // generate a random x-position, y-position, and size:
    // Draw a random circle:
    let counter = 0; 
    while (counter <100) {
        let color = colors [randomInt(0,4)]; 
        fill (color); 
        let x = randomInt(0, canvasWidth);
        let y = randomInt(0, canvasHeight);
        let size = randomInt(25, 125);    
        circle (x, y, size);
        square (x, y, size);
        counter ++;
        //counter = counter + 1;
    }

}

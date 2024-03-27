function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);
    background("pink");

    fill ("black");
    rect (400,200,700,400);
    circle (500, 700, 100);
    fill ("blue");
    circle (500, 700, 200);
    fill ("blue");
    circle (900, 700, 200);
    fill ("black");
    rect (200, 400, 200, 200);


    /* Use the drawing functions to draw a picture. Ideas:
        * Draw an animal
        * Draw a tree
        * Draw a car
        * Draw some abstract art
    */

    // https://p5js.org/reference/#/p5/circle
    fill("teal")
    circle(550, 100, 100);

    // https://p5js.org/reference/#/p5/rect
    fill('hotpink')
    rect(30, 20, 55, 55);

    // add your drawing here:
    https://p5js.org/reference/#/p5/point
    strokeWeight (20);
    point(110, 20);

    // https://p5js.org/reference/#/p5/text
    text("Here is some text", 200, 40);

    // https://p5js.org/reference/#/p5/ellipse
    fill('red');
    ellipse(100, 200, 60, 100);

    // Other shapes...
    //Polygon: https://p5js.org/reference/#/p5/beginShape
    //Line: https://p5js.org/reference/#/p5/line
    
    // Curve: https://p5js.org/reference/#/p5/curve


    // for debugging:
    drawGrid(canvasWidth, canvasHeight)
}
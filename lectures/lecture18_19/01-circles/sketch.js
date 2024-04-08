function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // fill('red');
    noFill();
    //1. call the circle function 
    //2. how many times: 5
    //3. what do we change each time? y by 50
    let counter = 0; 
    let y = 0; 
    let width = 10;
    while (counter < 100) {
        circle(500, y, width);
        circle (800, y, width);
        circle (1100, y, width);
        y += 10; 
        width += 3;
        counter += 1; 
    //don't forget to increment the counter
    }
    // circle(100, 250, 50);
    // circle(100, 300, 50);
    // circle(100, 350, 50);
    // circle(100, 400, 50);

    drawGrid(canvasWidth, canvasHeight);
}

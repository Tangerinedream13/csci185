const photos = [
    "images/img1-600x400.jpg", //0
    "images/img2-600x400.jpg", //1 
    "images/img3-600x400.jpg", //2
    "images/img4-600x400.jpg",
    "images/img5-600x400.jpg",
    "images/img6-600x400.jpg",
    "images/img7-600x400.jpg",
    "images/img8-600x400.jpg",
    "images/img9-600x400.jpg",
    "images/img10-600x400.jpg" //9
];
let idx = 0;
/* This function should:
    (1) display the new image inside of the .current-photo container, and 
    (2) update the caption inside of the .caption paragraph
*/
function showImage() {
    console.log("Show image:", idx);
    const img = document.querySelector("#the_image");
    img.src = photos[idx];
    const captionEl = document.querySelector (".caption"); 
    captionEl.innerHTML = "Image "+(idx +1)+ " of 10"; 

    //TO DO: also target the caption text and change it too!
    //for example if the fourth image in the array is being displayed, the caption should say "4 of 10"

}
/* This function should set the idx variable 
   to one greater than the current value of idx, 
   and then invoke the showImage() function.
   If the idx gets to one less than the length of 
   the array, set idx to 0.
*/
function forward() {
    //TO DO: If it gets to 9, set it to 0
    idx += 1; 
    if (idx > 9) {
        idx = 0; // Set idx to 9 if it's less than 0
    } 
    showImage ();
}


/* This function should set the idx variable 
   to one less than the current value of idx, 
   and then invoke the showImage() function.
   If the idx gets to the beginning, set idx to
   one less than the length of the array.
*/
function back() {
    //If it gets less than 0 set it to 9
    //TO DO: If the value of idx is 0, set idx to the last available slot in the array so that carousel "wraps around" to the end
    idx -= 1;
    if (idx < 0) {
        idx = 9; 
    }
    showImage ();
}
    //Tips For the forward() and back() functions, you will need to use an if / else statement to check if the idx value is out of bounds in either direction, so that you can respond accordingly.
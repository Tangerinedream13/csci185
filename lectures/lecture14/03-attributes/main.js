function showCat() {
    console.log("This is a cat");
    const img = document.querySelector ("#current-image");
    const caption = document.querySelector ("#caption"); 
    img.src = "images/cat.jpg"; 
    caption.innerHTML = "This is a cute cat.";
}

function showDog() {
    console.log("This is a dog");
    const img = document.querySelector ("#current-image");
    const caption = document.querySelector ("#caption"); 
    img.src = "images/dog.jpg"; 
    caption.innerHTML = "This is a cute puppy.";
}

function showBird() {
    console.log("This is a bird");
    const img = document.querySelector ("#current-image");
    const caption = document.querySelector ("#caption"); 
    img.src = "images/bird.jpg"; 
    caption.innerHTML = "This is a cute bird.";
}

function showFish() {
    console.log("This is a fish");
    const img = document.querySelector ("#current-image");
    const caption = document.querySelector ("#caption"); 
    img.src = "images/fish.jpg"; 
    caption.innerHTML = "This is a cute fish.";
}

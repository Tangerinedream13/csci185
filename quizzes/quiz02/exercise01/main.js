function changeBackground() {
    console.log ("test");
    document.querySelector("#s1").style.backgroundColor = "pink";
}
function goodbye() {
    console.log ("Goodbye");
    const message = document.querySelector ("#message");
    message.innerHTML = "Goodbye";
}
function showDog() {
    document.querySelector('img').src = "images/dog.jpg";
}

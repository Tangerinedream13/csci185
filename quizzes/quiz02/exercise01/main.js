function changeBackground() {
    console.log ("test");
    document.querySelector("#s1").style.backgroundColor = "pink";

    // let el = document.querySelector ("#s1");
    // el.style.backgroundColor = "#02afd7";
}
function goodbye() {
    console.log ("Goodbye");
    const message = document.querySelector ("#message");
    message.innerHTML = "Goodbye";
}
function showDog() {
    document.querySelector('img').src = "images/dog.jpg";
}

function addCat() {
    // your code here...
    let snippet = `<img src="cat.jpg" />`;
    const img = document.querySelector("#animals");
    //call "Animals" section add innerAdjacentHTML()
    img.insertAdjacentHTML ('beforeend', snippet);
}

function addDog() {
    // your code here...
    let snippet = `<img src="dog.jpg" />`;
    const img = document.querySelector("#animals");
    //call "Animals" section add innerAdjacentHTML()
    img.insertAdjacentHTML ('beforeend', snippet);
}

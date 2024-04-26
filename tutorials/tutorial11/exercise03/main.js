const restaurants = [
    "Suwana's Thai Orchid", 
    "Khao Thai Cuisine", 
    "Little Bee Thai", 
    "PIE.ZAA Pizza", 
    "Fahrenheit Pizza & Brewhouse", 
    "Fresh Wood Fired Pizza West", 
    "Wasabi", 
    "Red Ginger Dimsum And Tapas", 
    "Murasaki Asheville"
];

for (let i = 0; i < restaurant.length; i++) {
    const element = document.querySelector ('#output');
    element.innerHTML += `<p>${restaurants[i]}</p>`
    //element.insertAdjacentHTML ("beforehand", `<p>${restaurants[i])}</p>`;
}
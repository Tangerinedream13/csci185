const restaurants = [
  {
    name: "Suwana's Thai Orchid",
    rating: 4,
    price: "$$",
    review_count: 312,
    category: "thai",
  },
  {
    name: "Khao Thai Cuisine",
    rating: 5,
    price: "$$",
    review_count: 65,
    category: "thai",
  },
  {
    name: "Little Bee Thai",
    rating: 4.5,
    price: "$$",
    review_count: 127,
    category: "thai",
  },
  {
    name: "PIE.ZAA Pizza",
    rating: 4.5,
    price: "$$",
    review_count: 156,
    category: "pizza",
  },
  {
    name: "Fahrenheit Pizza & Brewhouse",
    rating: 4.5,
    price: "$$",
    review_count: 326,
    category: "pizza",
  },
  {
    name: "Fresh Wood Fired Pizza West",
    rating: 4.5,
    price: "$$",
    review_count: 184,
    category: "pizza",
  },
  {
    name: "Wasabi",
    rating: 4,
    price: "$$",
    review_count: 321,
    category: "sushi",
  },
  {
    name: "Red Ginger Dimsum And Tapas",
    rating: 4.5,
    price: "$$",
    review_count: 1132,
    category: "sushi",
  },
  {
    name: "Murasaki Asheville",
    rating: 4.5,
    price: "$$",
    review_count: 23,
    category: "sushi",
  },
];

const mainElement = document.querySelector("#output");
for (let i = 0; i < restaurants.length; i++) {
  if (restaurants[i].category === "pizza") {
    const p = document.createElement("p");
    p.textContent = restaurants[i].name;
    mainElement.appendChild(p);
  }
}
//The querySelector('#output') selects the <main> tag with the id of output.
//The for loop iterates over the restaurants array. Inside the loop, there's a condition that checks if the restaurant's category is "pizza".
//If the category is "pizza", a new paragraph element (<p>) is created
//the restaurant's name is set as the text content of the paragraph

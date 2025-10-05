//1
const headphone = {
  brand: "Sony",
  price: 3000,
  color: "red",
};

Object.freeze(headphone);
headphone.port = "3.5 mm";
console.log(headphone);

//2
const player = {
  name: "Messi",
  goals: 800,
  club: "Inter Miami",
};

Object.freeze(player);
player.country = "Argentina";
console.log(player);

//3
const book = {
  title: "Harry Potter",
  author: "J. K. Rowling",
  pages: 500,
};

Object.freeze(book);
book.author = "Touhid Tamim";
console.log(book);

//4
const gadget = {
  name: "IPhone",
  price: 120000,
  color: "Black",
};

delete gadget.price;
console.log(gadget);

//5
const animal = {
  name: "Tiger",
  location: "Sundarban",
};

Object.freeze(animal);
// animal.name = "Lion";
console.log(animal);

//6
const food = {
  name: "Pizza",
  price: 500,
  size: "large",
};

Object.seal(food);
food.name = "Burger";
food.restaurant = "Burger King";
delete food.size;
console.log(food);

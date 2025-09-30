//1
const player = {
  name: "Lionel Messi",
  age: 37,
  sport: "Football",
  team: "Inter Miami",
  isCaptain: true,
};

console.log(player.team);

//2
const laptop = {
  brand: "HP Victus",
  price: 95000,
  hardDisk: "512GB SSD",
  ram: "16GB",
  screenSize: "15.6 inch",
};

console.log(laptop.screenSize);

//3
const favPlace = {
  name: "Cox's Bazar",
  distance: "400km",
  popularity: "high",
};

console.log(favPlace["popularity"]);

//4
const phone = {
  brand: "Nokia",
  color: "black",
  price: 5000,
};

console.log(phone["price"]);

//5
const library = {
  name: "Public Library",
  location: "Dhaka",
  books: 5000,
};

console.log(library["location"]);

//6
const movie = {
  title: "Inception",
  director: "Nolan",
  rating: 9,
};

console.log(movie["rating"]);

//7
const college = {
  name: "ndc",
  established: 1949,
  groups: ["Science", "Arts", "Commerce"],
};

console.log(college.groups[1]);

//8
const family = {
  father: {
    name: "Md. Zonayed Sarker",
    age: 50,
    profession: "Teacher",
  },
  mother: {
    name: "Mst. Tahmina Begum",
    age: 45,
    profession: "Housewife",
  },
};

let fathersAge = family.father.age;
let mothersAge = family.mother.age;

let sumOfTheirAge = fathersAge + mothersAge;
console.log(sumOfTheirAge);

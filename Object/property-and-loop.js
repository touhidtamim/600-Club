//1
const book = {
  name: "Atomic Habits",
  author: "James Clear",
  genre: "Self-Help",
  pages: 320,
  price: 850,
};

console.log(Object.keys(book));
console.log(Object.values(book));

//2
const article = {
  title: "Learning JS",
  category: "Programming",
};

if ("author" in article) {
  console.log("author property exist");
} else {
  console.log("author property doesn't exist");
}

//3
const laptop = {
  brand: "Dell",
  model: "Inspiron",
  price: 45000,
};

for (key in laptop) {
  const value = laptop[key];
  console.log(key, value);
}

//4
const phone = {
  brand: "Samsung",
  model: "S21",
  price: 85000,
};

const keys = Object.keys(phone);
for (const key of keys) {
  console.log(key, phone[key]);
}

//5
const bike = {
  brand: "Hero",
  model: "Splendor",
  price: 120000,
};

const allValuesOfBike = Object.values(bike);
console.log(allValuesOfBike);

//6
const books = {
  book1: "Harry Potter",
  book2: "The Hobbit",
  Book3: "Game of thrones",
};

for (const key in books) {
  console.log(books[key]);
}

//7
const numbers = {
  a: 10,
  b: 20,
  c: 30,
  d: 40,
};

const a = numbers.a;
const b = numbers.b;
const c = numbers.c;
const d = numbers.d;

const sum = a + b + c + d;
console.log(sum);

//8
const player = {
  name: "Messi",
  team: "Argentina",
  goals: 91,
};

const allValuesOfplayer = Object.values(player);
console.log(allValuesOfplayer);

//9
const building = {
  floors: 10,
  address: {
    street: "main road",
    city: "Dhaka",
  },
  type: "Commercial",
};

for (const key in building) {
  const value = building[key];

  if (typeof value === "object") {
    for (const subKey in value) {
      console.log(subKey, value[subKey]);
    }
  } else {
    console.log(key, value);
  }
}

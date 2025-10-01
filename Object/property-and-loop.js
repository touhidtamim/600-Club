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

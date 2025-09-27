//1
let fruits = ["apple", "banana ", "mango", "lichi"];
if (fruits.includes("mango")) {
  console.log("Here is mango");
} else {
  console.log("there is no mango");
}

//2
let people = ["babul", "alif", "choton"];
let indexNo = people.indexOf("babul");
console.log(indexNo);

//3
let friends = ["rimon", "rifat", "rajib"];
let indexofRifat = friends.indexOf("rifat");
console.log(indexofRifat);

//4
let state = ["Dhaka", "Chittagong", "Sylhet"];
state.push("rajshahi");
console.log(state.includes("RajShahi"));

//5
let arr = ["bristy", "megh", "dhighi", "borsha"];
if (arr.includes("bristy")) {
  console.log("I need umbrella");
} else {
  console.log("NO RAIN NO PAIN");
}

//6
let sports = ["football", "Cricket", "volleyball"];
console.log(sports.includes("badminton"));

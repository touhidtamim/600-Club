//1
let purchasePrice = 4500;

if (purchasePrice > 3000) {
  const discount = (purchasePrice / 100) * 5;
  const pay = purchasePrice - discount;
  console.log(pay);
} else if (purchasePrice > 6000) {
  const discount = (purchasePrice / 100) * 15;
  const pay = purchasePrice - discount;
  console.log(pay);
}

//2
const foodPrice = 2000;
let customerAge = 11;

if (customerAge < 12) {
  console.log("food is free");
} else if (customerAge > 60) {
  const discountDibo = (foodPrice / 100) * 50;
  const payKortehobe = foodPrice - discountDibo;
  console.log(payKortehobe);
} else {
  console.log(foodPrice);
}

//3
let accountBalance = 5000;

if (accountBalance < 1000) {
  console.log("please deposit");
} else if (accountBalance >= 1000 && accountBalance <= 5000) {
  console.log("enjoy your life");
} else if (accountBalance > 5000) {
  console.log("Rich kid");
}

//4
let marks = 90;

if (marks < 50) {
  console.log("fail");
} else if (marks >= 50 && marks < 80) {
  console.log(pass);
} else if (marks >= 80) {
  console.log("you got A+");
}

//5
const page = 600;

if (page < 100) {
  console.log("small book");
} else if (page > 100 && page <= 500) {
  console.log("Mid-size book");
} else if (page > 500) {
  console.log("heart - attack size book");
}

//6
const temperature = 0;

if (temperature < 0) {
  console.log("Ice");
} else if (temperature >= 0 && temperature <= 20) {
  console.log("Cool Cool");
} else if (page > 20) {
  console.log("hot hot");
}

//7
const gameLevel = 25;

if (gameLevel < 10) {
  console.log("novice");
} else if (gameLevel >= 10 && gameLevel <= 50) {
  console.log("Expert");
} else if (page > 50) {
  console.log("Pro Gamer");
}

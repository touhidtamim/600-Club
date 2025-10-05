//1
function greaterThanTen(num) {
  if (num > 10) {
    return true;
  } else {
    return false;
  }
}
console.log(greaterThanTen(20));

//2
function DividedbyThirteen(num) {
  if (num % 13 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(DividedbyThirteen(27));

//3
function foodBill(bill1, bill2, bill3) {
  totalBill = bill1 + bill2 + bill3;
  return totalBill;
}

let rice = 250;
let curry = 400;
let drinks = 150;
foodBill(rice, curry, drinks);

console.log(totalBill);

//4
function isEligible(age) {
  if (age >= 18) {
    console.log("Eligible for vote");
  } else {
    console.log("Ineligible for vote");
  }
}

isEligible(24);

//5
function lengthOfstr(str) {
  return str.length;
}
const myString = "I Love Programming";
const length = lengthOfstr(myString);
console.log(length);

//6
function getAverage(a, b, c) {
  const sum = a + b + c;
  const average = sum / 3;
  return average;
}

const result = getAverage(10, 20, 30);
console.log(result);

//7
function isPositive(num) {
  if (num < 0) {
    return num * -1;
  } else {
    return num;
  }
}

console.log(isPositive(-5));
console.log(isPositive(10));
console.log(isPositive(0));

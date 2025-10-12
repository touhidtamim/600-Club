//1
function checkArrLength(arr) {
  if (arr.length % 2 === 0) {
    console.log("array length is even");
  } else {
    console.log("array length is odd");
  }
}

let fruits = ["apple", "mango", "lichi", "banana"];
checkArrLength(fruits);

//2
function returnFirstLetter(name) {
  return name[0];
}

console.log(returnFirstLetter("Raju"));
console.log(returnFirstLetter("Tamim"));

//3
function checkBiggerThanTen(num) {
  if (num > 10) {
    console.log(num / 10);
  } else if (num < 10) {
    console.log(num * 10);
  }
}

checkBiggerThanTen(9);

//4
function sumFirstTwo(arr) {
  return arr[0] + arr[1];
}

const numbers = [10, 20, 30, 40, 50];
console.log(sumFirstTwo(numbers));

//5
function processNumber(n) {
  if (n > 0) {
    return n * 2;
  } else if (n < 0) {
    return n * 3;
  } else {
    return 0;
  }
}

console.log(processNumber(5));
console.log(processNumber(-4));
console.log(processNumber(0));

//6
function isFirstNameLonger(name1, name2) {
  if (name1.length > name2.length) {
    return true;
  } else {
    return false;
  }
}

console.log(isFirstNameLonger("Tamim", "Touhid"));
console.log(isFirstNameLonger("Programming", "Hero"));

//7
function multiplyAndCheck(num1, num2) {
  const product = num1 * num2;

  if (product > 100) {
    return product / 2;
  } else {
    return product;
  }
}

console.log(multiplyAndCheck(20, 10));
console.log(multiplyAndCheck(25, 10));

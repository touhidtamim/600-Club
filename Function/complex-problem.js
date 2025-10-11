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

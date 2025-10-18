//1
function sumOfOddNumbers(arr) {
  let sum = 0;

  for (let num of arr) {
    if (num % 2 !== 0) {
      sum += num;
    }
  }

  return sum;
}

const numbers = [5, 15, 8, 7];
console.log(sumOfOddNumbers(numbers));

//2

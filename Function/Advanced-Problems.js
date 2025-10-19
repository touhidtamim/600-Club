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
function returnSmallOne(arr) {
  const num1 = arr[0];
  const num2 = arr[1];

  if (num1 < num2) {
    return num1;
  } else {
    return num2;
  }
}

console.log(returnSmallOne([20, 45, 78]));

//3
function returnAge(age) {
  if (age < 18) {
    return 18;
  } else if (age > 45) {
    return 45;
  } else {
    return age;
  }
}

console.log(returnAge(50));

//4
function sumDivisibleByFour(arr) {
  let sum = 0;

  for (let num of arr) {
    if (num % 4 === 0) {
      sum += num;
    }
  }
  return sum;
}

console.log(sumDivisibleByFour([2, 4, 5, 7, 8, 32, 45]));

//5
function processNumber(num) {
  if (num < 20) {
    return num * 2;
  } else {
    return num / 20;
  }
}

console.log(processNumber(40));

//6
function sumOfNegatives(arr) {
  let sum = 0;

  for (let num of arr) {
    if (num < 0) {
      sum += num;
    }
  }
  return sum;
}

console.log(sumOfNegatives([2, -5, 7, -3, -8, 4]));

//7
function sumOfDivisibleBy3(arr) {
  let sum = 0;

  for (let num of arr) {
    if (num % 3 === 0) {
      sum += num;
    }
  }

  return sum;
}

console.log(sumOfDivisibleBy3([3, 4, 6, 7, 9, 10, 12]));

//1
function avgOfEven(arr) {
  let sum = 0;
  let count = 0;

  for (let num of arr) {
    if (num % 2 === 0) {
      sum += num;
      count++;
    }
  }

  return sum / count;
}

let nums = [1, 2, 3, 4, 5, 6, 7, 8];
let result = avgOfEven(nums);

console.log(result);

//2
function doubleOdd(arr) {
  let newArr = [];

  for (let num of arr) {
    if (num % 2 !== 0) {
      newArr.push(num * 2);
    }
  }

  return newArr;
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let Result = doubleOdd(numbers);

console.log(Result);

//3
function checkOdd(numbers) {
  for (let num of numbers) {
    if (num % 2 !== 0) {
      console.log("Odd numbers found");
      return;
    }
  }

  console.log("No odd numbers found");
}

checkOdd([2, 4, 6]);
checkOdd([2, 4, 5]);

//4
function avgOdd(arr) {
  let sum = 0;
  let count = 0;

  for (let Num of arr) {
    if (Num % 2 !== 0) {
      sum += Num;
      count++;
    }
  }

  let avg = sum / count;
  return avg.toFixed(2);
}

let Nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let oddAvgResult = avgOdd(Nums);

console.log(oddAvgResult);

//5
function minusOneFromOdd(arr) {
  let newArr = [];

  for (let num of arr) {
    if (num % 2 !== 0) {
      newArr.push(num - 1);
    }
  }

  return newArr;
}

let Numbers = [1, 2, 3, 4, 5, 7, 8];
let oddMinusResult = minusOneFromOdd(Numbers);

console.log(oddMinusResult);

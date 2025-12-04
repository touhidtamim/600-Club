//1
function avgOfEven(arr) {
  let sum = 0;
  let totalEven = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      sum = sum + arr[i];
      totalEven = totalEven + 1;
    }
  }

  let avg = sum / totalEven;
  return avg;
}

let nums = [1, 2, 3, 4, 5, 6, 7, 8];

let result = avgOfEven(nums);
console.log(result);

//2

function doubleOdd(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      let double = arr[i] * 2;
      newArr.push(double);
    }
  }

  return newArr;
}

let Numbers = [1, 2, 3, 4, 5, 6, 7, 8];

let Result = doubleOdd(Numbers);
console.log(Result);

//3
function problem3() {}
//4
function problem3() {}

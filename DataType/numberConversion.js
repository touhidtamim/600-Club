// 1
let intNumber = "20";
let total = parseInt(intNumber) + 10;
console.log(total);

// 2
let fractionNumber = 3.14159;
let fractionToInt = parseInt(fractionNumber);
console.log(fractionToInt);

// 3
let romeo = "premikBoy";
let newRomeo = parseInt(romeo);
console.log(newRomeo); //output: NAN

// 4
let number1 = 3.456;
let number2 = 2.789;

let totalNum = number1 + number2;
console.log(parseFloat(totalNum.toFixed(2))); //output : 6.25

// 5
let strNum1 = "56.78";
let convertedStr1 = parseInt(strNum1);
let strNum2 = "12.34";
let convertedStr2 = parseInt(strNum2);

let totalConvertedStr = (convertedStr1 = convertedStr2);
console.log(totalConvertedStr);

// 6
let number3 = 10.5678;
console.log(number3.toFixed(1));
let number4 = 5.4321;
console.log(number4.toFixed(1));

// 7
let number7 = 42.45689754;
console.log(number7.toFixed(3));

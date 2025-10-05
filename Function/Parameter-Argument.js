//1
function sumOfAge(age1, age2) {
  return age1 + age2;
}

let fathersAge = 60;
let sonsAge = 30;
result = sumOfAge(fathersAge, sonsAge);

console.log(result);

//2
function mult(num1, num2) {
  let gun = num1 * num2;
  console.log(gun);
}

mult(5, 7);

//3
function sumOfSubjects(sub1, sub2, sub3) {
  const motNumber = sub1 + sub2 + sub3;
  console.log(motNumber);
}

let physics = 194;
let chemistry = 196;
let math = 195;
sumOfSubjects(physics, chemistry, math);

//4
function findAge(birthYear) {
  let presentYear = 2025;
  const result = presentYear - birthYear;
  console.log(result);
}

findAge(2003);

//5
function lauyerSongkha(taka) {
  let priceOf1Lau = 35;
  result = taka / priceOf1Lau;
  console.log(result);
}

lauyerSongkha(350);

//6
function Average(num1, num2, num3, num4) {
  gor = (num1 + num2 + num3 + num4) / 4;
  console.log(gor);
}

Average(5, 8, 13, 40);

//7
function price(buyingPrice) {
  sellingPrice = buyingPrice + 250;
  console.log(sellingPrice);
}
price(2500);

//8
function century(birthYear) {
  let presentYear = 2025;
  let age = presentYear - birthYear;

  let baki = 100 - age;

  let centuryHobe = presentYear + baki;

  console.log("Centenary hobe", centuryHobe, "sal e");
}

century(2003);

//9
function wasteTime(dailyPhoneUsageTime) {
  let daysInMonth = 30;
  let monthlyWaste = dailyPhoneUsageTime * daysInMonth;
  console.log(`I am wasting ${monthlyWaste} hours per month on phone.`);
}

wasteTime(6);

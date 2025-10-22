//1
function taxPercentage(incomeAmount) {
  if (incomeAmount <= 50000) {
    return 10;
  } else if (incomeAmount <= 100000) {
    return 20;
  } else if (incomeAmount <= 200000) {
    return 30;
  } else {
    return 40;
  }
}

console.log(taxPercentage(40000));

//2
function deliveryChargePerKG(weight) {
  if (weight < 10) {
    return 100;
  } else if (weight < 20) {
    return 300;
  } else if (weight < 50) {
    return 1000;
  } else {
    return 1000 + (weight - 50) * 100;
  }
}

console.log(deliveryChargePerKG(100));

//3
function calculateGrade(marks) {
  if (marks >= 80) {
    return "A";
  } else if (marks >= 70) {
    return "B";
  } else if (marks >= 60) {
    return "C";
  } else if (marks >= 50) {
    return "D";
  } else {
    return "F";
  }
}

console.log(calculateGrade(85));

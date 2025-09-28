//1
for (i = 20; i <= 50; i++) {
  if (i % 7 === 0) {
    console.log(i);
  }
}

//2
for (i = 40; i <= 80; i++) {
  if (i % 5 && i % 7 === 0) {
    console.log(i);
  }
}

//3
let sum3 = 0;
for (i = 1; i <= 40; i++) {
  if (i % 13 === 0) {
    sum3 = sum3 + i;
  }
}
console.log(sum3);

//4
for (i = 1; i <= 50; i = i + 4) {
  console.log(i);
}

//5
for (i = 0; i <= 100; i++) {
  if (i % 6 && i % 9 === 0) {
    console.log(i);
  }
}

//6
let sum6 = 0;
for (i = 1; i <= 50; i++) {
  if (i % 3 && i % 4 === 0) {
    sum6 = sum6 + i;
  }
}
console.log(sum6);

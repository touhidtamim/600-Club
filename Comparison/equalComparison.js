//1
let myMoney = 50;
let friendsMoney = "50";

console.log(myMoney == friendsMoney); //output: true
console.log(myMoney === friendsMoney); //output: false

//2
let name1 = "JavaScript";
let name2 = "JavaScript";

console.log(name1 == name2);
console.log(name1 === name2); // both outputs: true , reason: both are strings

//3
let num = 25;
let str = "25";

console.log(num == str); //output: true ; reason: values are same
console.log(num === str); //output: false ; reason: values are same but data-types aren't same

//4
let fruit1 = "apple";
let fruit2 = "apple";

console.log(fruit1 == fruit2); //output: true ; reason: values are same
console.log(fruit1 === fruit2); //output: true ; reason: both values and data - types are same

//5
let str1 = "test";
let str2 = "TEST";

console.log(str1 == str2); //output: false
console.log(str1 === str2); //output: false

//6
let variableX = 15;
let variableY = "20";

console.log(variableX != variableY); //output: true
console.log(variableX !== variableY); //output: true

/*7 : got error , reason: string quotetion er majhe likhte hoy

 let variableA = hello;
let variableB = "hello";

console.log(variableA == variableB); 
console.log(variableA === variableB); */

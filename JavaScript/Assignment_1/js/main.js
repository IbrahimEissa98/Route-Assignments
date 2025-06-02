// ========================= Assignment 1 =========================
/*
// 1- Write a program that allow to user enter number then print it

var num = +window.prompt("Enter a number");
if(Number.isNaN(num)){
  console.log("This not a number");
}else{
  console.log("You entered: " + num);
}

*/
// -------------------------------------------
/*
// 2- Write a program that take number from user then print yes if that number 
//    can divide by 3 and 4 otherwise print no

// With if :
var num = +window.prompt("Enter a number");

if(Number.isNaN(num)){
  console.log("This not a number");
}else{
  if(num==''){
    console.log("No number entered");
  }
  else if(num % 3 == 0 && num % 4 == 0){
    console.log("Yes");
  }else{
    console.log("No");
  }
}

// With switch :
// var num = +window.prompt("Enter a number");

// if(Number.isNaN(num)){
//   console.log("This not a number");
// }else{
//   if(num==''){
//     console.log("No number entered");
//   }else{
//     switch (num % 3 == 0 && num % 4 == 0) {
//       case true:
//         console.log("Yes");
//         break;
//       case false:
//         console.log("No");
//         break;
//     }
//   }
// }
*/
// -------------------------------------------
/*
// 3- Write a program that allows the user to insert 2 integers then print the max

var num1 = +window.prompt("Enter first number");
var num2 = +window.prompt("Enter second number");

while(Number.isNaN(num1) || Number.isNaN(num2) || num1 == '' || num2 == ''){
  num1 = +window.prompt("Enter first number");
  num2 = +window.prompt("Enter second number");
}

// With if :
if(num1 > num2){
  console.log("max number : " + num1);
}else if(num2 > num1){
  console.log("max number : " + num2);
}else{
  console.log("Both equal");
}

// With switch without equal :
// switch(num1 > num2){
//   case true:
//     console.log("max number : " + num1);
//     break;
//   case false:
//     console.log("max number : " + num2);
//     break;
// }
*/
// -------------------------------------------
/*
// 4- Write a program that allows the user to insert an integer
//    then print negative if it is negative number otherwise print positive.

var num = +window.prompt(
  "Enter a number to check if it is negative or positive"
);

if (Number.isNaN(num)) {
  console.log("Invalid Number");
} else if (num > 0) {
  console.log("Positive Number");
} else if (num < 0) {
  console.log("Negative Number");
} else {
  console.log("Zero");
}
*/
// -------------------------------------------
/*
// 5- Write a program that take 3 integers from user then print
//    the max element and the min element.

var num1 = +window.prompt("Enter first number");
var num2 = +window.prompt("Enter second number");
var num3 = +window.prompt("Enter third number");

var max = num1 , min = num1;

if(num2 > max)
  max = num2;
if(num3 > max)
  max = num3;

if(num2 < min)
  min = num2;
if(num3 < min)
  min = num3;

console.log("Max element : " + max);
console.log("Min element : " + min);
*/
//-------------------------------------------
/*
// 6- Write a program that allows the user to insert integer number
//    then check If a number is oven or odd

var num = +window.prompt("Enter a number to check even or odd");

if(Number.isNaN(num) || num == '')
  console.log("Invalid Number!!");
else if(num % 2 == 0)
  console.log(num + " Is Even");
else
  console.log(num + " Is Odd");

*/
// -------------------------------------------
/*
// 7- Write a program that take character from user then if it
//    is vowel chars (a,e,I,o,u) then print vowel otherwise
//    print consonant

var char = window.prompt("Enter a char to check vowels");

if (String(+char) != "NaN" || char.length != 1) console.log("Invalid Char");
else if (
  char == "a" ||
  char == "e" ||
  char == "i" ||
  char == "o" ||
  char == "u"
) {
  console.log(char + " Is Vowel");
} else if (
  char == "A" ||
  char == "E" ||
  char == "I" ||
  char == "O" ||
  char == "U"
) {
  console.log(char + " Is Vowel");
} else {
  console.log(char + " Is Consonant");
}
*/
// -------------------------------------------
/*
// 8- Write a program that allows user to insert integer then
//    print all numbers between 1 to that’s number

var num = +window.prompt("Enter a number\nTo print all numbers between 1 to that’s number");
var box = '';

if(Number.isNaN(num) || num == '')
  console.log("Invalid Number!!");
else{
  for(var i = 1; i <= num; i++) {
    if(i != num)
      box += (i + ' , ');
    else
      box += i;
  }
}

console.log(box);
*/
// --------------------------------------------
/*
// 9- Write a program that allows user to insert integer then 
//     print a multiplication table up to 12.

var num = +window.prompt("Enter a number\nTo print a multiplication table up to 12");

if(Number.isNaN(num) || num == '')
  console.log("Invalid Number!!");
else{
  for(var i = 1; i <= 12; i++) {
    console.log(num + ' * ' + i + ' = ' + (num * i));
  }
}
*/
// ---------------------------------------------
/*
// 10- Write a program that allows to user to insert number then
//     print all even numbers between 1 to this number

var num = +window.prompt("Enter a number\nTo print all even numbers between 1 to this number");
var box = '';

if(Number.isNaN(num) || num == '')
  console.log("Invalid Number!!");
else{
  for(var i = 2; i <= num; i++) {
    if(i % 2 == 0){
      if(i != 2)
        box += (' , ' + i);
      else
        box += i;
    }
  }
}
console.log(box);
*/
// ----------------------------------------------
/*
// 11- Write a program that take two integers then print the power

var base = +window.prompt("Enter first number (Base)");
var power = +window.prompt("Enter second number (Power)");

console.log(base + ' ^ ' + power + ' = ' + (base ** power));

// --- OR ---
var calcSum = 1;
if(Number.isNaN(base) || Number.isNaN(power))
  console.log("Invalid Numbers!!");
else{
  for(var i = 1;i <= power;i++){
    calcSum *= base;
  }
  console.log(base + ' ^ ' + power + ' = ' + calcSum);
}
*/
// ----------------------------------------------
/*
// 12- Write a program to enter marks of five subjects
//     and calculate total, average and percentage.

var total = 0;

for (var i = 1; i <= 5; i++) {
  do {
    var mark = +window.prompt("Enter mark " + i);
  } while (mark > 100 || mark < 0 || String(mark) == "NaN");

  total += mark;
}

  console.log("Total = " + total);
  console.log("Average = " + total / 5);
  console.log("Percentage = " + (total / 500) * 100 + "%");

*/
// -----------------------------------------------
/*
// 13- Write a program to input month number and print number
//     of days in that month.

var month = +window.prompt("Enter month number");

if (month === 2) {
  console.log("month (2) = 28 or 29 days");
} else if (
  month === 1 ||
  month === 3 ||
  month === 5 ||
  month === 7 ||
  month === 8 ||
  month === 10 ||
  month === 12
) {
  console.log("month (" + month + ") = 31 days");
} else if (month === 4 || month === 6 || month === 9 || month === 11) {
  console.log("month (" + month + ") = 30 days");
} else {
  console.log("Invalid month number!!");
}
*/
//--------------------------------------------
/*
// 14- Write a program to input marks of five subjects Physics,
//     Chemistry, Biology, Mathematics and Computer ,
//     Find percentage and grade

var Physics = +window.prompt("Enter physics mark");
var chemistry = +window.prompt("Enter chemistry mark");
var biology = +window.prompt("Enter biology mark");
var mathematics = +window.prompt("Enter mathematics mark");
var computer = +window.prompt("Enter computer mark");

var total = Physics + chemistry + biology + mathematics + computer;
var percentage = (total / 500) * 100;

if (percentage >= 90 && percentage <= 100)
  console.log("Percentage = " + percentage + "\nGrade : A");
else if (percentage >= 80)
  console.log("Percentage = " + percentage + "\nGrade : B");
else if (percentage >= 70)
  console.log("Percentage = " + percentage + "\nGrade : C");
else if (percentage >= 60)
  console.log("Percentage = " + percentage + "\nGrade : D");
else if (percentage >= 40)
  console.log("Percentage = " + percentage + "\nGrade : E");
else if (percentage < 40 && percentage >= 0)
  console.log("Percentage = " + percentage + "\nGrade : F");
else console.log("Invalid entered marks!!");

*/

// ******************************** Using switch case*******************************
/*
// 15- Write a program to print total number of days in month

var month = +window.prompt("Enter month number");

// switch (month) {
//   case 1:
//     console.log("month (" + month + ") = 31 days");
//     break;
//   case 2:
//     console.log("month (2) = 28 or 29 days");
//     break;
//   case 3:
//     console.log("month (" + month + ") = 31 days");
//     break;
//   case 4:
//     console.log("month (" + month + ") = 30 days");
//     break;
//   case 5:
//     console.log("month (" + month + ") = 31 days");
//     break;
//   case 6:
//     console.log("month (" + month + ") = 30 days");
//     break;
//   case 7:
//     console.log("month (" + month + ") = 31 days");
//     break;
//   case 8:
//     console.log("month (" + month + ") = 31 days");
//     break;
//   case 9:
//     console.log("month (" + month + ") = 30 days");
//     break;
//   case 10:
//     console.log("month (" + month + ") = 31 days");
//     break;
//   case 11:
//     console.log("month (" + month + ") = 30 days");
//     break;
//   case 12:
//     console.log("month (" + month + ") = 31 days");
//     break;

//   default:
//     console.log("Invalid month number!!");
//     break;
// }

// --- OR ---
switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    console.log("month (" + month + ") = 31 days");
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    console.log("month (" + month + ") = 30 days");
    break;
  case 2:
    console.log("month (2) = 28 or 29 days");
    break;

  default:
    console.log("Invalid month number!!");
    break;
}
*/
//-------------------------------------------
/*
// 16- Write a program to check whether an alphabet is vowel or consonant
var alphabet = window.prompt(
  "Enter a character \nto check whether an alphabet is vowel or consonant"
);

switch (String(+alphabet) != "NaN" || alphabet.length != 1) {
  case true:
    console.log("Invalid Alphabet");
    break;
  case false:
    switch (alphabet) {
      case "a":
      case "A":
      case "e":
      case "E":
      case "i":
      case "I":
      case "o":
      case "O":
      case "u":
      case "U":
        console.log(alphabet + " is a vowel");
        break;
      default:
        console.log(alphabet + " is a consonant");
        break;
    }
    break;
}
*/
//-------------------------------------------
/*
// 17- Write a program to find maximum between two numbers
var num1 = +window.prompt(
  "Enter first number \nto find maximum between two numbers"
);
var num2 = +window.prompt(
  "Enter second number \nto find maximum between two numbers"
);

switch (Number.isNaN(num1) || Number.isNaN(num2)) {
  case true:
    console.log("Invalid Number");
    break;
  case false:
    switch (num1 > num2) {
      case true:
        console.log("Max is :" + num1);
        break;
      case false:
        console.log("Max is :" + num2);
        break;
    }
    break;
}
*/
//-------------------------------------------
/*
// 18- Write a program to check whether a number is even or odd
var num = +window.prompt(
  "Enter a number \nto check whether a number is even or odd"
);

switch (Number.isNaN(num)) {
  case true:
    console.log("Invalid Number");
    break;
  case false:
    switch (num % 2 == 0) {
      case true:
        console.log(num + " is Even");
        break;
      case false:
        console.log(num + " is Odd");
    }
    break;
}
*/
//-------------------------------------------
/*
// 19- Write a program to check whether a number is positive or negative or zero
var num = +window.prompt(
  "Enter a number \nto check whether a number is positive or negative or zero"
);

switch (Number.isNaN(num)) {
  case true:
    console.log("Invalid Number");
    break;
  case false:
    switch (num >= 0) {
      case true:
        switch (num > 0) {
          case true:
            console.log(num + " is Positive");
            break;
          case false:
            console.log("Zero");
        }
        break;
      case false:
        console.log(num + " is Negative");
        break;
    }
    break;
}
*/
//-------------------------------------------
/*
// 20- Write a program to create Simple Calculator
var num1 = +window.prompt("Enter First Number");
var op = window.prompt("Enter an Operator (+ , - , * , / , % , **)");
var num2 = +window.prompt("Enter Second Number");

switch (Number.isNaN(num1) || Number.isNaN(num2)) {
  case true:
    console.log("Invalid Number");
    break;
  case false:
    switch (op) {
      case "+":
        console.log(num1 + " + " + num2 + " = " + (num1 + num2));
        break;
      case "-":
        console.log(num1 + " - " + num2 + " = " + (num1 - num2));
        break;
      case "*":
        console.log(num1 + " * " + num2 + " = " + num1 * num2);
        break;
      case "/":
        switch (num2 != 0) {
          case true:
            console.log(num1 + " / " + num2 + " = " + num1 / num2);
            break;
          case false:
            console.log("Cannot Divide by Zero");
            break;
        }
        break;
      case "%":
        console.log(num1 + " % " + num2 + " = " + (num1 % num2));
        break;
      case "**":
        console.log(num1 + " ** " + num2 + " = " + num1 ** num2);
        break;
      default:
        console.log("Invalid Operator");
        break;
    }
}
*/
//-------------------------------------------

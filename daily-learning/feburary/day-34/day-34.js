//Class Work
/*
Question 1: Write a program that checks if a number is even or odd.
Hint: Use the modulus operator %
*/
//Solution.
const num = 15;

if (num%2 === 0) {
    console.log('The number' + num + 'is an even number');
} else {
    console.log('The number' + num + 'is an odd number');
}


/*Question 2: Create a program that takes a user's score and returns:
"Excellent" for 90+
"Good" for 70-89
"Average" for 50-69
"Fail" for below 50
*/
//Solution.
const score = parseInt(prompt('Type in your score'));

if (score >= 90) {
    console.log('Excellent');
} else if (score >= 70) {
    console.log('Good');
} else if (score >= 50) {
    console.log('Average');
} else {
    console.log('Fail');
}


//Question 3: Modify the following code to use a switch statement:
//Solution
const fruit = "apple";

switch (fruit) {
    case 'apple':
    console.log("Apples are red.");
    break;
    case "banana":
    console.log("Bananas are yellow.");
    break;
    case "grape":
    console.log("Grapes are purple.");
    break;
    default:
    console.log("Unknown fruit color.");
}


//Take-Home Assignment

/*1.Write a program that:
Takes the current hour (0-24).
If the time is between 6-12, print "Good morning!"
If it's between 12-18, print "Good afternoon!"
If it's between 18-24, print "Good evening!"
Otherwise, print "It's nighttime!"
*/
//Solution.
const hour = 24;

if (hour >= 6 && hour < 12) {
    console.log("Good morning!");
} else if (hour >= 12 && hour < 18) {
    console.log("Good afternoon!");
} else if (hour >= 18 && hour <= 24) {
    console.log("Good evening!");
} else {
    console.log("It's nighttime!");
}


//2.Write a JavaScript function that checks if a given number is positive, negative, or zero using if...else.
  const figure = -1;
  if (figure > 0) {
    console.log(`${figure} is a positive number`);
  } else if (figure < 0) {
    console.log(`${figure} is a negative number`);
} else {
    console.log(`${figure} is absolute zero`);
}

//END.
/*
Lesson: JavaScript Conditional Statements Introduction


Conditional statements allow JavaScript to make decisions based on conditions. They enable a program to execute different blocks of code depending on whether a condition is true or false.
JavaScript provides several types of conditional statements:

1.if statement
2.if...else statement
3.if...else if...else statement
4.switch statement
5.Ternary operator (? :)
6.Logical Operators (&&, ||, !)


1. The if Statement
The if statement executes a block of code only if the given condition evaluates to true.

Syntax
if (condition) {
    // Code to execute if the condition is true
}

Example
const age = 18;

if (age >= 18) {
    console.log("You are eligible to vote.");
}

Explanation: Since age is 18, which meets the condition (age >= 18), the message will be displayed.


2. The if...else Statement
The if...else statement allows an alternative block of code to run if the condition is false.

Syntax
if (condition) {
    // Code if condition is true
} else {
    // Code if condition is false
}

Example
const temperature = 30;

if (temperature > 25) {
    console.log("It's a hot day.");
} else {
    console.log("It's not too hot.");
}

Explanation: If temperature is greater than 25, it prints "It's a hot day." Otherwise, it prints "It's not too hot."


3. The if...else if...else Statement
This is used when there are multiple conditions to check.

Syntax
if (condition1) {
    // Code if condition1 is true
} else if (condition2) {
    // Code if condition2 is true
} else {
    // Code if none of the conditions are true
}

Example
const score = 75;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 75) {
    console.log("Grade: B");
} else if (score >= 50) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}

Explanation:
If score is 90 or more, it prints "Grade: A".
If score is between 75-89, it prints "Grade: B".
If score is between 50-74, it prints "Grade: C".
Otherwise, it prints "Grade: F".


4. The switch Statement
The switch statement is used to check multiple possible values of a single variable.

Syntax
switch(expression) {
    case value1:
        // Code to execute if expression === value1
        break;
    case value2:
        // Code to execute if expression === value2
        break;
    default:
        // Code to execute if none of the cases match
}

Example
const day = "Monday";

switch (day) {
    case "Monday":
        console.log("Start of the work week.");
        break;
    case "Friday":
        console.log("Weekend is near!");
        break;
    case "Saturday":
    case "Sunday":
        console.log("It's the weekend!");
        break;
    default:
        console.log("It's a regular day.");
}

Explanation:
If day is "Monday", it prints "Start of the work week."
If day is "Friday", it prints "Weekend is near!"
If day is "Saturday" or "Sunday", it prints "It's the weekend!"
Otherwise, it prints "It's a regular day."



5. The Ternary Operator (? :)
The ternary operator is a shorthand for if...else.

Syntax
condition ? expressionIfTrue : expressionIfFalse;

Example
const age = 20;
const canVote = (age >= 18) ? "Yes, you can vote." : "No, you cannot vote.";
console.log(canVote);

Explanation: If age is 18 or more, canVote is "Yes, you can vote." Otherwise, it's "No, you cannot vote.".


6. Logical Operators in Conditions
Logical operators allow us to combine multiple conditions.

Common Logical Operators:
1.&& (AND) - Both conditions must be true.
2.|| (OR) - At least one condition must be true.
3.! (NOT) - Reverses a condition.

Example with && (AND)
const age = 22;
const hasID = true;

if (age >= 18 && hasID) {
    console.log("You are allowed to enter.");
} else {
    console.log("Entry denied.");
}

Explanation: If age is 18+ AND hasID is true, access is granted.

Example with || (OR)
const username = "admin";
const password = "12345";

if (username === "admin" || username === "superuser") {
    console.log("Access granted.");
} else {
    console.log("Access denied.");
}

Explanation: If username is "admin" OR "superuser", access is granted.

Example with ! (NOT)
const isLoggedIn = false;

if (!isLoggedIn) {
    console.log("Please log in first.");
}

Explanation: Since isLoggedIn is false, !isLoggedIn becomes true, and the message is displayed.

Class Work
Question 1: Write a program that checks if a number is even or odd.
Hint: Use the modulus operator %

Question 2: Create a program that takes a user's score and returns:
"Excellent" for 90+
"Good" for 70-89
"Average" for 50-69
"Fail" for below 50

Question 3: Modify the following code to use a switch statement:
const fruit = "apple";

if (fruit === "apple") {
    console.log("Apples are red.");
} else if (fruit === "banana") {
    console.log("Bananas are yellow.");
} else if (fruit === "grape") {
    console.log("Grapes are purple.");
} else {
    console.log("Unknown fruit color.");
}



Take-Home Assignment
1.Write a program that:
Takes the current hour (0-24).
If the time is between 6-12, print "Good morning!"
If it's between 12-18, print "Good afternoon!"
If it's between 18-24, print "Good evening!"
Otherwise, print "It's nighttime!"
2.Write a JavaScript function that checks if a given number is positive, negative, or zero using if...else.


Conclusion
Conditional statements allow JavaScript to make decisions dynamically. Understanding if, switch, ternary operators, and logical operators is crucial for writing efficient and dynamic programs. Keep practicing with real-life examples to master this concept! 🚀
*/
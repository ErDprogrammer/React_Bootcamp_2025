// Class Work
// Task 1: Identifying Errors
// What type of error will each of the following produce?
// 1.	console.log(undefinedVariable);----- Reference Error
// 2.	"Hello".pop();------ Type Error
// 3.	const obj = {}; console.log(obj.name.age);----Type Error
// 4.	new Array(-1);---- Range error
// 5.	eval("console.log(Hello)");----reference error

// Task 2: Implementing Try-Catch
// Write a program that:
// •	Asks the user to enter a number.
// •	Throws an error if the input is not a valid number.
// •	Catches the error and displays an appropriate message.

try {
    let userInput = prompt("Enter a number:");
    let number = Number(userInput);
    if (isNaN(number)) {
        throw new Error("Invalid number entered.");
    }
    console.log("You entered a valid number:", number);
} catch (error) {
    console.error("Error:", error.message);
}
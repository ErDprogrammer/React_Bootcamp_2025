 
/*  TASK
1. create 3 varaiable and  assign floating numbers to each , convert the result to a whole number, create and array and assign the result to it.
2. create a variable and assign the value to a random whole number between 1 and 6.
*/

//Solutions.
//1. 
const float1 = 5.695;
const float2 = 3.750;
const float3 = 0.345;

const floatArray = [Math.round(float1), Math.round(float2), Math.round(float3)];

console.log(floatArray);


//2.
const randomNumber = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber);
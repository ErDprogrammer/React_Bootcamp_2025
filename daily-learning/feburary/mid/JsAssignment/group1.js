//Explain the difference between let, const and var with examples.

const letVarConst = `
 var: This is function-scoped, meaning it’s available throughout the function where it's declared. You can re-declare and update it anytime. However, it’s hoisted with a default value of undefined, which can lead to unexpected issues.

let: This is block-scoped, meaning it only exists inside the {} block where it’s defined. You can update it, but you can’t re-declare it in the same scope. Unlike var, it’s hoisted but remains uninitialized, so using it before declaring it will cause an error.

const: Just like let, it’s block-scoped. However, it cannot be reassigned or re-declared once assigned. It must be initialized at the time of declaration. If you try to access it before declaration, you’ll get an error.
`;

// what are primitive data types in javascript ? list them with examples

const premitiveDataTypes = `

   These are the basic building blocks of data in JavaScript. They cannot be changed once created.

1. Number – Any kind of number (integer or decimal). 
   example: let number = 34.566;

2. String – A sequence of characters enclosed in quotes.
   example: let greeting = 'Hello';

3. Boolean – A value that’s either true or false  
   let isRaining = false;

4. Undefined – A variable that has been declared but hasn’t been assigned a value.  
    let name;
    console.log(name)
  

5.Null – A value that represents “nothing” (set intentionally).
   let nothing = null;



6. BigInt – Used for very large numbers beyond the normal Number limit.  
   let bigNumber = 12345670n;
`;

//Explain the difference between .map() and .forEach() methods.

const mapAndForEach = `

   Difference Between .map() and .forEach()
Both .map() and .forEach() are used to loop through arrays, but:

.map() creates and returns a new array with transformed values.
.forEach() just runs a function on each element but does not return a new array.

`;


//Coding Questions:

//1.	Create an array of 10 fruits. Use .map() to return an array of their lengths.

const fruits = [`Apple`, `Banana`, `Cherry`, `Mango`, `Pineapple`, `Grapes`, `Strawberry`, `Blueberry`, `Orange`, `Watermelon`];

const fruitLengths = fruits.map((fruit)=> {return fruit.length});

console.log(fruitLengths);

//2.	Use a for...of loop to print all numbers from 1 to 20.

const numbers = [];

for (let i = 1; i <= 20; i++){
    numbers.push(i);
}

// console.log(numbers);

for (num of numbers){
    console.log(num);
}


//3.	Create an array of numbers and use .filter() to return only the even numbers.
const returnArr = [];

const evenNumbers = numbers.forEach((even)=>{
    if(even % 2 === 0){
        returnArr.push(even);
    }
});

console.log(returnArr);
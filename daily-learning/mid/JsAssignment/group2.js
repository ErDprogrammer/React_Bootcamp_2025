// 1.	What is the this keyword in JavaScript? Explain with an example.

// answer :The this keyword refers to the context where a piece of code, such as a function's body, is supposed to run.

 function fund(amount){
    this.amount = amount;
    console.log(this.amount);
    
 }
 fund(4500);



//  2.	Differentiate between dot notation and bracket notation for accessing object properties.
//  answer 
//  the difference  between dot notation and bracket notation is that bracket notation allows dynamic property access using variables. If you store a property name in a variable like `let key = "name"`, you cannot use `person.key` (JavaScript will look for a property literally named "key"), but `person[key]` will correctly retrieve the value of `person.name`.

 
// 3.	What is an object method? Provide an example
// An object method is a function that is stored as a property within an object. It allows an object to perform actions related to its data. 
 
const user = {
   name: "richard",
   favouriteAmine: 'one piece/naruto',
   greet: function() {
       console.log(`Hello, my name is ${this.name} and I love the ${this.favouriteAmine} animes.`);
   }
};

user.greet();  


// Coding Questions:
// 1.	Create an object person with properties: name, age, gender, and a method greet() that logs a greeting using template strings.

const person = {
   name: "Luffy",
   age: 19,
   gender: "Male",
   intro() {
       console.log(`mushi mush! I'm ${this.name}, the future King of the Pirates! I'm ${this.age} years old! gumu gumu gattling`);
   }
};

// Calling the method
person.intro();

// 2.	Create an object car with properties: brand, model, year. Add a method getCarInfo() that returns "This car is a [year] [brand] [model]".

const car = {
   brand: "Volkswagen",
   model: "Volkswagen Beetle Ijapa (Tortoise car)",
   year: 1975,
   getCarInfo() {
       return `This car is a ${this.year} ${this.brand} ${this.model}.`;
   }
};

 
console.log(car.getCarInfo());

// 3.	Add a new property color to the car object using bracket notation.
const car2 = {
   brand: "Volkswagen",
   model: "Volkswagen Beetle Ijapa (Tortoise car)",
   year: 1975,
   getCarInfo() {
       return `This car is a ${this.year} ${this.brand} ${this.model}.`;
   }
};

car2["color"] = "Black";

console.log(car2); 

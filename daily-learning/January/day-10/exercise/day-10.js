const products = ["shoes", "bags", "watches", "hats"];

products.push("gloves", "scarves");

products.shift();

products.sort();

const watchesIndex = products.indexOf("watches");

const filteredProducts = products.filter(product => !product.startsWith("s"));

console.log("Products after adding new items:", products);
console.log("Index of 'watches':", watchesIndex);
console.log("Filtered Products:", filteredProducts);

const student = {
    name: "John Doe",
    age: 20,
    subjects: ["Math", "English", "Science"]
  };
  
  student.grade = "A+";
  
  delete student.age;
  
  const studentKeys = Object.keys(student);
  
  const studentValues = Object.values(student);
  
  console.log("Student Object Keys:", studentKeys);
  console.log("Student Object Values:", studentValues);
  
  for (const key in student) {
    console.log(`${key}: ${student[key]}`);
  }
  
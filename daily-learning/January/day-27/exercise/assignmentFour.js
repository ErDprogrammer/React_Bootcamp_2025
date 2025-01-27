const personalInfo = { name: "Adunni", age: 27 };
const location = { country: "Nigeria", city: "Ibadan" };
const profession = { job: "Architect", experience: "5 years" };
const lifestyle = { hobbies: ["Sketching", "Photography"], favoriteFood: "Jollof Rice" };
const preferences = { lovesTraveling: true, favoriteColor: "Blue" };

const merge = { ...personalInfo, ...location, ...profession, ...lifestyle, ...preferences };

console.log(merge);

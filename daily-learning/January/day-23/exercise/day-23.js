import person from './dataOne.js'; 
for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}
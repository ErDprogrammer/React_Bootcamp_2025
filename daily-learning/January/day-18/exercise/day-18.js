const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => b !== 0 ? a / b : "Error";
const square = (a) => a * a;
const squareRoot = (a) => Math.sqrt(a);
const power = (a, b) => Math.pow(a, b);
const isEven = (num) => num % 2 === 0;
const isOdd = (num) => num % 2 !== 0;
const min = (a, b) => a < b ? a : b;
const max = (a, b) => a > b ? a : b;
const concatenate = (str1, str2) => str1 + str2;
const reverseString = (str) => str.split('').reverse().join('');
const toUpperCase = (str) => str.toUpperCase();
const toLowerCase = (str) => str.toLowerCase();
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
const greet = (name) => `Hello, ${name}!`;
const double = (num) => num * 2;
const triple = (num) => num * 3;
const divideByTwo = (num) => num / 2;
const isAdult = (age) => age >= 18 ? "Adult" : "Not Adult";
const isMinor = (age) => age < 18 ? "Minor" : "Not Minor";
const calculateArea = (length, width) => length * width;
const calculatePerimeter = (length, width) => 2 * (length + width);
const calculateCircleArea = (radius) => Math.PI * Math.pow(radius, 2);
const calculateCircleCircumference = (radius) => 2 * Math.PI * radius;
const calculateBMI = (weight, height) => weight / Math.pow(height, 2);
const createObject = (key, value) => ({ [key]: value });
const extractFirstLetter = (str) => str.charAt(0);
const sumArray = (arr) => arr.reduce((acc, curr) => acc + curr, 0);
const productArray = (arr) => arr.reduce((acc, curr) => acc * curr, 1);
const findMaxInArray = (arr) => Math.max(...arr);
const findMinInArray = (arr) => Math.min(...arr);
const findAverage = (arr) => sumArray(arr) / arr.length;
const filterEvenNumbers = (arr) => arr.filter(num => num % 2 === 0);
const filterOddNumbers = (arr) => arr.filter(num => num % 2 !== 0);
const checkStringLength = (str) => str.length;
const joinArray = (arr, separator) => arr.join(separator);
const convertToDate = (timestamp) => new Date(timestamp);
const formatDate = (date) => `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
const roundToNearestInteger = (num) => Math.round(num);
const calculatePercentage = (total, part) => (part / total) * 100;
const getDayOfWeek = (date) => date.toLocaleString('en-us', { weekday: 'long' });
const addDaysToDate = (date, days) => new Date(date.setDate(date.getDate() + days));
const subtractDaysFromDate = (date, days) => new Date(date.setDate(date.getDate() - days));
const containsSubstring = (str, substring) => str.includes(substring);
const replaceSubstring = (str, oldSubstring, newSubstring) => str.replace(oldSubstring, newSubstring);
const getUniqueItems = (arr) => [...new Set(arr)];
const mergeArrays = (arr1, arr2) => [...arr1, ...arr2];
const findItemInArray = (arr, item) => arr.includes(item);
const doubleEvenNumbers = (arr) => arr.filter(num => num % 2 === 0).map(num => num * 2);
const sortArray = (arr) => arr.sort((a, b) => a - b);
const sortArrayDescending = (arr) => arr.sort((a, b) => b - a);
const multiplyArrayItems = (arr) => arr.map(num => num * 2);
const arrayToString = (arr) => arr.join(', ');

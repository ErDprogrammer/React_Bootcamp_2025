function multiply(a, b) {
    return a * b;
}

const student = {
    name: "Chinonso Okafor",
    age: 24,
    getInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
};

const multiplyArrow = (a, b) => a * b;

const divide = (a, b) => a / b;

function processNumber(num, callback) {
    return callback(num);
}

function runTask(taskName, callback) {
    callback(`Running task: ${taskName}`);
}

console.log(multiply(6, 7));
student.getInfo();
console.log(multiplyArrow(3, 4));
console.log(divide(20, 4));
console.log(processNumber(10, (num) => num * 2));
runTask("Data Collection", console.log);

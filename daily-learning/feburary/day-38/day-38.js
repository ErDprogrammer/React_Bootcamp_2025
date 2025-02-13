// const strings = "hey i ama string!";
// for(string of strings){
//     console.log(string);
    
// }
// writer a javascript program that prints numbers from 1 to 50
// hovever: 
        // For multiples of 3 , print 'Fizz'
        // For multiples of 5 , print 'Buzz'
        // For multiples of 3 and 5, print 'FizzBuzz'
        for(let num = 1; num <= 50; num++ ){
        // console.log(num);
        if ((num % 3) === 0) {
            console.log('Fizz');
        }else if ((num % 5) === 0) {
                console.log('Buzz');
            
        }else  if ((num % 5) && (num % 3) === 0) {
                console.log('FizzBuzz');
            }
        }
        
// write a javascript program that finds the sum of numbers from 1 to 100 using a for loop


let totalSum = 0;

for (i = 0; i <= 100; i++){
    totalSum += i;
    // console.log(totalSum)
}

console.log(totalSum);
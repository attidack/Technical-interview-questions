/* The criteria for FizzBuzz is to print the numbers 1 to 100. 
However, you print "Fizz" for every multiple of 3,
"Buzz" for every multiple of 5,
and "FizzBuzz" for every multiple of 3 and 5. 

Run :node fizzBuzz.js

*/

const forLoop = () => {
    for (let num = 0; num < 100; num++) {
        if (num % 3 === 0 && !(num % 5 === 0)) {
             console.log('Fizz')
        }else if (num % 5 === 0 && !(num % 3 === 0)) {
             console.log('Buzz')
        }else if (num % 5 === 0 && num % 3 === 0) {
            console.log('Fizz Buzz')
        }else {
             console.log(num)
    
        };
    }};
    forLoop()
const forLoop = () => {
    for (let num = 0; num < 100; num++) {
        if (num % 3 === 0 && !(num % 5 === 0)) {
             console.log('fizz')
        }else if (num % 5 === 0 && !(num % 3 === 0)) {
             console.log('Bizz')
        }else if (num % 5 === 0 && num % 3 === 0) {
            console.log('fizz Bizz')
        }else {
             console.log(num)
    
        };
    }};
    forLoop()
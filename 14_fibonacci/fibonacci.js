const fibonacci = function(n) {

    let num;
    
    if(typeof n!==  "number")
    {
        num= parseInt(n);
    }
    else{
        num=n;
    }

    if(num<0) return "OOPS";

    // METHOD 1: Using direct formula
    //...............................

    const phi = (1 + Math.sqrt(5)) / 2;
    return Math.round((Math.pow(phi, num) - Math.pow(1 - phi, num)) / Math.sqrt(5));


    // METHOD 2: Using an array, [0,1]
    //................................

    // let fib=[0,1];
    // for (let i=2; i<=num; i++){
    // fib[i]=fib[i-1]+fib[i-2];
    // }

    // return fib[num];

    // METHOD 3: Storing the two previous number
    //..........................................

    // if(num<2) return num;

    // let prev1=1;
    // let prev2=0;
    // let current;

    // for (let i=2; i<=num; i++)
    // {
    //     current=prev1+prev2;
    //     prev2=prev1;
    //     prev1=current;
    // }
    
    // return current;

    // METHOD 4: Recursion (NOT Recommended. Grows exponentially. Might freeze for large values)
    //..........................................................................................

    // if(num<2) return num;
    // return fibonacci(num-1)+fibonacci(num-2);

 
};

// Do not edit below this line
module.exports = fibonacci;

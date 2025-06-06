const add = function(num1, num2) {
  
  return num1+num2;
	
};

const subtract = function(num1, num2) {

  return num1-num2;
	
};

const sum = function(arr) {

  return arr.reduce((sum, item) => sum+item, 0);
	
};

const multiply = function(arr) {

  return arr.reduce((mul, item) => mul*item, 1)

};

const power = function(a,b) {

  return a**b;
	
};

const factorial = function(num) {

  let result=1; 
  
  if(num==0) return result;
  else if(num==1) return result;
  else{
   
    for (let i=2; i<=num; i++){
      result*=i; 
    }
   
  }

  return result;
	
};
 
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

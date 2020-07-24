let firstNumber = +prompt('Enter the first integer number,pls');

while (!Number.isInteger(firstNumber) || isNaN(firstNumber) || firstNumber == "") {
    firstNumber = +prompt('Enter the first INTEGER NUMBER,pls');
}
                                  
let secondNumber = +prompt('Enter the srcond integer number,pls');

while(!Number.isInteger(secondNumber) || isNaN(secondNumber) || secondNumber == "" || firstNumber > secondNumber){
  secondNumber = +prompt('Enter the second INTEGER NUMBER,pls');
  } 
  

let question = confirm('Skip even numbers? ( "Cancel" - no; "Ok" - yes)')
let sumOfNumbers = 0;

if(question){
    for(let i = firstNumber; i <= secondNumber; i++){
        if(i % 2 !== 0){
            sumOfNumbers += i;
        }
    }

}
else{
    for(let i = firstNumber; i <= secondNumber; i++){
        sumOfNumbers += i;
    }
}
console.log("The first number is  " + firstNumber);
console.log("The second number is " + secondNumber);
console.log(" Sum of numbers is " + sumOfNumbers);

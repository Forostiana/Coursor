let firstNumber = +prompt('Enter the first integer number,pls');

while (isNaN(firstNumber)){
   firstNumber = +prompt('Enter thr first INTEGER NUMBER,pls');
  } if(firstNumber === ''){
   firstNumber = +prompt('Enter thr first INTEGER NUMBER,pls');
  } ;

                                  
let secondNumber = +prompt('Enter the srcond integer number,pls');

while (isNaN(secondNumber)){
   firstNumber = +prompt('Enter the second INTEGER NUMBER,pls');
  }if(secondNumber === ''){
   firstNumber = +prompt('Enter the second INTEGER NUMBER,pls');
  } ;


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

console.log(sumOfNumbers);
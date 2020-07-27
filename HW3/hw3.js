//2
function power(number, index) {
    let result = 1;
    for (let i = 0; i < index; i++) {
      result *= number;
    }
    return `Number ${number} in the power ${index} equally -  ${result}`;
  }
  
  //3
  console.log(power(4, 8));
  function changeName(name) {
    return name[0].toUpperCase() + name.slice(1).toLowerCase();
    
  }
  console.log(changeName("iNNa"));
  
  
  //4
  function taxFromSalary(salary){
    let tax = salary * 0.195;
    let yourSalary = salary - tax;
    return `Your Salary is ${yourSalary} $`;
    
  }
  console.log(taxFromSalary(1000));
  
  
  //5
  function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return `Rundom number is  ${(Math.floor(Math.random() * (max - min + 1)) + min)}`;
  }
  console.log(getRandomNumber(1, 100));
  
  
   //6
  
  function countLetter(word, letter) {
    let arrWord = word.split("");
    let counter = 0;
    for (let i = 0; i <= arrWord.length; i++) {
      if (arrWord[i] === letter) {
        counter++;
      }
    }
    
    return `The letter ${letter} in the word ${word} = ${counter}`;
  }
  console.log(countLetter("Coursor", "o"));
  
  
   //8
  function getRandomPassword(numbers = 8) {
      let max = 1
      for (let i = 1; i <= numbers; i++){
         max *= 10
          
      }
  
      return `${getRandomNumber(1, max)}`
  }
  
  console.log(getRandomPassword());
  
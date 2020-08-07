const numbers = [13, 1, 68, 97, 88, 70, 16, 79, 48, 81, 59, 16, 63, 35, 34]



//1
const getRandomArray = (length, min, max) =>{
  const randomArray =[];
  for (let i =0; i < length; i++){
    randomArray[i] = Math.round((max - min) * Math.random() + min);
  }
  return randomArray;
}

console.log(getRandomArray(15, 1, 100));



//3


const getAverage = (numbers) =>{
  const total = numbers.reduce((total, number) =>{
    return total + number;
  }, 0);
  return total/numbers.length;
}
console.log(getAverage(numbers));

//5

const filterEvenNumbers = (...numbers) => numbers.filter((number) => number % 2 !== 0);

console.log(filterEvenNumbers(...numbers));


//6

const countPositiveNumbers = (...numbers) => numbers.filter((number) => number > 0).length;

console.log(countPositiveNumbers(1, -2, 3, -4, -5, 6));

//7

const getDividedByFive = (...numbers) => numbers.filter((number) => number % 5 === 0);

console.log(getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

//9

const generateCombinations = (word, value) => {
    const anyWord = word.toLowerCase().replace(/\s+/g, '');
    const result = [];
     for(let i = 0; i < anyWord.length; i+=value) {
     const arr = [anyWord.slice(i, i + value)];
     result.push(arr)
     }
     return result
    }
     
     
     console.log(generateCombinations('Commander',3));

     

   document.writeln(`<p><b>Функція, яка повертає масив випадкових цілих чисел :</b>${getRandomArray(15, 1, 100)} </p>`);
   document.writeln(`<p><b>Функція, яка рахує середнє арифметичне всіх переданих в неї аргументів :</b> ${getAverage(numbers)} </p>`);
   document.writeln(`<p><b>Функція, яка фільтрує парні числа передані як аргументи функції :</b> ${filterEvenNumbers(...numbers)} </p>`);
   document.writeln(`<p><b>Функція, яка порахує кількість чисел більших 0 :</b> ${countPositiveNumbers(1, -2, 3, -4, -5, 6)} </p>`);
   document.writeln(`<p><b>Функція, яка відфільтрує усі елементи в масиві та залишить тільки ті, які діляться на ціло на 5 :</b> ${getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)} </p>`);
   document.writeln(`<p><b>Функція, яка розбиває кожне слово на умовні склади по 3 букви :</b> ${generateCombinations('Commander',3 )} </p>`);
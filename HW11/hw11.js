
const delay = 50;

function getRandomChines(length) {
    return new Promise((resolve) => {
      let sing = Date.now().toString().slice(-5);
      let randomChines = [];
      for(let i = 0; i < length; i++) {
        sing += i;
        randomChines.push(String.fromCharCode(sing));
      }
      setTimeout(() => resolve(randomChines.join("")), length * delay)
    })
  }
  const button =  document.querySelector(".button");
  button.addEventListener('click', () =>{
    getRandomChines(4).then((ch) =>{
      document.querySelector(".randomChines").innerHTML = ch;
    })
  })
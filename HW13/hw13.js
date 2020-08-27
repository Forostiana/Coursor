function* createIdGenerator(){
    let count = 0;
    while(true){
        yield(` ID: ${count}`)
        count +=1;
    }

}
   
  
  const idGenerator = createIdGenerator();
  
  console.log(idGenerator.next().value);

//Advanced

function* newFontGenerator(n=14) {
    for (let i = 0; i < n; n+=2) {
   yield (`Up: ${n}`)  
 } 
}
  const fontGenerator = newFontGenerator(14);


  function* downFontGenerator(n=18) { 
    for (let i = 0; i < n; n-=2) {
      yield (`Down: ${n}`)  
     }
  }
  const fontGenerator2 = downFontGenerator(18);
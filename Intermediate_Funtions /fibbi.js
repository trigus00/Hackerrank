function sumFibs(num) {
    let current = 1; 
    let previous = 0;
    let result = 0; 
    while(current<= num){
      if(current %2 !== 0 ){
        result += current
      }
        current += previous;
        previous = current- previous 
    } 
    console.log (result)
  }
  
  sumFibs(1);
  sumFibs(4);
  sumFibs(1000);
  sumFibs(75024);
  sumFibs(75025)
  sumFibs(4000000);
  
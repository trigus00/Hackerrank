function sumAll(arr) {
    let sum = 0; 
    let [min,max] = arr.sort((a,b)=> a-b)
    for(let i = min ; i<=max;i++){
      sum += i;
    }
    console.log (sum)
  }
  sumAll([1,4]);
function smallestCommons(arr) {
    let [min,max] = arr.sort((a,b)=> a-b)
    let range = Array(max-min + 1)
    .fill(0)
    .map((_,i)=> i+min)
    // get the upper limit 
    let upperBound = range.reduce((product,current)=> product*current)
   
    for(let multiple = max; multiple <=upperBound; multiple+=max ){
      let divisible = range.every((value) => multiple%value === 0 )
      
      if(divisible){
        console.log(multiple)
        return multiple
      }
    
    }
    
  }
  
  smallestCommons([1, 5]);
  smallestCommons([5, 1]);
  smallestCommons([2, 10]);
  smallestCommons([1, 13]);
  smallestCommons([23, 18])
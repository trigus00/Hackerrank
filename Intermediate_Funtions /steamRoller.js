function steamrollArray(arr) {
    const flatArray = [];
    for(let i = 0; i< arr.length;i++){
      if(Array.isArray(arr[i])){
        flatArray.push(...steamrollArray(arr[i]))
        
      }else{
        flatArray.push(arr[i])
        
      }
    }
    console.log(flatArray)
    return flatArray
  }
  
  steamrollArray([1, [2], [3, [[4]]]]);
  steamrollArray([[["a"]], [["b"]]]);
  steamrollArray([1, {}, [3, [[4]]]]);
  
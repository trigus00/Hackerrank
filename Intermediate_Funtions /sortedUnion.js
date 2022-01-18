function uniteUnique(arr) {
    let array = [...arguments]
    let fArr = []
   
    for (let i = 0; i < array.length; i++) {
     
      for (let j = 0; j < array[i].length; j++) {
      
        
        if (!fArr.includes(array[i][j])) {
            fArr.push(array[i][j])
        }
      
      }
    }
  console.log(fArr)
  }
  
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
  uniteUnique([1, 2, 3], [5, 2, 1]);
  uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]);
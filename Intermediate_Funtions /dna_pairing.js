function pairElement(str) {
    let newArr = [];
    for (let i = 0; i < str.length; i++) {
  
      switch (str[i]) {
  
        case ("G"):
          newArr.push(["G","C"])
          break
        case ("C"):
          newArr.push(["C","G"])
          break
        case ("A"):
          newArr.push(["A","T"])
          break
        case ("T"):
          newArr.push(["T","A"])
          break
      }
      
    }
    // return newArr
    console.log(newArr)
  }
  pairElement("GCG");
  pairElement("TTGAG");
  pairElement("CTCTA");
  pairElement("ATCGA");
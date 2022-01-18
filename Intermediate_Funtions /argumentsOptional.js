function addTogether() {
    const [first,second] = arguments
    // console.log(second)
    if(typeof(first) !== "number" || (second && typeof second !== 'number')){
     console.log(undefined)
    }
    if(typeof second === 'number'){
    //   console.log("second if "+second, first)
      console.log(first+second)
    }else{
    //   console.log("else "+first)
       return second => addTogether(first, second);
      
    }

    }
  
  
  addTogether(2,3);
  addTogether(23, 30);
  addTogether(5)(7);
  addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
  addTogether(2, "3");
  addTogether(2)([3])
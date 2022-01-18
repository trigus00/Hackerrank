function truthCheck(collection, pre) {
    let counter = 0; 
    for(let c in collection ){
    //   console.log(collection[c][pre])
      if(collection[c].hasOwnProperty(pre) && Boolean (collection[c][pre])){
        counter ++;
      }
    }
    
    counter == collection.length;
    console.log(counter == collection.length)
    return counter == collection.length
  }
  
  truthCheck([
    {"user": "Tinky-Winky", "sex": "male"}, 
    {"user": "Dipsy", "sex": "male"}, 
    {"user": "Laa-Laa", "sex": "female"}, 
    {"user": "Po", "sex": "female"}], "sex");
  truthCheck([
    {"user": "Tinky-Winky", "sex": "male"}, 
    {"user": "Dipsy"}, 
    {"user": "Laa-Laa", "sex": "female"}, 
    {"user": "Po", "sex": "female"}], "sex")
  
  truthCheck([
    {"user": "Tinky-Winky", "sex": "male", "age": 0},
    {"user": "Dipsy", "sex": "male", "age": 3}, 
    {"user": "Laa-Laa", "sex": "female", "age": 5}, 
    {"user": "Po", "sex": "female", "age": 4}], "age");
    
  truthCheck([
    {"name": "Pete", "onBoat": true}, 
    {"name": "Repeat", "onBoat": true}, 
    {"name": "FastForward", "onBoat": null}], "onBoat")
  truthCheck([{"single": "yes"}], "single");
  truthCheck([
    {"single": "double"}, 
    {"single": undefined}], "single")
  truthCheck([
    {"single": "double"}, 
    {"single": NaN}], "single")
  
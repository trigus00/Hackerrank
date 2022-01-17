function fearNotLetter(str) {
    let start = str.charCodeAt(0)
    for(let i = 0; i <str.length;i++){
      if(str.charCodeAt(i) === start){
        // console.log(str.charCodeAt(i))
        start ++
      }else {
        let missing = str.charCodeAt(i)-1
        console.log (String.fromCharCode(missing))
      }
    }
  
  }
fearNotLetter("abce");
fearNotLetter("abcdefghjklmno")
fearNotLetter("stvwx");
fearNotLetter("bcdf");
fearNotLetter("abcdefghijklmnopqrstuvwxyz")
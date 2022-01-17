function myReplace(str, before, after) {
    let regax = /^[A-Z]/
    
    if(regax.test(before)){
      after = after[0].toUpperCase() + after.substring(1)
      
    }else{
      after = after[0].toLowerCase() + after.substring(1)
    }
    console.log(str.replace(before,after))
   
   }
   
   myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
   myReplace("He is Sleeping on the couch", "Sleeping", "sitting")
   myReplace("Let us get back to more Coding", "Coding", "algorithms")
   myReplace("His name is Tom", "Tom", "john")
   myReplace("Let us get back to more Coding", "Coding", "algorithms")
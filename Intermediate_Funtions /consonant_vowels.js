function translatePigLatin(str) {
    let regax = /([aeiou])/gi
    let pigLatin = ''
    
  if(str.charAt(0).match(regax)){
    pigLatin = str + 'way'
  }
  else{
    let consonant = str.substr(0,str.search(regax))
    let strings = str.substr(str.search(regax))
    console.log(strings)
    if(consonant == ''){
      consonant = str
      pigLatin =  consonant + 'ay'
      
    }else{
      pigLatin = strings + consonant + 'ay'
    }
   
    
  }
  return (pigLatin)
   }
    
  
  
  translatePigLatin("consonant");
  translatePigLatin("california");
  translatePigLatin("glove");
  translatePigLatin("algorithm");
  translatePigLatin("eight");
  translatePigLatin("rhythm");
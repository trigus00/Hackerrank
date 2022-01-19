const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
 
function rot13(str) {
//  create an accumulator 
let cipher = ''
// loop the string 
for (let i = 0; i< str.length;i++){
  
  let letter = str[i]

  let isLetter = alphabet.includes(letter);
  // if character not a letter, add to accumulator 
  if(!isLetter){
    
    cipher+=letter 
  }else{
    // Else rotate + - 13 
    const letterIndex = alphabet.findIndex((l)=>l=== letter)
    cipher += alphabet[letterIndex +13 ]  ||  alphabet[letterIndex - 13 ] 
    console.log(cipher)
  }
      
  }
  console.log(cipher);
  return cipher 
}
rot13("SERR PBQR PNZC");
rot13("SERR CVMMN!");
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")
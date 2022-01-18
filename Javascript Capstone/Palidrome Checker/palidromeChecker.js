function palindrome(str) {
    // 	One character that is not a word character as defined by your engine's \w
    let regax = /[\W_]/g
    
    let lowerCase = str.toLowerCase().replace(regax,'');
    // console.log(lowerCase)
    
    let reverse = lowerCase.split('').reverse().join('')
    // console.log(reverse)
    
    if(lowerCase == reverse){
      console.log (true)
      return true;
    }else {
      console.log(false)
      return false;
    }
    }
    
    // palindrome("eye");
    // palindrome("_eye");
    // palindrome("race car");
    // palindrome("not a palindrome");
    // palindrome("A man, a plan, a canal. Panama");
    // palindrome("never odd or even");
    // palindrome("nope");
    // palindrome("almostomla");
    // palindrome("My age is 0, 0 si ega ym.");
    // palindrome("1 eye for of 1 eye.");
    // palindrome("0_0 (: /-\ :) 0-0") ;
    // palindrome("five|\_/|four")
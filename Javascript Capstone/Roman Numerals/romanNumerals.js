function convertToRoman(num) {
    let numValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let  roman= ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
  let romanNumbers = '';
  for(let i = 0; i < numValue.length; i++){
  
    while(numValue[i]<=num){
    
      console.log(numValue[i]<=num)
      romanNumbers= romanNumbers + roman[i];
      console.log("before roman: " +num)
      num -= numValue[i];
    }
  }
  console.log(romanNumbers)
  return romanNumbers;
  
  }
  convertToRoman(2);
  // convertToRoman(3);
  // convertToRoman(4);
  // convertToRoman(5);
  // convertToRoman(9);
  // convertToRoman(12);
  // convertToRoman(16);
  // convertToRoman(29)
  // convertToRoman(36);
  // convertToRoman(44);
  // convertToRoman(45);
  // convertToRoman(68);
  // convertToRoman(83);
  // convertToRoman(97);
  // convertToRoman(99);
  // convertToRoman(400);
  // convertToRoman(500);
  // convertToRoman(501);
  // convertToRoman(649);
  // convertToRoman(798);
  // convertToRoman(891);
  // convertToRoman(1000);
  // convertToRoman(1004);
  // convertToRoman(1006);
  // convertToRoman(1006);
  // convertToRoman(1023);
  // convertToRoman(2014);
  // convertToRoman(3999)
function spinalCase(str) {
    let regax = /\s+|_+/g
    let group = str.replace(/([a-z])([A-Z])/g,"$1 $2")
 console.log(group.replace(regax,'-').toLowerCase())
  }
  
  spinalCase('This Is Spinal Tap');
  spinalCase("thisIsSpinalTap");
  spinalCase("The_Andy_Griffith_Show")
  spinalCase("Teletubbies say Eh-oh")
  spinalCase("AllThe-small Things")
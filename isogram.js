function isIsogram(str){

   const arr = Array.from(str.toLowerCase());

   return arr.map((e, _, a) => a.indexOf(e) === a.lastIndexOf(e)).reduce((acc, curr) => acc && curr, true)

  }


  console.log(isIsogram("Dermatoglyphics"))
  console.log(isIsogram("aba"))
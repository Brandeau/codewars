function number (array){
    return array.map((e, i) => `${i + 1}: ${e}`);
  }

console.log(number([]))
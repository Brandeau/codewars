function lowercaseCount(str){

    const result = str.match(/[a-z]/g);

    console.log(result);
    
    return result === null? 0 : result.length;

}

console.log(lowercaseCount("abcDEFghi"))


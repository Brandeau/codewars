const reverseSeq = n => {

    const arr = [];

    for(let i = n; i > 0; i--){
        arr.push(i);
    }
    
    return arr;
};

  console.log(reverseSeq(50000))